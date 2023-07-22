import { render } from "@testing-library/react";
import { Gist } from "./Gist";

const gist = {
  files: {
    "gistfile1.txt": {
      filename: "gistfile1.txt",
      raw_url:
        "https://gist.githubusercontent.com/dwfault/80059b65e85973dbd629dff8d041588d/raw/3599c7641b180f2a4b6041d5e0f2e38f073f0fe6/gistfile1.txt",
    },
    "test.xml": {
      filename: "test.xml",
      raw_url:
        "https://gist.githubusercontent.com/Bezarius/cf8d6d227abb4450fa548c15148d5285/raw/b8aad7d46618739da077c0e0a84d26f805f2f929/test.xml",
    },
  },
  forks_url:
    "https://api.github.com/gists/3d62c5bac006167e2bf09b938e172bef/forks",
  owner: {
    avatar_url: "https://avatars.githubusercontent.com/u/39902740?v=4",
    login: "JianHongHong",
  },
  comments: 0,
  comments_url:
    "https://api.github.com/gists/3d62c5bac006167e2bf09b938e172bef/comments",
  created_at: "2023-05-24T06:51:40Z",
  updated_at: "2023-05-24T06:51:40Z",
  description:
    "Solution to level 1 in Untrusted: http://alex.nisnevich.com/untrusted/",
};

describe("Gist", () => {
  it("should match snapshot", () => {
    const { asFragment } = render(<Gist {...gist} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
