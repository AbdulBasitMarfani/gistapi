import { render } from "@testing-library/react";
import { IconContainer } from "./IconContainer";

const props = { iconName: "code", text: "Files" };

describe("Gist", () => {
  it("should match snapshot", () => {
    const { asFragment } = render(<IconContainer {...props} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
