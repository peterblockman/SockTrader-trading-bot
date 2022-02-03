<p align="center"><img width="150" height="150" src="https://raw.githubusercontent.com/SockTrader/SockTrader/master/docs/assets/SockTraderLogo.png" alt="SockTrader logo" /></p>

<h1 align="center">SockTrader v2</h1>
<p align="center"><b>Cryptocurrency trading bot</b></p>

<p align="center">
  <a href="https://www.gnu.org/licenses/gpl-3.0"><img src="https://img.shields.io/badge/License-GPL%20v3-blue.svg" alt="License: GPL v3"></a>
  <a href="https://codecov.io/gh/SockTrader/SockTrader"><img src="https://codecov.io/gh/SockTrader/SockTrader/branch/master/graph/badge.svg" /></a>
  <a href="https://sonarcloud.io/dashboard?id=SockTrader_SockTrader"><img src="https://sonarcloud.io/api/project_badges/measure?project=SockTrader_SockTrader&metric=reliability_rating" /></a>
  <a href="https://sonarcloud.io/dashboard?id=SockTrader_SockTrader"><img src="https://sonarcloud.io/api/project_badges/measure?project=SockTrader_SockTrader&metric=sqale_rating" /></a>
  <a href="https://circleci.com/gh/SockTrader"><img src="https://circleci.com/gh/SockTrader/SockTrader/tree/master.svg?style=shield" alt="Build status"></a>
  <a href="https://codeclimate.com/github/SockTrader/SockTrader/maintainability"><img src="https://api.codeclimate.com/v1/badges/19589f9237d31ca9dcf6/maintainability" /></a>
</p>

<p align="center"><b>Join the community <a href="https://join.slack.com/t/socktrader/shared_invite/zt-12ncj65l3-T7cacrk7~cEacjZUyxnamA"><img style="vertical-align: middle;" src="https://img.shields.io/badge/Slack-4A154B?style=for-the-badge&logo=slack" alt="Slack"></a></b></p>

## What is "SockTrader"?
SockTrader is an open source cryptocurrency trading bot. You can use it to automatically buy and/or sell cryptocurrencies based on a strategy that you've programmed.
The strategy basically contains a set of rules that will define when and how the bot should act in the cryptocurrency market. These rules can be based on technical analysis ([what is technical analysis?](https://www.investopedia.com/terms/t/technicalanalysis.asp))
or you could simply tell the bot to buy/sell at certain price levels. In fact, it's up to you to decide the rules of the game!

The name "SockTrader" comes from web**sock**et based trading bot. Which means that SockTrader will try to make use of a realtime connection with the exchange. This has the advantage
that one can act very quickly in a changing market with low latency.

## Features
- 🚀 Realtime super-fast websocket trading.
- 📈 50+ Technical indicators. ([docs](https://github.com/anandanand84/technicalindicators))
- 🌈 Written in TypeScript!
- 🌿 Unit tested source code.
- 📝 Paper trading a strategy on LIVE exchange data.
- 🏡 Backtesting engine with local data.
- 🚢 Run SockTrader inside a docker container.
- More features soon..

## Getting started

# Quickstart

1. Install NodeJS dependencies. `npm i`
2. Copy `config/default.json` to `config/local.json` and edit.
3. Run the MovingAverageStrategy on LocalExchange. `npm start`

## Additional scripts

- Development watch mode. `npm run watch`
- Production build. `npm run build`
- Build and execute production build. `npm run start:prod`
- Run test suite. `npm test`


## Use CLI

1. Make sure to install project dependencies. `npm i`
2. Run cli tool. `ts-node src/cli.ts`

You will see the following output:
```
Usage: socktrader [options] [command]

Options:
  -V, --version   output the version number
  -h, --help      display help for command

Commands:
  run [options]
  help [command]  display help for command

```

To start a strategy using the cli run:
```ts-node src/cli.ts run -s src/strategies/localMovingaverageStrategy.ts```

## Connect your Binance account

You feel like your strategy is production ready?
Good! We'll help you to connect your SockTrader strategy to your Binance account.

1. Copy `config/default.json` to `config/local.json`
2. Go to your Binance account under API Management, create a new API key
3. Provide the apiSecret and apiKey in `config/local.json`
4. Don't forget to change the exchange in your strategy to `new Binance()` and you're good to go!

### API key restrictions

By default, the newly created API key does not allow you to place orders, only reads are allowed.
To get started:

1. Go to your Binance account
2. Under API restrictions enable 'Enable Spot & Margin Trading'

## Join the community
<a href="https://join.slack.com/t/socktrader/shared_invite/zt-12ncj65l3-T7cacrk7~cEacjZUyxnamA"><img src="https://img.shields.io/badge/Slack-4A154B?style=for-the-badge&logo=slack" alt="Slack"></a>

## Contributors
<a href="https://github.com/SockTrader/SockTrader/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=SockTrader/SockTrader" />
</a>

## DISCLAIMER
    Using a trading bot does not mean guaranteed profit.
    Also, trading crypto currency is considered high risk.
    Losses are possible, which SockTrader cannot be held responsible for.
