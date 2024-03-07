import React from "react";
import "./Navbar.css";
import {
  Button,
  Container,
  Flex,
  Text,
  AspectRatio,
  Avatar,
} from "@radix-ui/themes";

function Navbar() {
  return (
    <Container height="1">
      <Flex align="center" justify="between" className="navbarFlex">
        {/* <Avatar src="./logo.svg" fallback="A" size="1" /> */}
        <img src="./logo.svg" className="logo-img" />

        <Flex gap="7" align="center">
          <Text size="2" weight="bold" className="navText">
            Crypto Taxes
          </Text>
          <Text size="2" weight="bold" className="navText">
            Free Tools
          </Text>
          <Text size="2" weight="bold" className="navText">
            {" "}
            Resource Center
          </Text>
          <Button variant="solid" size="2">
            Getting Started
          </Button>
        </Flex>
      </Flex>
    </Container>
  );
}

export default Navbar;
