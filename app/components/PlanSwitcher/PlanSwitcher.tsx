import TabSwitcher from "../TabSwitcher/TabSwitcher";

export default function PlanSwitcher() {
  return (
    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
      <div className='flex justify-center items-top min-h-screen'>
        <div className='rounded-lg shadow-lg p-6 w-full max-w-3xl h-[400px]'>
          <div className='text-center text-gray-700'>
            <p>This is a container with a fair amount of height.</p>
          </div>
          <div className='text-center text-gray-700 py-5 mb-7'>
            <TabSwitcher />
          </div>
          <div className='text-center text-gray-700'>
            <p>Pricing shown in USD and based on an annual subscription</p>
          </div>
        </div>
      </div>
    </div>
  );
}
