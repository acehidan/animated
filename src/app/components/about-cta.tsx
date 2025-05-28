"use client";

export default function AboutCTA() {
  return (
    <section className="section min-h-screen flex items-center relative overflow-hidden bg-primary">
      <div className="container mx-auto flex items-center">
        <div className="mx-auto text-center inter">
          <h1
            className="hidden md:block text-4xl md:text-[48px] font-semibold "
            style={{
              lineHeight: "1.4",
            }}
          >
            You should spend more time connecting <br /> with customers, not
            chasing spreadsheets.
          </h1>
          <h1 className="md:hidden text-[24px] font-semibold">
            You should spend more <br /> time connecting with customers, not
            chasing spreadsheets.
          </h1>
        </div>
      </div>
    </section>
  );
}
