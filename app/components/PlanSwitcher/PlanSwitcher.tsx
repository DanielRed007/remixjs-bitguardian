import TabSwitcher from "../TabSwitcher/TabSwitcher";

export default function PlanSwitcher() {
  return (
    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
      <div className='flex justify-center items-top bg-gray-800 rounded-lg'>
        <div className='rounded-lg shadow-lg py-6 w-full h-[800px]'>
          <div className='text-center text-gray-400'>
            <p className='text-2xl'>
              Choose a susbcription plan that fits your needs
            </p>
          </div>
          <div className='text-center text-gray-700 py-5 mb-7'>
            <TabSwitcher />
          </div>
          <div className='text-center text-gray-400'>
            <p>Pricing shown in USD and based on an annual subscription</p>
          </div>
        </div>
      </div>
    </div>
  );
}
