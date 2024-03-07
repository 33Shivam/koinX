import React from "react";

const CoinInfo = ({ coin }) => {
  return (
    <div key={coin.id}>
      <h1>
        {coin.name} ({coin.symbol})
      </h1>
      <p>Price: {coin.data.price}</p>
      <p>Price Change (24h): {coin.data.price_change_percentage_24h.usd}%</p>
      <p>Market Cap: {coin.data.market_cap}</p>
      <p>Total Volume: {coin.data.total_volume}</p>
      <img src={coin.thumb} alt={coin.name} />
      <div>
        <img src={coin.data.sparkline} alt={`${coin.name} Sparkline`} />
      </div>
    </div>
  );
};

const AllCoinsInfo = ({ coins }) => {
  return (
    <div>
      <h1>All Cryptocurrency Information</h1>
      {coins.map((coin) => (
        <CoinInfo coin={coin} />
      ))}
    </div>
  );
};

export default AllCoinsInfo;
