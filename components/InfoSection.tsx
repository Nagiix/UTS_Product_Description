export default function InfoSection() {
  return (
    <section className="col-span-12 md:col-start-2 px-25 md:col-end-12 relative pb-10">
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
  );
}