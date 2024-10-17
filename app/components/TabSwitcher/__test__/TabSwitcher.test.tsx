import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import TabSwitcher from "../TabSwitcher";

describe("TabSwitcher component", () => {
  it("renders the TabSwitcher", () => {
    render(<TabSwitcher />);
    const titleElement = screen.getByText(/Family Management Dashboard/i);

    expect(titleElement).toBeInTheDocument();
  });

  it("navigates between tabs", () => {
    render(<TabSwitcher />);
    const titleElement = screen.getByText(/Family Management Dashboard/i);

    expect(titleElement).toBeInTheDocument();

    const personalTab = screen.getByTestId("personal-tab-button");

    fireEvent.click(personalTab);

    waitFor(() => {
      const freeCardTitle = screen.getByText(/free/i);
      const freePersonalCardSubtitle = screen.getByText(
        /Get a BitGuardian vault/i
      );

      expect(freeCardTitle).toBeInTheDocument();
      expect(freePersonalCardSubtitle).toBeInTheDocument();
    });

    const businessTab = screen.getByTestId("business-tab-button");

    fireEvent.click(businessTab);

    waitFor(() => {
      const businessCardTitle = screen.getByText(/enterprise/i);
      const businessPersonalCardSubtitle = screen.getByText(
        /Enhanced Team Management/i
      );

      expect(businessCardTitle).toBeInTheDocument();
      expect(businessPersonalCardSubtitle).toBeInTheDocument();
    });
  });
});
