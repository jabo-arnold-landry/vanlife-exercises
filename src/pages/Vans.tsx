
import Button from "../components/UI/Button";
import { ProductInfo } from "../MockData/Data";
function Vans() {
  return (
    <>
      <h2>explore our van options</h2>
      <main>
        <section>
          <Button>simple</Button>
          <Button>luxury</Button>
          <Button>rugged</Button>
          <Button>clear filters</Button>
        </section>

        <section>
          {ProductInfo.map((product) => {
            const { id, img, Pname, price, category } = product;
            return (
              <div key={id} className="card">
                <img src={img} alt={`${img}-${id}`} />
                <section>
                  <p>{Pname}</p>
                  <p>{price}</p>
                </section>
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
