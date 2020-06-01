import React from "react";
import styled from "styled-components";

import "./App.css";
import Auth from "./components/Shared/Auth";

function App() {
  return (
    <AppContainer>
      <Auth />
    </AppContainer>
  );
}

const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;
export default App;
