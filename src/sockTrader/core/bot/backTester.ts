import moment = require("moment");
import Wallet, {IAssetMap} from "../assets/wallet";
import {ICandle} from "../candles/candleCollection";
import localExchange from "../exchanges/localExchange";
import LocalExchange from "../exchanges/localExchange";
import SockTrader from "./sockTrader";

export interface IBackTestConfig {
    assets: IAssetMap;
}

interface InputCandle {
    close: number;
    high: number;
    low: number;
    open: number;
    timestamp: string;
    volume: number;
}

/**
 * The BackTester enables you to test your strategy against a fake dummy exchange
 * and optimize to the point of content
 */
export default class BackTester extends SockTrader {

    /**
     * Creates a new BackTester
     * @param {IBackTestConfig} config
     * @param {InputCandle} inputCandles
     */
    constructor(config: IBackTestConfig, private inputCandles: InputCandle[]) {
        super();

        const wallet = new Wallet(config.assets);
        this.exchange = localExchange.getInstance(wallet);
    }

    async start(): Promise<void> {
        await super.start();

        if (!this.inputCandles || this.inputCandles.length === 0) {
            throw new Error("No candles found as input.");
        }

        if (!this.eventsBound) {
            this.subscribeToExchangeEvents(this.strategyConfigurations);

            this.strategyConfigurations.forEach(c => {
                const strategy = new c.strategy(c.pair, this.exchange);
                this.bindStrategyToExchange(strategy);
                this.bindExchangeToStrategy(strategy);
                this.bindExchangeToReporters(this.reporters);
            });

            this.eventsBound = true;
        }

        const candles = this.hydrateCandles(this.inputCandles);

        await (this.exchange as LocalExchange).emitCandles(candles);
    }

    private hydrateCandles(candles: InputCandle[]): ICandle[] {
        return candles.map((c: any) => ({
            ...c,
            timestamp: moment(c.timestamp),
        } as ICandle));
    }
}
