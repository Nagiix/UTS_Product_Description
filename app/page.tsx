// app/page.tsx
// Ganti semua src="..." dengan path gambar kamu

import Image from "next/image";

export default function Home() {
  const zigzagItems = [
    {
      id: 1,
      side: "left", // mech di kiri, teks di kanan
      mechSrc: "/images/mech-1.png",
      mechAlt: "ADP Bot pose 1",
      title: "DESCRIPTION",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 2,
      side: "right", // mech di kanan, teks di kiri
      mechSrc: "/images/mech-2.png",
      mechAlt: "ADP Bot pose 2",
      title: "DESCRIPTION",
      body: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      id: 3,
      side: "left",
      mechSrc: "/images/mech-3.png",
      mechAlt: "ADP Bot pose 3",
      title: "DESCRIPTION",
      body: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
  ];

  return (
    <main className="adpbot-page">

      {/* ── HERO ─────────────────────────────────────────────
          Ganti src dengan gambar hero kamu.
          Rekomendasi ukuran: 430 × 600px atau sesuai desain.
      ──────────────────────────────────────────────────── */}
      <section className="hero">
        <Image
          src="/images/hero.png"
          alt="ADPBOT Hero"
          width={430}
          height={600}
          priority
          className="hero-img"
        />
      </section>

      {/* ── META STRIP ────────────────────────────────────── */}
      <section className="meta-strip">
        <div className="meta-row">
          <span className="meta-label">Serial Number</span>
          <span className="meta-value">2024010019 // 2424303505 // 24203263</span>
        </div>
        <div className="meta-row">
          <span className="meta-label">a PROJECT by</span>
          <span className="meta-value">Grimur / Yopu / Adprian</span>
        </div>
        <div className="meta-row">
          <span className="meta-label">of</span>
          <span className="meta-value meta-muted">Product Description</span>
        </div>
        <div className="meta-year">/ 2026</div>
      </section>

      {/* ── ZIGZAG SECTION ────────────────────────────────── */}
      <section className="zigzag-section">

        {/* Rail gambar — ganti src dengan asset rel/zigzag kamu.
            Ini background image yang jadi "tulang punggung" layout.
            Rekomendasi: PNG transparan, lebar 60px, tinggi menyesuaikan.        */}
        <div className="rail-bg">
          <Image
            src="/images/rail.png"
            alt=""
            aria-hidden="true"
            fill
            className="rail-img"
          />
        </div>

        {zigzagItems.map((item) => (
          <div
            key={item.id}
            className={`zig-item zig-item--${item.side}`}
          >
            {/* MECH IMAGE ── ganti src tiap item */}
            <div className="zig-mech">
              <Image
                src={item.mechSrc}
                alt={item.mechAlt}
                width={140}
                height={200}
                className="mech-img"
              />
            </div>

            {/* TEXT CONTENT */}
            <div className="zig-content">
              <h2 className="zig-title">{item.title}</h2>
              <p className="zig-body">{item.body}</p>
            </div>
          </div>
        ))}

      </section>

      {/* ── FOOTER ────────────────────────────────────────────
          Ganti src dengan gambar footer kamu.
          Rekomendasi ukuran: 430 × 200px.
      ──────────────────────────────────────────────────── */}
      <footer className="footer">
        <Image
          src="/images/footer.png"
          alt="Footer"
          width={430}
          height={200}
          className="footer-img"
        />
      </footer>

    </main>
  );
}
