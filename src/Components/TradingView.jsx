// TradingViewWidget.jsx
import {
  Avatar,
  Card,
  Container,
  Flex,
  Heading,
  Section,
} from "@radix-ui/themes";
import React, { useEffect, useRef, memo, useState } from "react";

function TradingViewWidget() {
  const container = useRef();
  let bitCoinAPI =
    "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=inr%2Cusd&include_market_cap=true&include_24hr_change=true";

  const [data, setdata] = useState();

  const [USDprice, setUSDPrice] = useState(0);
  const [INRprice, setINRPrice] = useState(0);

  useEffect(() => {
    fetch(bitCoinAPI)
      .then((response) => response.json())
      .then((data) => {
        setINRPrice(data.bitcoin.inr);
        setUSDPrice(data.bitcoin.usd);
        console.log("Fetched data:", data);
      })
      .then((data) => setdata({ data }))

      .catch((err) => console.log(err));
  }, []);
  const formattedUSD = USDprice.toLocaleString("en-US");
  const formattedINR = INRprice.toLocaleString("en-IN");

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = `
        {
          "width": "750",
          "height": "550",
          "borderColor": "#95d310",
          "symbol": "COINBASE:BTCUSD",
          "interval": "D",
          "timezone": "Etc/UTC",
          "theme": "light",
          "style": "2",
          "locale": "en",
          "enable_publishing": false,
          "backgroundColor": "rgba(255, 255, 255, 1)",
          "gridColor": "rgba(255, 255, 255, 0.06)",
          "hide_top_toolbar": true,
          "hide_legend": true,
          "save_image": false,
          "calendar": false,
          "hide_volume": true,
          "support_host": "https://www.tradingview.com"
        }`;
    container.current.appendChild(script);
  }, []);

  return (
    <>
      <Section size="1">
        <Flex direction="column" gap="4">
          <Flex align="center" gap="2">
            <Avatar src="./Bitcoin.svg" fallback="A" />
            <Heading size="4">BTC/USD</Heading>
          </Flex>
          <Flex gap="2" direction="column">
            <Heading size="8"> ${formattedUSD}</Heading>
            <Heading size="4" color="gray">
              ₹{formattedINR}
            </Heading>
          </Flex>
        </Flex>
      </Section>
      <div className="tradingview-widget-container" ref={container}>
        <div className="tradingview-widget-container__widget"> </div>
        <div className="tradingview-widget-copyright"></div>
      </div>
    </>
  );
}

export default memo(TradingViewWidget);
