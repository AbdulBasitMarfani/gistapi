import styled from "styled-components";
import GlobalStyles from "./GlobalStyle";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { Header, GistList } from "components";

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
