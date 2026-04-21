import Anchor from "../components/UI/Anchor";
import Button from "../components/UI/Button";
import { ProductInfo } from "../MockData/Data";
function Vans() {
  return (
    <>
      <main className="font-text-font">
        <section className="mx-12">
          <h2 className="font-bold text-4xl">Explore our van options</h2>

          <div>
            <Button>simple</Button>
            <Button>luxury</Button>
            <Button>rugged</Button>
            <Button>clear filters</Button>
          </div>
        </section>

        <section className="flex flex-wrap gap-3  md:grid md:grid-cols-3 md:justify-items-center my-8 mx-12">
          {ProductInfo.map((product) => {
            const { id, img, Pname, price, category } = product;
            return (
              <div key={id} className="card">
                <Anchor to={`${id}`} state={product}>
                  <img
                    src={img}
                    alt={`${img}-${id}`}
                    loading="lazy"
                    className="min-w-2/3 object-cove rounded-lg"
                  />
                  <section className="flex justify-between my-2">
                    <p className="font-bold text-4xl">{Pname}</p>
                    <p className="text-xl">{price}</p>
                  </section>
                </Anchor>
                <Button>{category}</Button>
              </div>
            );
          })}
        </section>
      </main>
    </>
  );
}

export default Vans;
