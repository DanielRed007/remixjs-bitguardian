import { TabGroup, TabList, Tab, TabPanels, TabPanel } from "@headlessui/react";

export default function TabSwitcher() {
  return (
    <TabGroup className='w-full'>
      {/* Tab List */}
      <TabList className='flex justify-center gap-x-4'>
        <Tab className='rounded-full py-3 px-6 text-lg font-semibold text-white focus:outline-none data-[selected]:bg-white/10 data-[hover]:bg-white/5 data-[selected]:data-[hover]:bg-white/10 data-[focus]:outline-1 data-[focus]:outline-white'>
          Tab 1
        </Tab>
        <Tab className='rounded-full py-3 px-6 text-lg font-semibold text-white focus:outline-none data-[selected]:bg-white/10 data-[hover]:bg-white/5 data-[selected]:data-[hover]:bg-white/10 data-[focus]:outline-1 data-[focus]:outline-white'>
          Tab 2
        </Tab>
      </TabList>

      {/* Tab Panels */}
      <TabPanels className='mt-4'>
        <TabPanel className='w-full'>
          <div className='p-4 bg-gray-100 rounded-lg'>Content 1</div>
        </TabPanel>
        <TabPanel className='w-full'>
          <div className='p-4 bg-gray-100 rounded-lg'>Content 2</div>
        </TabPanel>
      </TabPanels>
    </TabGroup>
  );
}
