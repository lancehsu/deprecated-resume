import React, { FC } from "react";
import { Content, Text } from "@adobe/react-spectrum";
import Bios from "./Bios";

const Container: FC = () => {
  return (
    <div className="container" style={{ width: "100vw", height: "100vh" }}>
      <Content>
        <Bios />
        <Text>OK</Text>
      </Content>
    </div>
  );
};

export default Container;
