import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [stocks, setStocks] = useState([]);

  useEffect(() => {
    axios.get('/api/stocks')
      .then(response => {
        setStocks(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <h1>Stocks</h1>
      <ul>
        {stocks.map(stock => (
          <li key={stock.id}>{stock.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
