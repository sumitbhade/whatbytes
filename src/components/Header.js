export default function Header() {
  return (
    <header className="bg-white border-b">
      <div className="flex justify-between items-center px-6 py-3">
        <div className="flex items-center">
          {/* Three bars logo */}
          <div className="text-2xl font-bold flex items-center">
            <span className="flex flex-col gap-1 mr-2">
              <span className="bg-black h-0.5 w-5"></span>
              <span className="bg-black h-0.5 w-5"></span>
              <span className="bg-black h-0.5 w-5"></span>
            </span>
            WhatBytes
          </div>
        </div>

        {/* User Profile - Updated */}
        <div className="flex items-center gap-3">
          <img
            src="https://ui-avatars.com/api/?name=Sumit+Bhade&background=0D8ABC&color=fff"
            alt="Rahil Siddique"
            className="w-10 h-10 rounded-full"
          />
          <span className="text-sm font-medium text-gray-700">Sumit Bhade</span>
        </div>
      </div>
    </header>
  );
}
