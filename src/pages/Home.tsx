import hero from "../assets/hero.png";
import Button from "../components/UI/Button";
function Home() {
  return (
    <>
      <main className="relative">
        <div className="relative">
          <img
            src={hero}
            className="w-full object-cover"
            alt="image showing mountains of a place you can visit"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        <div className="absolute inset-y-5 md:inset-y-36 inset-x-32 flex flex-col items-center gap-10 text-white">
          <h2 className="text-3xl max-inline-120 font-black font-text-font leading-12">You got the travel plans, we got the travel vans.</h2>
          <p className="max-inline-160 text-lg font-text-font">
            Add adventure to your life by joining the #vanlife movement. Rent
            the perfect van to make your perfect road trip.
          </p>
          <Button>Find you van</Button>
        </div>
      </main>
    </>
  );
}

export default Home;
