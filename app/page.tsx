export default function Home() {
  return (
    <main className="min-h-screen bg-[#F4ECDF] overflow-x-hidden">

      {/* CONTAINER */}
      <div className="mx-auto w-full max-w-[1440px] px-4">

        {/* GRID */}
        <div className="grid grid-cols-12 gap-4">

          {/* HERO */}
          <section className="col-span-12 md:col-start-2 md:col-end-12 py-10 md:py-20">

            <div className="w-full">
              <img
                src="/assets/HERO.png"
                alt="Hero"
                className="w-full h-auto block"
              />
            </div>

          </section>

          {/* INFO SECTION */}
          <section className="col-span-12 md:col-start-2 px-25 md:col-end-12 relative pb-10 md:pb-20">

            <div className="flex flex-col md:flex-row justify-between w-full relative z-10">
              <div className="flex flex-col gap-6 md:gap-8">
                <div>
                  <h2 className="text-[#C13A28] font-bold text-3xl md:text-4xl mb-2 tracking-wide">Serial Number</h2>
                  <p className="text-black text-lg md:text-xl font-medium">2401010179 // 2401010105 // 2401010168</p>
                </div>
                <div className="grid grid-cols-[auto_1fr] gap-x-4 md:gap-x-8 gap-y-2 text-xl md:text-2xl text-black items-center">
                  <div className="flex justify-between w-40 md:w-48">
                    <span>a <span className="text-[#C13A28] font-bold">PROJECT</span> by</span>
                    <span>:</span>
                  </div>
                  <div className="italic">Dimas // Yoga // Adprian</div>

                  <div className="flex justify-between w-40 md:w-48">
                    <span>of</span>
                    <span>:</span>
                  </div>
                  <div className="italic">Product Description</div>
                </div>
              </div>
              <div className="flex flex-col items-end pt-6 md:pt-0 pr-0 md:pr-4">
                <div className="flex gap-2 md:gap-3 mb-1">
                  <div className="w-10 h-3 md:w-14 md:h-4 bg-black"></div>
                  <div className="w-10 h-3 md:w-14 md:h-4 bg-[#C13A28]"></div>
                  <div className="w-10 h-3 md:w-14 md:h-4 bg-white"></div>
                </div>
                <h3 className="text-4xl md:text-5xl italic text-black font-medium tracking-wide">/2026</h3>
              </div>
            </div>
          </section>

          {/* RAILS & ROBOTS SECTION */}
          <section className="col-span-12 relative flex flex-col items-center py-10 md:py-20 w-full mt-10">
            
            {/* Background Accessories  */}
            <div className="absolute inset-0  pointer-events-none z-0">
              <img src="/assets/accesories.png" alt="Decoration Top" className="absolute top-[5%] -right-[15%] md:-right-[5%] w-64 md:w-[400px] opacity-80 translate-x-15" />
              <img src="/assets/accesories2.png" alt="Decoration Middle" className="absolute top-[40%] -left-[15%] md:-left-[5%] w-64 md:w-[400px] opacity-80 -translate-x-15" />
              <img src="/assets/accesories.png" alt="Decoration Bottom" className="absolute bottom-[5%] -right-[15%] md:-right-[5%] w-64 md:w-[400px] opacity-80 translate-x-15" />
            </div>

            {/* Rails */}
            <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 z-0 pointer-events-none flex justify-center w-full max-w-[300px]">
              <img
                src="/assets/Rails.png"
                alt="Rails Pattern"
                className="h-full w-full object-cover md:object-contain opacity-90"
              />
            </div>

            {/* Robots & Text Layout */}
            <div className="relative z-10 w-full flex flex-col gap-20 md:gap-10 max-w-[1000px] mx-auto">
              
              {/* Item 1 - Left */}
              <div className="flex w-full justify-start md:justify-start md:pr-[100%] translate-y-30">
                <div className="flex flex-col items-start md:items-start min-w-[220px] md:ml-auto md:mr-16">
                  <img src="/assets/1.png" alt="Robot 1" className="w-full h-auto object-contain drop-shadow-2xl" />
                  <div className="mt-6 text-center md:text-left bg-[#F4ECDF]/70 p-4 rounded-xl backdrop-blur-sm shadow-sm md:bg-transparent md:p-0 md:backdrop-blur-none md:shadow-none">
                    <h3 className="text-[#C13A28] font-bold text-2xl md:text-3xl italic tracking-wide">DESCRIPTION asdsad</h3>
                    <p className="text-black text-xs md:text-sm mt-3 font-medium leading-relaxed">
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                    </p>
                  </div>
                </div>
              </div>

              {/* Item 2 - Right */}
              <div className="flex w-full justify-center md:justify-end md:pl-[100%] md:-mt-32">
                <div className="flex flex-col items-center md:items-start min-w-[240px] md:mr-auto md:ml-16">
                  <img src="/assets/2.png" alt="Robot 2" className="w-full h-auto object-contain drop-shadow-2xl" />
                  <div className="mt-6 text-center md:text-left bg-[#F4ECDF]/70 p-4 rounded-xl backdrop-blur-sm shadow-sm md:bg-transparent md:p-0 md:backdrop-blur-none md:shadow-none">
                    <h3 className="text-[#C13A28] font-bold text-2xl md:text-3xl italic tracking-wide">DESCRIPTION</h3>
                    <p className="text-black text-xs md:text-sm mt-3 font-medium leading-relaxed">
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                    </p>
                  </div>
                </div>
              </div>

              {/* Item 3 - Left */}
              <div className="flex w-full justify-center md:justify-start md:pr-[100%] md:-mt-32 -translate-y-30">
                <div className="flex flex-col items-center md:items-start min-w-[260px] md:ml-auto md:mr-16">
                  <img src="/assets/3.png" alt="Robot 3" className="w-full h-auto object-contain drop-shadow-2xl" />
                  <div className="mt-6 text-center md:text-left bg-[#F4ECDF]/70 p-4 rounded-xl backdrop-blur-sm shadow-sm md:bg-transparent md:p-0 md:backdrop-blur-none md:shadow-none">
                    <h3 className="text-[#C13A28] font-bold text-2xl md:text-3xl italic tracking-wide">DESCRIPTION</h3>
                    <p className="text-black text-xs md:text-sm mt-3 font-medium leading-relaxed">
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </section>

          {/* FOOTER */}
          <footer className="col-span-12 md:col-start-2 md:col-end-12 mt-20 mb-10 relative z-20">
            <img
              src="/assets/Footer.png"
              alt="Footer"
              className="w-full h-auto block"
            />
          </footer>

        </div>
      </div>

    </main>
  );
}