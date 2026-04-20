import Image from "next/image";

export default function Footer() {
  return (
    <footer className="col-span-12 md:col-start-2 md:col-end-12 mt-20 mb-10 relative z-20">
      <Image
        src="/assets/Footer.png"
        alt="Footer"
        width={1440}
        height={400}
        className="w-full h-auto block scale-115"
      />
    </footer>
  );
}