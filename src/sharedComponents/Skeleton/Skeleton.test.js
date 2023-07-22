import { render } from "@testing-library/react";
import { Skeleton } from "./Skeleton";

describe("Gist", () => {
  it("should match snapshot", () => {
    const { asFragment } = render(<Skeleton count={4} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
