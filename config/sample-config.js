const randomExt = require('random-ext');

const config = {
  stratName: 'IWannaBeRich_BBRSI',
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

interval : randomExt.integer(30, 1),
low : randomExt.integer(200, 1),
high : randomExt.integer(200, 1),
persistence : randomExt.integer(13, 1),


TimePeriod : randomExt.integer(1000, 1),
NbDevUp : randomExt.integer(1000, 1),
NbDevDn : randomExt.integer(1000, 1),


   

 candleSize: config.candleValues[randomExt.integer(config.candleValues.length - 1, 0)]
  })
};

module.exports = config;

