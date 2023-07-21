import styled from "styled-components";
import Octicon from "react-octicon";

const IconContainer = ({ iconName, link, text }) => {
  return (
    <Wrapper>
      <Octicon name={iconName} />
      {link ? (
        <AnchorWrapper href={link} target="_blank">
          {text}
        </AnchorWrapper>
      ) : (
        <TextWrapper>{text}</TextWrapper>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: inline-flex;
  gap: 0.25rem;
  justify-content: center;
  align-items: center;
//   width: 100px;
  overflow: hidden;
  text-overflow: ellipsis;
  color: var(--primary-color);
`;

const AnchorWrapper = styled.a`
  text-decoration: none;
  font-size: 12px;
  color: var(--primary-color);
`;

const TextWrapper = styled.span`
  font-size: 12px;
`;

export default IconContainer;
