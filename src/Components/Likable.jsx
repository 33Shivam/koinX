import {
  Container,
  Flex,
  Heading,
  ScrollArea,
  Avatar,
  Text,
  Card,
  Box,
  AspectRatio,
  Inset,
} from "@radix-ui/themes";
import { React, useEffect, useState } from "react";
import "./Likable.css";
function Likable() {
  const API = "https://api.coingecko.com/api/v3/search/trending";

  const [data, setData] = useState();

  useEffect(() => {
    fetch(API)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        console.log("Fetched data:", data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <Container size="4">
      <Flex gap="9" direction="column">
        <Flex direction="column" gap="3">
          <Heading> You May Also Like</Heading>
          <Container size="4" className="mainContainer">
            <Flex direction="row" gap="6">
              {data &&
                data.coins.map((coin) => (
                  <div className="slider">
                    <Card className="card">
                      <Inset clip="padding-box">
                        <Flex key={coin.item.name} direction="column" gap="3">
                          <div className="wrapper">
                            <Flex align="center" gap="3">
                              <Avatar src={coin.item.thumb} fallback="A" />
                              <Text size="3" weight="bold">
                                {coin.item.name}
                              </Text>
                            </Flex>
                            <Text size="4" weight="bold">
                              {coin.item.data.price.substring(0, 4)}
                            </Text>
                          </div>
                          <div className="imageContainer">
                            <img
                              src={coin.item.data.sparkline}
                              className="img"
                            />
                          </div>
                        </Flex>
                      </Inset>
                    </Card>
                  </div>
                ))}
            </Flex>
          </Container>
        </Flex>
        <Flex direction="column" gap="3">
          <Heading> Trending Coins</Heading>
          <Container size="4" className="mainContainer">
            <Flex direction="row" gap="6">
              {data &&
                data.coins.map((coin) => (
                  <div className="slider">
                    <Card className="card">
                      <Inset clip="padding-box">
                        <Flex key={coin.item.name} direction="column" gap="3">
                          <div className="wrapper">
                            <Flex align="center" gap="3">
                              <Avatar src={coin.item.thumb} fallback="A" />
                              <Text size="3" weight="bold">
                                {coin.item.name}
                              </Text>
                            </Flex>
                            <Text size="4" weight="bold">
                              {coin.item.data.price.substring(0, 4)}
                            </Text>
                          </div>
                          <div className="imageContainer">
                            <img
                              src={coin.item.data.sparkline}
                              className="img"
                            />
                          </div>
                        </Flex>
                      </Inset>
                    </Card>
                  </div>
                ))}
            </Flex>
          </Container>
        </Flex>
      </Flex>
    </Container>
  );
}

export default Likable;
