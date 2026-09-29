import Placeholder from "./Placeholder";

export default function CreatorCTA() {
  return (
    <section className="relative overflow-hidden bg-[#1739e8] py-20 text-center text-white">
      <Placeholder
        label="Vector"
        className="absolute -left-4 top-0 hidden h-24 w-28 rounded-xl md:flex"
      />
      <Placeholder
        label="Vector"
        className="absolute bottom-0 left-16 hidden h-16 w-16 rounded-xl md:flex"
      />
      <Placeholder
        label="Vector"
        className="absolute right-40 top-0 hidden h-20 w-20 rounded-xl md:flex"
      />
      <Placeholder
        label="Vector"
        className="absolute -right-4 top-0 hidden h-28 w-24 rounded-xl md:flex"
      />
      <Placeholder
        label="Vector"
        className="absolute bottom-0 right-24 hidden h-16 w-16 rounded-xl md:flex"
      />

      <div className="relative z-10 mx-auto max-w-xl px-6">
        <h2 className="text-3xl font-semibold leading-snug">
          Unlock Your Potential as a <br /> Creator with ByteSpace
        </h2>
        <p className="mt-4 text-[10px] leading-relaxed text-white/80">
          Experience the collaboration of numerous creators and an expanding
          selection of courses. Register now and become a part of a community
          comprising over 10,000 local and international creators. Utilize our
          Course Editor, and showcase your expertise by publishing your finest
          course on the ByteSpace Course Library.
        </p>
        <button className="mt-6 rounded-full bg-[#c8f31d] px-5 py-2 text-xs font-medium text-[#0b0b2b] transition hover:brightness-95">
          Join as Creator
        </button>
      </div>
    </section>
  );
}
