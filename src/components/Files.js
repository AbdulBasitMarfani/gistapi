import styled from "styled-components";
import IconContainer from "./IconContainer";
export const Files = ({ files }) => {

  return (
    <FilesWrapper>
      {Object.values(files).map(({ filename, raw_url: rawUrl }) => (
        <IconContainer      
          iconName="file"
          link={rawUrl}
          text={filename}
          key={filename}
        />
      ))}
    </FilesWrapper>
  );
};

const FilesWrapper = styled.div`
  display: inline-flex;
  gap: 0.5rem;
  align-items: center;
  font-weight: 500;
  flex-wrap: wrap;
`;

export default Files;
