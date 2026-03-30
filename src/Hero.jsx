const Hero = () => {
  return (
    <section className="relative h-[500px] w-[98%] mx-auto overflow-hidden bg-black">
      <img
        src="../src/assets/Banner-min.jpg"
        alt="Car Headlights"
        className="absolute inset-0 h-full w-full object-cover opacity-60"
      />

      <div className="relative z-10 flex h-full flex-col justify-center px-6 md:px-12 lg:px-24">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold  text-white md:text-5xl lg:text-6xl">
            Bid on Unique Items from <br /> Around the World
          </h1>

          <p className="mt-4 text-lg text-gray-200 md:text-xl">
            Discover rare collectibles, luxury goods, and vintage{" "}
            <br className="hidden md:block" />
            treasures in our curated auctions.
          </p>

          <button className="mt-8 rounded-full bg-white px-8 py-3 font-semibold text-black transition-all hover:bg-gray-200">
            Explore Auctions
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
