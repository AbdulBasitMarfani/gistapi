import { render } from "@testing-library/react";
import { UserInfo } from "./UserInfo";
const files = {
  "readme.txt": {
    filename: "gistfile1.txt",
    raw_url:
      "https://gist.githubusercontent.com/dwfault/80059b65e85973dbd629dff8d041588d/raw/3599c7641b180f2a4b6041d5e0f2e38f073f0fe6/gistfile1.txt",
  },
  "script.txt": {
    filename: "test.xml",
    raw_url:
      "https://gist.githubusercontent.com/Bezarius/cf8d6d227abb4450fa548c15148d5285/raw/b8aad7d46618739da077c0e0a84d26f805f2f929/test.xml",
  },
};

describe("UserInfo", () => {
  it("should match snapshot", () => {
    const { asFragment } = render(
      <UserInfo
        userImage="https://avatars.githubusercontent.com/u/127468175?v=4"
        userName="Abdul Basit"
        files={files}
        forksUrl="https://api.github.com/gists/3d62c5bac006167e2bf09b938e172bef/forks"
        comments={0}
        commentsUrl="https://api.github.com/gists/3d62c5bac006167e2bf09b938e172bef/comments"
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
