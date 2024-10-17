import { render, screen } from "@testing-library/react";
import SubscriptionCard from "../SubscriptionCard";

const mockCard = {
  planType: "free",
  monthlyPrice: 0,
  monthlyPriceSubtitle: "Free Forever",
  listTitle: "Get a BitGuardian vault",
  benefits: [
    "Unlimited Devices",
    "Passkey Management",
    "All the Core Functions",
    "Always Free",
  ],
  promoText: "Share vault items with another single user",
  buttonText: "Get Started Today",
};

describe("SubscriptionCard component", () => {
  it("renders the SubscriptionCard", () => {
    render(<SubscriptionCard card={mockCard} />);
    const titleElement = screen.getByText(
      /Share vault items with another single user/i
    );

    expect(titleElement).toBeInTheDocument();
  });
});
