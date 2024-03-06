import React from "react";

const Table = ({ coins }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Symbol</th>
          <th>Price</th>
          <th>Price Change (24h)</th>
          {/* Add more table headers as needed */}
        </tr>
      </thead>
      <tbody>
        {coins.map((coin) => (
          <tr key={coin.item.id}>
            <td>{coin.item.id}</td>
            <td>{coin.item.name}</td>
            <td>{coin.item.symbol}</td>
            <td>{coin.item.data.price}</td>
            <td>{coin.item.data.price_change_percentage_24h.usd}%</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
