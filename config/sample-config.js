const randomExt = require('random-ext');

const config = {
  stratName: 'NEO',
  gekkoConfig: {
    watch: {
      exchange: 'binance',
      currency: 'USDT',
      asset: 'BNB'
    },

//    daterange: 'scan',

    daterange: {
      from: '2020-08-01 00:00',
      to: '2020-08-18 00:00'
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
    

SMA_long: randomExt.float(1000,1),
SMA_short: randomExt.float(1000,1),


BULL_RSI: randomExt.float(1000,1),
BULL_RSI_high: randomExt.float(1000,1),
BULL_RSI_low: randomExt.float(1000,1),


IDLE_RSI: randomExt.float(1000,1),
IDLE_RSI_high: randomExt.float(1000,1),
IDLE_RSI_low: randomExt.float(1000,1),

BEAR_RSI: randomExt.float(1000,1),
BEAR_RSI_high: randomExt.float(1000,1),
BEAR_RSI_low: randomExt.float(1000,1),


ROC: randomExt.float(1000,1),
ROC_lvl: 0,


    
  })
};

module.exports = config;
