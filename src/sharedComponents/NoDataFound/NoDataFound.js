import Octicon from "react-octicon";
import styled from "styled-components";

export const NoDataFound = ({ text }) => {
  return (
    <Container>
      <Wrapper>
        <Octicon name="inbox" mega />
        <p>{text}</p>
      </Wrapper>
    </Container>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: #f1f1f1;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  width: 612px;
  height: 140px;
  margin: auto;
  border-radius: 4px;
  border: 1px solid;
  p {
    font-size: 18px;
  }
`;

const Container = styled.div`
  display: flex;
  height: 84vh;
`;
