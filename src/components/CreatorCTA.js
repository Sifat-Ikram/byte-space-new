import Placeholder from "./Placeholder";

export default function CreatorCTA() {
  return (
    <section className="relative overflow-hidden bg-[#1739e8] py-24 text-center text-white md:py-28">
      <Placeholder
        label="Vector"
        className="absolute -left-6 top-0 hidden h-36 w-40 rounded-2xl md:flex"
      />
      <Placeholder
        label="Vector"
        className="absolute bottom-0 left-24 hidden h-24 w-24 rounded-2xl md:flex"
      />
      <Placeholder
        label="Vector"
        className="absolute right-64 top-0 hidden h-28 w-28 rounded-2xl md:flex"
      />
      <Placeholder
        label="Vector"
        className="absolute -right-6 top-0 hidden h-40 w-36 rounded-2xl md:flex"
      />
      <Placeholder
        label="Vector"
        className="absolute bottom-0 right-32 hidden h-24 w-24 rounded-2xl md:flex"
      />

      <div className="relative z-10 mx-auto max-w-2xl px-5">
        <h2 className="text-3xl font-semibold leading-tight sm:text-4xl md:text-[44px]">
          Unlock Your Potential as a Creator with ByteSpace
        </h2>
        <p className="mt-6 text-sm leading-relaxed text-white/85 sm:text-base">
          Experience the collaboration of numerous creators and an expanding
          selection of courses. Register now and become a part of a community
          comprising over 10,000 local and international creators. Utilize our
          Course Editor, and showcase your expertise by publishing your finest
          course on the ByteSpace Course Library.
        </p>
        <button className="mt-8 rounded-full bg-[#c8f31d] px-8 py-3 text-sm font-semibold text-[#0b0b2b] transition hover:brightness-95">
          Join as Creator
        </button>
      </div>
    </section>
  );
}
