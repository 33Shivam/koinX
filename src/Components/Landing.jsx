import { Container, Flex, Section, Text } from "@radix-ui/themes";
import React from "react";
import BTC from "./BTC";
import CryptoDetails from "./CryptoDetails";
import Likable from "./Likable";

const currency = "USD";
function Landing() {
  return (
    <Section>
      <Container>
        <Flex direction="column" gap="3">
          <Flex align="center" justify="start" gap="2">
            <Text size="1" weight="light">
              Cryptocurrencies &gt;&gt;
            </Text>
            <Text size="1" weight="bold">
              {currency}
            </Text>
          </Flex>

          <BTC />
        </Flex>
      </Container>
      <Container>
        <CryptoDetails />
      </Container>
      <Section>
        <Likable />
      </Section>
    </Section>
  );
}

export default Landing;
