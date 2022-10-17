import { render, screen } from "@testing-library/react";
import Badge, { Props as BadgeProps } from ".";

describe("Badge", () => {
  const props: BadgeProps = {
    status: "OPEN",
    testId: "badge",
  };

  it("should render a Badge component", async () => {
    render(<Badge {...props} />);
    expect(
      await screen.findByTestId(props.testId as string)
    ).toBeInTheDocument();
  });

  it("should render a Badge component with the open  status", async () => {
    render(<Badge {...props} />);
    expect(await screen.findByTestId(props.testId as string)).toHaveAttribute(
      "data-is-open",
      "true"
    );
  });
  it("should render a Badge component with the closed status", async () => {
    const newProps = { ...props };
    newProps.status = "CLOSED";
    render(<Badge {...newProps} />);
    expect(await screen.findByTestId(props.testId as string)).toHaveAttribute(
      "data-is-open",
      "false"
    );
  });
});
