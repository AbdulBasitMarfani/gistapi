import { render } from "@testing-library/react";
import { NoDataFound } from "./NoDataFound";

describe("Gist", () => {
  it("should match snapshot", () => {
    const { asFragment } = render(<NoDataFound text={"No Gist Found"} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
