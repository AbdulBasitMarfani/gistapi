import styled from "styled-components";
import Octicon from "react-octicon";

export const IconContainer = ({ iconName, link, text }) => {
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
  text-overflow: ellipsis;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
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
