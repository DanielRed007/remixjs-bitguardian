import { render, screen } from "@testing-library/react";
import SubscriptionCardRow from "../SubscriptionCardRow";

const mockPlan = [
  {
    planType: "free",
    monthlyPrice: 0,
    monthlyPriceSubtitle: "Free Forever",
    listTitle: "Basic business vault",
    benefits: [
      "Unlimited Devices",
      "Passkey Management",
      "Basic Vault Features",
      "Always Free",
    ],
    promoText: "Limited collaboration for one team member",
    buttonText: "Get Started",
  },
  {
    planType: "premium",
    monthlyPrice: 15,
    monthlyPriceSubtitle: "$15 per month",
    listTitle: "Business-level security",
    benefits: [
      "All Free Plan Benefits",
      "Advanced Vault Functions",
      "Priority Business Support",
      "Multi-User Collaboration",
      "Cross-Platform Sync",
    ],
    promoText: "Unlimited sharing and collaboration for teams",
    buttonText: "Upgrade to Premium",
  },
  {
    planType: "enterprise",
    monthlyPrice: 30,
    monthlyPriceSubtitle: "$30 per month",
    listTitle: "Enterprise-grade security",
    benefits: [
      "All Premium Plan Benefits",
      "Dedicated Account Manager",
      "Enhanced Team Management",
      "Unlimited Team Members",
      "Custom Integrations",
    ],
    promoText: "Custom solutions for large organizations",
    buttonText: "Contact Sales",
  },
];

describe("SubscriptionCardRow component", () => {
  it("renders the SubscriptionCardRow", () => {
    render(<SubscriptionCardRow subscriptionCardType={mockPlan} />);
    const titleElement = screen.getByText(
      /Custom solutions for large organizations/i
    );

    expect(titleElement).toBeInTheDocument();
  });
});
