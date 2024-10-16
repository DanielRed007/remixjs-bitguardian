import { ShieldCheckIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import { Link } from "@remix-run/react";

export default function Navbar() {
  return (
    <nav className='bg-gray-800 w-full fixed top-0 z-10'>
      <div className='max-w-7xl mx-auto px-2 sm:px-6 lg:px-8'>
        <div className='relative flex items-center justify-between h-16'>
          <div className='flex items-center flex-shrink-0'>
            <ShieldCheckIcon className='h-6 w-6 text-white' />
            <div className='ml-2 text-white font-bold'>BitGuardian</div>
          </div>

          <div className='hidden sm:block'>
            <div className='flex space-x-4'>
              <div className='text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'>
                About
              </div>
              <div className='text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'>
                Services
              </div>
              <div className='text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'>
                Contact
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
