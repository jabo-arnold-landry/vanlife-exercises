import hero from "../assets/hero.png";
import Button from "../components/UI/Button";
function Home() {
  return (
    <>
      <img src={hero} alt="image showing mountains of a place you can visit" />
      <main className="hero-text">
        <h2>You got the travel plans, we got the travel vans.</h2>
        <p>
          Add adventure to your life by joining the #vanlife movement. Rent the
          perfect van to make your perfect road trip.
        </p>
        <Button>Find you van</Button>
      </main>
    </>
  );
}

export default Home;
