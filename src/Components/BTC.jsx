import {
  Card,
  Flex,
  Heading,
  Text,
  Inset,
  AspectRatio,
  Button,
  Avatar,
} from "@radix-ui/themes";
import React, { useEffect, useRef, memo, useState } from "react";
import TradingViewWidget from "./TradingView";
import "./BTC.css";

function BTC() {
  const API = "https://api.coingecko.com/api/v3/search/trending";

  const [data, setData] = useState();

  useEffect(() => {
    fetch(API)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        // console.log("Fetched data:", data);
      })
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  }, []);

  const text = "Trending Coins (24h)";
  return (
    <Flex gap="8">
      <Flex direction="column" align="start">
        <TradingViewWidget />
      </Flex>

      <Flex direction="column" className="left-card" gap="6">
        <Card className="info-card">
          <Flex direction="column" gap="4">
            <Heading className="card-text" align="center">
              Get Started with KoinX for FREE
            </Heading>
            <Text size="2" align="center" weight="light">
              With our range of features that you can equip for FREE With our
              range of features that you can equip for free, Koinx allows you to
              be more educated and aware of your tax reports.{" "}
            </Text>
            <AspectRatio ratio={16 / 8}>
              <img
                src="./cardimg.jpg"
                alt="A house in a forest"
                style={{
                  objectFit: "cover",
                  width: "100%",
                  height: "100%",
                  borderRadius: "var(--radius-2)",
                }}
              />
            </AspectRatio>

            <Button color="blue" size="4">
              Get Started for FREE
            </Button>
          </Flex>
        </Card>

        <Card>
          <Flex direction="column" gap="4">
            <Heading size="4">{text}</Heading>
            {data &&
              data.coins.slice(0, 3).map((coin) => (
                <Flex key={coin.item.id} justify="between">
                  <Flex align="center" gap="3">
                    <Avatar src={coin.item.thumb} fallback="A" />
                    <Text size="2" weight="bold">
                      {coin.item.name}
                    </Text>
                  </Flex>
                  <Text size="2">{coin.item.data.price.substring(0, 4)}</Text>
                </Flex>
              ))}
          </Flex>
        </Card>
      </Flex>
    </Flex>
  );
}

export default BTC;
