import { Container, ScrollArea } from "@radix-ui/themes";
import { React, useEffect, useState } from "react";

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

  return <Container size="4"></Container>;
}

export default Likable;
