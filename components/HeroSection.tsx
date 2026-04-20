import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="col-span-12 md:col-start-2 md:col-end-12 my-10 md:py-0">
      <div className="w-full overflow-hidden relative rounded-xl">
        <Image
          src="/assets/HERO_without_obj.png"
          alt="Hero Background"
          width={1440}
          height={800}
          className="w-full h-auto block relative z-0"
          priority
        />
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
  );
}