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

          {/* RAILS */}
          <section className="col-span-12 md:col-start-3 md:col-end-11 flex justify-center">
            <div className="w-full max-w-[400px]">
              <img
                src="/assets/Rails.png"
                alt="Rails"
                className="w-full h-auto block"
              />
            </div>
          </section>

          {/* FOOTER */}
          <footer className="col-span-12 md:col-start-2 md:col-end-12 mt-16">
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