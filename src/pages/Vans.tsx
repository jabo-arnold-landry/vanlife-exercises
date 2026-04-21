import { Link } from "react-router-dom";
import Button from "../components/UI/Button";
import { ProductInfo } from "../MockData/Data";
function Vans() {
  return (
    <>
      <main className="font-text-font">
        <section className="mx-12">
          <h2 className="font-bold text-4xl">Explore our van options</h2>

          <div className="flex gap-2 mt-5">
            <Button color="filtersButton" sizes="md">simple</Button>
            <Button color="filtersButton" sizes="md">luxury</Button>
            <Button color="filtersButton" sizes="md">rugged</Button>
            <Button color="clearFilter">clear filters</Button>
          </div>
        </section>

        <section className="flex flex-wrap gap-3  md:grid md:grid-cols-3 md:justify-items-center my-8 mx-12">
          {ProductInfo.map((product) => {
            const { id, img, Pname, price, category } = product;
            return (
              <div key={id} className="card">
                <Link to={`${id}`} state={product}>
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
                </Link>
                <Button sizes="sm" color={category as string}>{category}</Button>
              </div>
            );
          })}
        </section>
      </main>
    </>
  );
}

export default Vans;
