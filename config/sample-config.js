const randomExt = require('random-ext');

const config = {
  stratName: 'macd_cross',
  gekkoConfig: {
    watch: {
      exchange: 'binance',
      currency: 'USDT',
      asset: 'ETH'
    },

//    daterange: 'scan',

    daterange: {
      from: '2020-04-01 00:00',
      to: '2020-04-18 00:00'
    },

    simulationBalance: {
      'asset': 9,
      'currency': 100
    },

    slippage: 0.05,
    feeTaker: 0.075,
    feeMaker: 0.075,
    feeUsing: 'taker', // maker || taker

  },
  apiUrl: 'http://localhost:3000',

  // Population size, better reduce this for larger data
  populationAmt: 20,

  // How many completely new units will be added to the population (populationAmt * variation must be a whole number!!)
  variation: 0.5,

  // How many components maximum to mutate at once
  mutateElements: 7,

  // How many parallel queries to run at once
  parallelqueries: 5,

  // Min sharpe to consider in the profitForMinSharpe main objective
  minSharpe: 0.5,

  // profit || score || profitForMinSharpe
  // score = ideas? feedback?
  // profit = recommended!
  // profitForMinSharpe = same as profit but sharpe will never be lower than minSharpe
  mainObjective: 'profitForMinSharpe',

  // optionally recieve and archive new all time high every new all time high
  notifications: {
    email: {
      enabled: false,
      receiver: 'destination@some.com',
      senderservice: 'gmail',
      sender: 'origin@gmail.com',
      senderpass: 'password',
    },
  },

  candleValues: [5],
  getProperties: () => ({
historySize:randomExt.integer(1000,1),
    [short]
low:randomExt.integer(100,1), 
high:randomExt.integer(100,1),
short:randomExt.integer(100,1), 

[long]
low:randomExt.integer(100,1),
high:randomExt.integer(100,1),
long:randomExt.integer(100,1),

[signal]
low:randomExt.integer(100,1),
high:randomExt.integer(100,1),
signal:randomExt.integer(100,1)

[stop_loss]
low :0.5,
high : 99.0,
stop_loss : 0.5,

[take_profit]
low :0.2,
high :100.0,
take_profit : 1.0,
   
    candleSize: randomExt.pick(config.candleValues)
  })
};

module.exports = config;
