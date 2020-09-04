const randomExt = require('random-ext');

const config = {
  stratName: 'RSI_BULL_BEAR_ADX',
  gekkoConfig: {
    watch: {
      exchange: 'binance',
      currency: 'USDT',
      asset: 'XRP'
    },

//    daterange: 'scan',

    daterange: {
      from: '2020-04-21 00:00',
      to: '2020-05-09 00:00'
    },

    simulationBalance: {
      'asset': 1,
      'currency': 1
    },

    slippage: 0.05,
    feeTaker: 0.25,
    feeMaker: 0.15,
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

  candleValues: [5,10,15,30,60],
  getProperties: () => ({

   SMA_long: randomExt.integer(27, 10) * 50, // From 1300 to 500 in steps of 50
   SMA_short: randomExt.integer(60, 40),

   BULL_RSI: randomExt.integer(13, 7),
   BULL_RSI_high: randomExt.integer(85, 70),
   BULL_RSI_low: randomExt.integer(65, 40),

   BEAR_RSI: randomExt.integer(20, 10),
   BEAR_RSI_high: randomExt.integer(60, 40),
   BEAR_RSI_low: randomExt.integer(30, 10),
    
BULL_MOD_high = 5,
BULL_MOD_low = -5,
BEAR_MOD_high = 15,
BEAR_MOD_low = -5,



   ADX: randomExt.integer(5, 2),
   ADX_high: randomExt.integer(80, 60),
   ADX_low: randomExt.integer(60, 40),


   

 candleSize: config.candleValues[randomExt.integer(config.candleValues.length - 1, 0)]
  })
};

module.exports = config;

