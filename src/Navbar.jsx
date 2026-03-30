const Navbar = () => {
  return (
    <nav className="bg-white border-b border-gray-100 px-6 py-4 flex items-center justify-between">
      {/* Logo Section */}
      <div className="flex items-center">
        <span className="text-blue-800 font-bold text-2xl">Auction</span>
        <span className="text-yellow-400 font-bold text-2xl">Gallery</span>
      </div>

      {/* Navigation Links */}
      <div className="hidden md:flex space-x-10">
        <a href="#" className="text-gray-800 hover:text-blue-800 font-medium">Home</a>
        <a href="#" className="text-gray-800 hover:text-blue-800 font-medium">Auctions</a>
        <a href="#" className="text-gray-800 hover:text-blue-800 font-medium">Categories</a>
        <a href="#" className="text-gray-800 hover:text-blue-800 font-medium">How it works</a>
      </div>

      {/* Action Icons */}
      <div className="flex items-center space-x-5">
        <div className="relative cursor-pointer">
          <div className="p-2 bg-blue-50 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
          </div>
          <span className="absolute top-0 right-0 inline-flex items-center justify-center px-1.5 py-0.5 text-xs font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-blue-900 border-2 border-white rounded-full">
            9
          </span>
        </div>

        <div className="w-10 h-10 rounded-full overflow-hidden border border-gray-200 cursor-pointer">
          <img 
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=100" 
            alt="Profile" 
            className="w-full h-full object-cover" 
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;