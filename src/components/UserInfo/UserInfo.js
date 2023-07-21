import styled from "styled-components";
import IconContainer from "../../sharedComponets/IconContainer/IconContainer";

export const UserInfo = ({
  userName,
  userImage,
  files,
  forksUrl,
  comments,
  commentsUrl,
}) => {
  console.log("userImage: ", userImage);
  console.log("userName: ", userName);
  //   return userName;
  const fileCount = Object.keys(files).length;
  return (
    <Wrapper>
      <UserBaiscData>
        <ImageWrapper src={userImage} />
        <NameWrapper>{userName}</NameWrapper>
      </UserBaiscData>
      <IconWrapper>
        <IconContainer iconName="code" text={`${fileCount} Files`} />
        <IconContainer iconName="repo-forked" text="Forks" link={forksUrl} />
        <IconContainer
          iconName="comment"
          text={`${comments} Comments`}
          link={commentsUrl}
        />
        <IconContainer iconName="star" text="Stars" />
      </IconWrapper>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const UserBaiscData = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
`;

const ImageWrapper = styled.img.attrs((props) => ({
  src: props.src,
}))`
  width: 30px;
  height: 30px;
  border-radius: 50%;
`;

const NameWrapper = styled.span`
  display: block;
  font-size: 12px;
  color: var(--primary-color);
`;

const IconWrapper = styled.div`
  display: inline-flex;
  gap: 1rem;
`;
