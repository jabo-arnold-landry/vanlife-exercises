import { Link } from "react-router-dom";
import Button from "../components/UI/Button";
import { ProductInfo } from "../MockData/Data";
import { useSearchParams } from "react-router-dom";
import { useState } from "react";

function Vans() {
  const [filter, setFilter] = useSearchParams();
  const filterButtons = ["simple", "luxury", "rugged"];
  const [items, setItems] = useState(ProductInfo);

  return (
    <>
      <main className="font-text-font">
        <section className="mx-12">
          <h2 className="font-bold text-4xl">Explore our van options</h2>

          <div className="flex gap-2 mt-5">
            {filterButtons.map((btn, index) => (
              <Button
                key={index}
                color="filtersButton"
                sizes="md"
                onClick={(e) => {
                  setFilter((prev) => {
                    if (prev.has(e.currentTarget.textContent)) {
                      prev.delete(e.currentTarget.textContent);
                      return prev;
                    }

                    prev.append(e.currentTarget.textContent, "true");
                    const filteredList = ProductInfo.filter(
                      (product) =>
                        product.category === e.currentTarget.textContent,
                    );
                    setItems([]);
                    setItems((prev) => [...prev, ...filteredList]);
                    return prev;
                  });
                }}
              >
                {btn}
              </Button>
            ))}

            <Button
              color="clearFilter"
              onClick={() => {
                setItems(ProductInfo);

                setFilter("");
              }}
            >
              clear filters
            </Button>
          </div>
        </section>

        <section className="flex flex-wrap justify-center gap-3  md:grid md:grid-cols-2  md:justify-items-center my-8 mx-12 lg:grid-cols-3">
          {items.map((product) => {
            const { id, img, Pname, price, category } = product;
            return (
              <div key={id} className="card">
                <Link to={`${id}`} state={product}>
                  <img
                    src={img}
                    alt={`${img}-${id}`}
                    loading="lazy"
                    className="min-w-2/3 object-cover rounded-lg transition-transform delay-75 duration-75 ease-in-out hover:scale-75 overflow-clip"
                  />
                  <section className="flex justify-between my-2">
                    <p className="font-bold text-4xl">{Pname}</p>
                    <p className="text-xl">{price}</p>
                  </section>
                </Link>
                <Button sizes="sm" color={category as string}>
                  {category}
                </Button>
              </div>
            );
          })}
        </section>
      </main>
    </>
  );
}

export default Vans;
