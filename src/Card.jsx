import React from 'react';

const Card = ({ auctionItems }) => {
 

  return (
    <div className="bg-[#f3f7fa] p-4 md:p-10 min-h-screen font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* Title Section */}
        <div className="mb-10">
          <h2 className="text-3xl font-bold text-[#1a365d]">Active Auctions</h2>
          <p className="text-gray-500 mt-1">Discover and bid on extraordinary items</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Left Side: Auction Table Container */}
          <div className="flex-1 bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b-4 border-[#3b82f6]">
                    <th className="py-5 px-8 text-gray-600 font-semibold text-lg">Items</th>
                    <th className="py-5 px-8 text-gray-600 font-semibold text-lg">Current Bid</th>
                    <th className="py-5 px-8 text-gray-600 font-semibold text-lg">Time Left</th>
                    <th className="py-5 px-8 text-gray-600 font-semibold text-lg text-right">Bid Now</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {auctionItems && auctionItems.map((item) => (
                    <tr key={item.id} className="hover:bg-gray-50/50 transition-colors">
                      {/* Item Image & Name */}
                      <td className="py-5 px-8">
                        <div className="flex items-center gap-5">
                          <div className="w-20 h-20 flex-shrink-0 bg-gray-100 rounded-xl overflow-hidden border border-gray-100">
                            <img 
                              src={item.item_image} 
                              alt={item.item_name} 
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <span className="font-semibold text-[#2d3748] text-base leading-tight max-w-[240px]">
                            {item.item_name}
                          </span>
                        </div>
                      </td>

                      {/* Current Bid */}
                      <td className="py-5 px-8 font-bold text-[#4a5568] text-lg">
                        {item.current_bid}
                      </td>

                      {/* Time Left */}
                      <td className="py-5 px-8 font-bold text-[#2b6cb0] text-lg">
                        {item.time_left}
                      </td>

                      {/* Bid Now Button */}
                      <td className="py-5 px-8 text-right">
                        <button className="hover:scale-105 active:scale-95 transition-transform duration-200">
                          <img 
                            src={item.bid_button_img} 
                            alt="Bid Now" 
                            className="h-11 w-auto object-contain cursor-pointer"
                          />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Right Side: Favorite Sidebar */}
          <div className="w-full lg:w-[350px]">
            <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 flex flex-col items-center">
              
              {/* Sidebar Header */}
              <div className="flex items-center justify-center gap-3 mb-10 w-full border-b border-gray-50 pb-6">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#1a365d" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                </svg>
                <h3 className="text-2xl font-extrabold text-[#1a365d]">Favorite Items</h3>
              </div>

              {/* Empty State Content */}
              <div className="text-center py-12 px-4">
                <h4 className="text-xl font-bold text-[#2d3748]">No favorites yet</h4>
                <p className="text-gray-400 mt-3 text-sm leading-relaxed">
                  Click the heart icon on any item to add it to your favorites
                </p>
              </div>

              {/* Total Placeholder */}
              <div className="w-full mt-10 pt-6 border-t border-gray-50 flex justify-end">
                <span className="text-3xl font-black text-black tracking-widest">$0000</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Card;