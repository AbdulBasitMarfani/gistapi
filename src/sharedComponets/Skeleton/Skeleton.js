import styled from "styled-components";

export const Skeleton = ({ count }) => {
  console.log("count: ", count);
  return (
    <Wrapper>
      {Array(count)
        .fill("")
        .map((_, index) => (
          <Shimmer key={index} />
        ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  max-width: 700px;
  margin: 0 auto;
`;

const Shimmer = styled.div`
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  display: flex;
  border-radius: 10px;
  height: 170px;
  align-items: center;
  justify-content: center;
  display: block;
  background-color: rgba(0, 0, 0, 0.11);
  border-radius: 4px;
  animation: 1.5s ease-in-out 0.5s infinite normal none running
    shimmer-animation;
  @keyframes shimmer-animation {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0.5;
    }
    100% {
      opacity: 1;
    }
  }
`;
