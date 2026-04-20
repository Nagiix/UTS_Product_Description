import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F4ECDF] overflow-x-hidden">

      {/* CONTAINER */}
      <div className="mx-auto w-full max-w-360 px-4">

        {/* GRID */}
        <div className="grid grid-cols-12 gap-4">

          {/* HERO */}
          <section className="col-span-12 md:col-start-2 md:col-end-12 my-10 md:py-0">
            
            {/* Custom Animation Keyframes */}
            <style>{`
              /* Animasi Hero Robot */
              @keyframes slideUpRobot {
                0% { transform: translate(0%, 200%); opacity: 0; }
                100% { transform: translate(0%, 0); opacity: 1; }
              }
              .animate-robot {
                animation: slideUpRobot 2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
              }
              
              .robot {
                scale: 1;
                transition: all 0.5s ease-in;
              }

              .robot:hover {
                scale: 1.2;
              }

              /* --- ANIMASI BARU (SECTION RAILS) --- */
              
              /* Animasi Muncul Robot 1-3 */
              @keyframes fadeInUp {
                0% { opacity: 0; transform: translateY(40px); }
                100% { opacity: 1; transform: translateY(0); }
              }
              
              /* Animasi Idling Robot 1-3 (Melayang) */
              @keyframes idleFloat {
                0%, 100% { transform: translateY(0); }
                50% { transform: translateY(-15px); }
              }

              /* Animasi Muncul Accessories */
              @keyframes fadeInAcc {
                0% { opacity: 0; }
                100% { opacity: 0.8; } /* Berhenti di 0.8 karena sebelumnya pakai opacity-80 */
              }

              /* Class Implementasi Accessories (Muncul berurutan) */
              .anim-acc-1 { opacity: 0; animation: fadeInAcc 1.5s ease-out 0.5s forwards; }
              .anim-acc-2 { opacity: 0; animation: fadeInAcc 1.5s ease-out 0.8s forwards; }
              .anim-acc-3 { opacity: 0; animation: fadeInAcc 1.5s ease-out 1.1s forwards; }

              /* Class Implementasi Robot (Muncul berurutan + langsung lanjut Idling) */
              .anim-bot-1 { 
                opacity: 0; 
                animation: fadeInUp 1s ease-out 1.2s forwards, idleFloat 3s ease-in-out 2.2s infinite; 
              }
              .anim-bot-2 { 
                opacity: 0; 
                animation: fadeInUp 1s ease-out 1.5s forwards, idleFloat 3.2s ease-in-out 2.5s infinite; 
              }
              .anim-bot-3 { 
                opacity: 0; 
                animation: fadeInUp 1s ease-out 1.8s forwards, idleFloat 2.8s ease-in-out 2.8s infinite; 
              }
            `}</style>

            {/* relative dan overflow-hidden di sini penting agar robot terpotong saat di bawah */}
            <div className="w-full overflow-hidden relative rounded-xl">
              
              {/* Background Hero */}
              <Image
                src="/assets/HERO_without_obj.png"
                alt="Hero Background"
                width={1440}
                height={800}
                className="w-full h-auto block relative z-0"
                priority
              />

              {/* Robot Image - Muncul dari Bawah */}
              <div className="absolute bottom-0 right-0 z-10 w-full animate-robot robot">
                <Image
                  src="/assets/robot_hero.png" 
                  alt="Hero Robot"
                  width={1200}
                  height={800}
                  className="w-full h-auto object-contain object-bottom drop-shadow-2xl"
                  priority
                />
              </div>

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
            
            {/* Background Accessories (opacity-80 dihapus, diganti anim-acc) */}
            <div className="absolute inset-0 pointer-events-none z-0">
              <Image 
                src="/assets/accesories.png" 
                alt="Decoration Top" 
                width={400} 
                height={400} 
                className="absolute top-[5%] -right-[15%] md:-right-[5%] w-64 md:w-100 h-auto translate-x-15 anim-acc-1" 
              />
              <Image 
                src="/assets/accesories2.png" 
                alt="Decoration Middle" 
                width={400} 
                height={400} 
                className="absolute top-[40%] -left-[15%] md:-left-[5%] w-64 md:w-100 h-auto -translate-x-15 anim-acc-2" 
              />
              <Image 
                src="/assets/accesories.png" 
                alt="Decoration Bottom" 
                width={400} 
                height={400} 
                className="absolute bottom-[5%] -right-[15%] md:-right-[5%] w-64 md:w-100 h-auto translate-x-15 anim-acc-3" 
              />
            </div>

            {/* Rails */}
            <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 z-0 pointer-events-none flex justify-center w-full max-w-75">
              <Image
                src="/assets/Rails.png"
                alt="Rails Pattern"
                width={300}
                height={1200}
                className="w-full h-auto object-contain opacity-90"
              />
            </div>

            {/* Robots & Text Layout */}
            <div className="relative z-10 w-full flex flex-col gap-20 md:gap-10 max-w-250 mx-auto">
              
              {/* Item 1 - Left */}
              <div className="flex w-full justify-start md:justify-start md:pr-[100%] translate-y-30">
                <div className="flex flex-col items-start md:items-start min-w-55 md:ml-auto md:mr-16">
                  {/* Class anim-bot-1 ditambahkan di sini */}
                  <Image src="/assets/1.png" alt="Robot 1" width={500} height={700} className="w-full h-auto object-contain drop-shadow-2xl anim-bot-1" />
                  <div className="mt-6 text-center md:text-left bg-[#F4ECDF]/70 p-4 rounded-xl backdrop-blur-sm shadow-sm md:bg-transparent md:p-0 md:backdrop-blur-none md:shadow-none">
                    <h3 className="text-[#C13A28] font-bold text-2xl md:text-3xl italic tracking-wide">DESCRIPTION asdsad</h3>
                    <p className="text-black text-xs md:text-sm mt-3 font-medium leading-relaxed">
                      &quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.&quot;
                    </p>
                  </div>
                </div>
              </div>

              {/* Item 2 - Right */}
              <div className="flex w-full justify-center md:justify-end md:pl-[100%] md:-mt-32">
                <div className="flex flex-col items-center md:items-start min-w-60 md:mr-auto md:ml-16">
                  {/* Class anim-bot-2 ditambahkan di sini */}
                  <Image src="/assets/2.png" alt="Robot 2" width={500} height={700} className="w-full h-auto object-contain drop-shadow-2xl anim-bot-2" />
                  <div className="mt-6 text-center md:text-left bg-[#F4ECDF]/70 p-4 rounded-xl backdrop-blur-sm shadow-sm md:bg-transparent md:p-0 md:backdrop-blur-none md:shadow-none">
                    <h3 className="text-[#C13A28] font-bold text-2xl md:text-3xl italic tracking-wide">DESCRIPTION</h3>
                    <p className="text-black text-xs md:text-sm mt-3 font-medium leading-relaxed">
                      &quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.&quot;
                    </p>
                  </div>
                </div>
              </div>

              {/* Item 3 - Left */}
              <div className="flex w-full justify-center md:justify-start md:pr-[100%] md:-mt-32 -translate-y-30">
                <div className="flex flex-col items-center md:items-start min-w-65 md:ml-auto md:mr-16">
                  {/* Class anim-bot-3 ditambahkan di sini */}
                  <Image src="/assets/3.png" alt="Robot 3" width={500} height={700} className="w-full h-auto object-contain drop-shadow-2xl anim-bot-3" />
                  <div className="mt-6 text-center md:text-left bg-[#F4ECDF]/70 p-4 rounded-xl backdrop-blur-sm shadow-sm md:bg-transparent md:p-0 md:backdrop-blur-none md:shadow-none">
                    <h3 className="text-[#C13A28] font-bold text-2xl md:text-3xl italic tracking-wide">DESCRIPTION</h3>
                    <p className="text-black text-xs md:text-sm mt-3 font-medium leading-relaxed">
                      &quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.&quot;
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </section>

          {/* FOOTER */}
          <footer className="col-span-12 md:col-start-2 md:col-end-12 mt-20 mb-10 relative z-20">
            <Image
              src="/assets/Footer.png"
              alt="Footer"
              width={1440}
              height={400}
              className="w-full h-auto block"
            />
          </footer>

        </div>
      </div>

    </main>
  );
}