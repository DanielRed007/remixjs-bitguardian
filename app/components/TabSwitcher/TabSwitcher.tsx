import { TabGroup, TabList, Tab, TabPanels, TabPanel } from "@headlessui/react";
import SubscriptionCardRow from "../SubscriptionCardRow/SubscriptionCardRow";

export default function TabSwitcher() {
  const subscriptionCardData = {
    personal: [
      {
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
      },
      {
        planType: "premium",
        monthlyPrice: 5,
        monthlyPriceSubtitle: "$5 per month",
        listTitle: "Enhanced security",
        benefits: [
          "All Free Plan Benefits",
          "Priority Support",
          "Advanced Encryption",
          "Unlimited Sharing",
          "Cross-Platform Sync",
        ],
        promoText: "Share vault items with unlimited users",
        buttonText: "Upgrade to Premium",
      },
      {
        planType: "families",
        monthlyPrice: 10,
        monthlyPriceSubtitle: "$10 per month",
        listTitle: "Secure your whole family",
        benefits: [
          "All Premium Plan Benefits",
          "Up to 5 Family Members",
          "Family Sharing",
          "Individual Vaults for Each Member",
          "Family Management Dashboard",
        ],
        promoText: "Protect and manage your entire family's vaults",
        buttonText: "Get Families Plan",
      },
    ],
    business: [
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
    ],
  };

  return (
    <TabGroup className='w-full h-full'>
      <TabList className='flex justify-center gap-x-4'>
        <Tab className='rounded-full py-3 px-6 text-lg font-semibold text-white focus:outline-none data-[selected]:bg-white/10 data-[hover]:bg-white/5 data-[selected]:data-[hover]:bg-white/10 data-[focus]:outline-1 data-[focus]:outline-white'>
          Personal
        </Tab>
        <Tab className='rounded-full py-3 px-6 text-lg font-semibold text-white focus:outline-none data-[selected]:bg-white/10 data-[hover]:bg-white/5 data-[selected]:data-[hover]:bg-white/10 data-[focus]:outline-1 data-[focus]:outline-white'>
          Business
        </Tab>
      </TabList>

      <TabPanels className='mt-4'>
        <TabPanel className='w-full px-5'>
          <SubscriptionCardRow
            subscriptionCardType={subscriptionCardData.personal}
          />
        </TabPanel>
        <TabPanel className='w-full px-5'>
          <SubscriptionCardRow
            subscriptionCardType={subscriptionCardData.business}
          />
        </TabPanel>
      </TabPanels>
    </TabGroup>
  );
}
