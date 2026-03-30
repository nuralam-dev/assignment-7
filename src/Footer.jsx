import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white py-12 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center text-center">
        
        {/* Logo Section */}
        <div className="flex items-center mb-2">
          <span className="text-blue-800 font-bold text-3xl">Auction</span>
          <span className="text-yellow-400 font-bold text-3xl">Gallery</span>
        </div>

        {/* Tagline */}
        <p className="text-gray-600 font-medium mb-8">
          Bid. Win. Own.
        </p>

        {/* Navigation Links */}
        <div className="flex flex-wrap justify-center gap-8 mb-10">
          <a href="#" className="text-gray-800 hover:text-blue-800 font-medium transition-colors">Home</a>
          <a href="#" className="text-gray-800 hover:text-blue-800 font-medium transition-colors">Auctions</a>
          <a href="#" className="text-gray-800 hover:text-blue-800 font-medium transition-colors">Categories</a>
          <a href="#" className="text-gray-800 hover:text-blue-800 font-medium transition-colors">How it works</a>
        </div>

        {/* Divider Line (Optional but looks clean) */}
        <div className="w-full max-w-xs h-[1px] bg-gray-100 mb-6"></div>

        {/* Copyright Section */}
        <p className="text-gray-400 text-sm">
          © 2026 AuctionHub. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;