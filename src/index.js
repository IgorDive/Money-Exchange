// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
  let currencyRemainder;
  let exchangeResult = {};

  if ( currency < 1 ) return exchangeResult;
  if ( currency > 10000 ) {
      exchangeResult.error = 'You are rich, my friend! We don\'t have so much coins for exchange';
      return exchangeResult; 
  }
  if ( currency >= 50 ) {
      exchangeResult.H = Math.floor( currency / 50 );
      currencyRemainder = currency % 50;
  }
  if ( currency < 50 && currency >= 25 || currencyRemainder >= 25 ) {
      exchangeResult.Q = Math.floor( (currencyRemainder || currency) / 25 );
      currencyRemainder = (currencyRemainder || currency) % 25;
  }
  if ( currency < 25 && currency >= 10 || currencyRemainder >= 10 ) {
    exchangeResult.D = Math.floor( (currencyRemainder || currency) / 10 );
    currencyRemainder = (currencyRemainder || currency) % 10;
  }
  if ( currency < 10 && currency >= 5 || currencyRemainder >= 5 ) {
    exchangeResult.N = Math.floor( (currencyRemainder || currency) / 5 );
    currencyRemainder = (currencyRemainder || currency) % 5;
  }
  if ( currency < 5 && currency >= 1 || currencyRemainder >= 1 ) {
    exchangeResult.P = currencyRemainder || currency;
  }

  return exchangeResult;
}
