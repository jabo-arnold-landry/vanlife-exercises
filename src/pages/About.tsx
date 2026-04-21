import aboutIMage from "../assets/hello.png";
import Button from "../components/UI/Button";

function About() {
  return (
    <>
      <img
        loading="lazy"
        src={aboutIMage}
        className="h-72 w-full object-cover"
        alt="a guy sitting on the top of the van chilling looking in the air"
      />
      <div className="mt-10 mx-8">
        <section className="grid gap-10">
          <h2 className="font-black text-5xl max-inline-180">
            Don’t squeeze in a sedan when you could relax in a van.
          </h2>
          <p className="max-inline-[47ch] font-extralight text-lg font-text-font">
            Our mission is to enliven your road trip with the perfect travel van
            rental. Our vans are recertified before each trip to ensure your
            travel plans can go off without a hitch. (Hitch costs extra 😉)
          </p>

          <p className="max-inline-[50ch] font-extralight text-lg font-text-font">
            Our team is full of vanlife enthusiasts who know firsthand the magic
            of touring the world on 4 wheels.
          </p>
        </section>

        <section className="bg-orange-300 w-fit px-10 py-8 my-6 flex flex-col items-start gap-4 rounded-md">
          <h3 className="max-inline-96 text-3xl font-bold">
            Your destination is waiting. Your van is ready.
          </h3>
          <Button color="bgBlack" sizes="md">Explore our vans</Button>
        </section>
      </div>
    </>
  );
}

export default About;
