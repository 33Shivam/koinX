import React from "react";
import {
  Tabs,
  Box,
  Text,
  Flex,
  Card,
  Heading,
  Separator,
} from "@radix-ui/themes";
import "./CryptoDetails.css";

function CryptoDetails() {
  return (
    <Flex direction="column">
      <Tabs.Root defaultValue="Overview" style={{ maxWidth: "65%" }}>
        <Tabs.List>
          <Tabs.Trigger value="Overview">Overview</Tabs.Trigger>
          <Tabs.Trigger value="Fundamentals">Fundamentals</Tabs.Trigger>
          <Tabs.Trigger value="New Insights">New Insights</Tabs.Trigger>
          <Tabs.Trigger value="Sentiments">Sentiments</Tabs.Trigger>
          <Tabs.Trigger value="Team">Team</Tabs.Trigger>
          <Tabs.Trigger value="Technicals">Technicals</Tabs.Trigger>
          <Tabs.Trigger value="Tokennomics">Tokennomics</Tabs.Trigger>
        </Tabs.List>

        <Box px="4" pt="3" pb="2">
          <Tabs.Content value="Overview">
            <Text size="2">
              <Card className="performanceCard">
                <Flex width="100%" direction="column" gap="6">
                  <Flex direction="column" gap="4">
                    <Heading size="6">Performance</Heading>
                    <Flex gap="2" width="100%" justify="between" align="center">
                      <Flex direction="column" gap="1">
                        <Text size="1">Low</Text>
                        <Text size="2">$21,500</Text>
                      </Flex>
                      <div class="container">
                        <div class="marker"></div>
                      </div>
                      <Flex direction="column" gap="1">
                        <Text size="1">High</Text>
                        <Text size="2">$21,500</Text>
                      </Flex>
                    </Flex>
                    <Flex gap="2" width="100%" justify="between" align="center">
                      <Flex direction="column" gap="1">
                        <Text size="1">Low</Text>
                        <Text size="2">$21,500</Text>
                      </Flex>
                      <div class="container">
                        <div class="marker"></div>
                      </div>
                      <Flex direction="column" gap="1">
                        <Text size="1">High</Text>
                        <Text size="2">$21,500</Text>
                      </Flex>
                    </Flex>
                  </Flex>
                  <Flex direction="column" gap="4">
                    <Heading size="4">Fundamentals</Heading>
                    <Flex direction="row" gap="4" justify="between">
                      <Box>
                        <Flex direction="column" className="fundaClass" gap="2">
                          <Flex gap="9">
                            <Flex>
                              <Text weight="bold" color="gray" size="1">
                                Bitcoin Price
                              </Text>
                            </Flex>
                            <Flex>$64,000</Flex>
                          </Flex>
                          <Separator size="4" />
                        </Flex>
                        <Flex direction="column" className="fundaClass" gap="2">
                          <Flex gap="9">
                            <Flex>
                              <Text weight="bold" color="gray" size="1">
                                Bitcoin Price
                              </Text>
                            </Flex>
                            <Flex>$64,000</Flex>
                          </Flex>
                          <Separator size="4" />
                        </Flex>
                        <Flex direction="column" className="fundaClass" gap="2">
                          <Flex gap="9">
                            <Flex>
                              <Text weight="bold" color="gray" size="1">
                                Bitcoin Price
                              </Text>
                            </Flex>
                            <Flex>$64,000</Flex>
                          </Flex>
                          <Separator size="4" />
                        </Flex>
                        <Flex direction="column" className="fundaClass" gap="2">
                          <Flex gap="9">
                            <Flex>
                              <Text weight="bold" color="gray" size="1">
                                Bitcoin Price
                              </Text>
                            </Flex>
                            <Flex>$64,000</Flex>
                          </Flex>
                          <Separator size="4" />
                        </Flex>
                        <Flex direction="column" className="fundaClass" gap="2">
                          <Flex gap="9">
                            <Flex>
                              <Text weight="bold" color="gray" size="1">
                                Bitcoin Price
                              </Text>
                            </Flex>
                            <Flex>$64,000</Flex>
                          </Flex>
                          <Separator size="4" />
                        </Flex>
                      </Box>
                      <Box>
                        <Flex direction="column" className="fundaClass" gap="2">
                          <Flex gap="9">
                            <Flex>
                              <Text weight="bold" color="gray" size="1">
                                Bitcoin Price
                              </Text>
                            </Flex>
                            <Flex>$64,000</Flex>
                          </Flex>
                          <Separator size="4" />
                        </Flex>
                        <Flex direction="column" className="fundaClass" gap="2">
                          <Flex gap="9">
                            <Flex>
                              <Text weight="bold" color="gray" size="1">
                                Bitcoin Price
                              </Text>
                            </Flex>
                            <Flex>$64,000</Flex>
                          </Flex>
                          <Separator size="4" />
                        </Flex>
                        <Flex direction="column" className="fundaClass" gap="2">
                          <Flex gap="9">
                            <Flex>
                              <Text weight="bold" color="gray" size="1">
                                Bitcoin Price
                              </Text>
                            </Flex>
                            <Flex>$64,000</Flex>
                          </Flex>
                          <Separator size="4" />
                        </Flex>
                        <Flex direction="column" className="fundaClass" gap="2">
                          <Flex gap="9">
                            <Flex>
                              <Text weight="bold" color="gray" size="1">
                                Bitcoin Price
                              </Text>
                            </Flex>
                            <Flex>$64,000</Flex>
                          </Flex>
                          <Separator size="4" />
                        </Flex>
                        <Flex direction="column" className="fundaClass" gap="2">
                          <Flex gap="9">
                            <Flex>
                              <Text weight="bold" color="gray" size="1">
                                Bitcoin Price
                              </Text>
                            </Flex>
                            <Flex>$64,000</Flex>
                          </Flex>
                          <Separator size="4" />
                        </Flex>
                      </Box>
                    </Flex>
                  </Flex>
                </Flex>
              </Card>
            </Text>
          </Tabs.Content>
        </Box>
      </Tabs.Root>
    </Flex>
  );
}

export default CryptoDetails;
