import styled from "styled-components";
import Header from "./components/Header";
import GlobalStyles from "./GlobalStyle";
import GistList from "./components/GistList";
import { Provider } from "react-redux";
import { store } from "./redux/store";

const App = () => {
  return (
    <Wrapper className="App" data-testid="app">
      <Provider store={store}>
        <Header />
        <GlobalStyles />
        <GistList />
      </Provider>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  font-size: 14px;
  line-height: 1.5;
`;

export default App;
