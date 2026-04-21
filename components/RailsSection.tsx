import Image from "next/image";

export default function RailsSection() {
  return (
    <section className="col-span-12 relative flex flex-col items-center w-full">
      {/* Background Accessories */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src="/assets/accesories.png"
          alt="Decoration Top"
          width={400}
          height={400}
          className="absolute top-[5%] -right-[15%] md:-right-[5%] w-64 md:w-130 h-auto translate-x-15 -translate-y-120 anim-acc-1"
        />
        <Image
          src="/assets/accesories2.png"
          alt="Decoration Middle"
          width={400}
          height={400}
          className="absolute top-[40%] -left-[15%] md:-left-[5%] w-64 md:w-130 h-auto -translate-x-15 -translate-y-120 anim-acc-2"
        />
        <Image
          src="/assets/accesories.png"
          alt="Decoration Bottom"
          width={400}
          height={400}
          className="absolute bottom-[5%] -right-[15%] md:-right-[5%] w-64 md:w-130 h-auto translate-x-15 -translate-y-80 anim-acc-3"
        />
        <Image
          src="/assets/accesories2.png"
          alt="Decoration Middle"
          width={400}
          height={400}
          className="absolute top-[80%] -left-[15%] md:-left-[5%] w-64 md:w-130 h-auto -translate-x-15 -translate-y-90 anim-acc-4"
        />
      </div>

      {/* Rails */}
      <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 z-0 pointer-events-none flex justify-center w-full min-w-75 h-425 pt-50 pb-10">
        <Image
          src="/assets/Rails_2.png"
          alt="Rails Pattern"
          width={300}
          height={1200}
          className="w-full h-auto object-contain opacity-90 scale-120"
        />
      </div>

      {/* Robots & Text Layout */}
      <div className="relative z-10 w-full flex flex-col gap-20 md:gap-10 max-w-250 mx-auto">
        {/* Item 1 - Left */}
        <div className="flex w-full justify-start md:justify-start md:pr-[100%] translate-y-30">
          <div className="flex flex-col items-start md:items-start min-w-55 md:ml-auto md:mr-16">
            <Image
              src="/assets/1.png"
              alt="Robot 1"
              width={500}
              height={700}
              className="w-full h-auto object-contain drop-shadow-2xl anim-bot-1"
            />
            <div className="mt-6 text-center md:text-left bg-[#F4ECDF]/70 p-4 rounded-xl backdrop-blur-sm shadow-sm md:bg-transparent md:p-0 md:backdrop-blur-none md:shadow-none">
              <h3 className="text-[#C13A28] font-bold text-2xl md:text-3xl italic tracking-wide">
                What & Who
              </h3>
              <p className="text-black text-xs md:text-sm mt-3 font-medium leading-relaxed text-justify">
           This product is designed for toy collectors, Japanese pop culture enthusiasts, and model kit hobbyists, ranging from teenagers to adults (15+). Gunpla is a robot model kit made from high-quality plastic, featuring a futuristic design in red, white, and black. It consists of assembleable parts with movable joints, making it ideal for both display and collection.
              </p>
            </div>
          </div>
        </div>

        {/* Item 2 - Right */}
        <div className="flex w-full justify-center md:justify-end md:pl-[70%] md:-mt-32 -translate-x-5">
          <div className="flex flex-col items-center md:items-start min-w-60 md:mr-auto md:ml-16">
            <Image
              src="/assets/2.png"
              alt="Robot 2"
              width={500}
              height={700}
              className="w-full h-auto object-contain drop-shadow-2xl anim-bot-2"
            />
            <div className="mt-6 text-center md:text-left bg-[#F4ECDF]/70 p-4 rounded-xl backdrop-blur-sm shadow-sm md:bg-transparent md:p-0 md:backdrop-blur-none md:shadow-none">
              <h3 className="text-[#C13A28] font-bold text-2xl md:text-3xl italic tracking-wide">
                Where & When
              </h3>
              <p className="text-black text-xs md:text-sm mt-3 font-medium leading-relaxed text-justify">
              Gunpla is typically used indoors, such as in bedrooms, study desks, or workspaces, as both a hobby and a decorative piece. It is usually assembled during free time, like afternoons, evenings, or weekends. Once completed, it can be displayed on shelves or desks and enjoyed anytime as part of a personal collection.
              </p>
            </div>
          </div>
        </div>

        {/* Item 3 - Left */}
        <div className="flex w-full justify-center md:justify-start md:pr-[100%] md:-mt-60 -translate-y-30">
          <div className="flex flex-col items-center md:items-start min-w-65 md:ml-auto md:mr-16">
            <Image
              src="/assets/3.png"
              alt="Robot 3"
              width={500}
              height={700}
              className="w-full h-auto object-contain drop-shadow-2xl anim-bot-3"
            />
            <div className="mt-6 text-center md:text-left bg-[#F4ECDF]/70 p-4 rounded-xl backdrop-blur-sm shadow-sm md:bg-transparent md:p-0 md:backdrop-blur-none md:shadow-none">
              <h3 className="text-[#C13A28] font-bold text-2xl md:text-3xl italic tracking-wide">
                Why & How
              </h3>
              <p className="text-black text-xs md:text-sm mt-3 font-medium leading-relaxed text-justify">
              Gunpla offers a fun and engaging building experience while helping develop precision, patience, and creativity. Its detailed design also makes it perfect for display or collection. The model is assembled by following the instructions without the need for glue. Once completed, it can be posed and displayed according to your preference.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
