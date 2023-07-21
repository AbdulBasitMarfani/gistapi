import styled from "styled-components";
import UserInfo from "./UserInfo";
import { getFormattedDate } from "../utils/helper";
import Files from "./Files";

const Gist = (props) => {
  console.log("gist: ", props);
  const {
    description,
    owner: { login: userName, avatar_url: userImage },
    files,
    comments,
    forks_url: forksUrl,
    created_at: createdAt,
    updated_at: updatedAt,
    comments_url: commentsUrl,
  } = props;

  const userInfoProps = {
    userName,
    userImage,
    files,
    forksUrl,
    comments,
    commentsUrl,
  };
  console.log("getFormattedDate(createdAt): ", getFormattedDate(createdAt));
  return (
    <InfoCardWrapper>
      <UserInfo {...userInfoProps} />
      <FlexDiv>
        <DateWrapper>
          <p>Created at:</p>
          <p>{getFormattedDate(createdAt)}</p>
        </DateWrapper>
        <DateWrapper>
          <p>Last Updated:</p>
          <p>{getFormattedDate(updatedAt)}</p>
        </DateWrapper>
      </FlexDiv>
      {description && <span>{description}</span>}
      <Files files={files} />
    </InfoCardWrapper>
  );
};

const InfoCardWrapper = styled.div`
  padding: 1.5rem;
  marging: 0.5rem 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  border-bottom: 1px solid var(--border-color);
  min-height: 140px;
  span {
    margin: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    font-weight: 600;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
`;

const DateWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
  font-size: 12px;
`;

const FlexDiv = styled.div`
  display: flex;
  gap: 1rem;
`;

export default Gist;
