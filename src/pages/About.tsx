import aboutIMage from "../assets/hello.png";
import Button from "../components/UI/Button";

function About() {
  return (
    <>
      <img
        loading="lazy"
        src={aboutIMage}
        alt="a guy sitting on the top of the van chilling looking in the air"
      />
      <section className="text">
        <h2>Don’t squeeze in a sedan when you could relax in a van.</h2>
        <p className="text-o">
          Our mission is to enliven your road trip with the perfect travel van
          rental. Our vans are recertified before each trip to ensure your
          travel plans can go off without a hitch. (Hitch costs extra 😉)
        </p>

        <p className="text-two">
          Our team is full of vanlife enthusiasts who know firsthand the magic
          of touring the world on 4 wheels.
        </p>
      </section>

      <section className="final-section">
        <h3>Your destination is waiting. Your van is ready.</h3>
        <Button>Explore our vans</Button>
      </section>
    </>
  );
}

export default About;
