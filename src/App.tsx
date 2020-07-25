import React, { FC } from "react";
import { defaultTheme, Provider } from "@adobe/react-spectrum";
import Container from "./components/Container";

const App: FC = () => (
  <div className="App">
    <Provider theme={defaultTheme}>
      <Container />
    </Provider>
  </div>
);

export default App;
