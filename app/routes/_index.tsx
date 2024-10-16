import type { MetaFunction } from "@remix-run/node";
import Navbar from "~/components/Navbar/Navbar";
import PlanSwitcher from "~/components/PlanSwitcher/PlanSwitcher";

export const meta: MetaFunction = () => {
  return [
    { title: "BitGuardian" },
    { name: "RemixJS Clone", content: "BitGuardian" },
  ];
};

export default function Index() {
  return (
    <div className='flex flex-col min-h-screen'>
      <Navbar />

      <div className='flex-grow pt-16'>
        <div className='flex h-full items-center justify-center py-5'>
          <h1 className='text-4xl font-bold text-center'>
            BitGuardian Subscription Plans
          </h1>
        </div>

        <PlanSwitcher />
      </div>
    </div>
  );
}
