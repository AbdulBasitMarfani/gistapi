import { render } from "@testing-library/react";
import { Files } from "./Files";

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

describe("Files", () => {
  it("should match snapshot", () => {
    const { asFragment } = render(<Files files={files} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
