import { render, screen } from "@testing-library/react";
import PlanSwitcher from "../PlanSwitcher";

describe("PlanSwitcher component", () => {
  it("renders the PlanSwitcher", () => {
    render(<PlanSwitcher />);
    const titleElement = screen.getByText(
      /Choose a susbcription plan that fits your needs/i
    );

    expect(titleElement).toBeInTheDocument();
  });
});
