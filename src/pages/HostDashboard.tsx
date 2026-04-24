import Button from "../components/UI/Button";
import { ProductInfo } from "../MockData/Data";
export default function HostDashboard() {
  return (
    <>
      <main>
        <section>
          <div>
            <h1>Welcome!</h1>
            <p>
              income last <span>30 days</span>
            </p>
          </div>
          <p>details</p>
        </section>

        <section>
          <div>
            <strong>review score</strong>
            <p>star 5.0/5</p>
          </div>
          <p>details</p>
        </section>

        <article>
          <h2>Your listed vans</h2>
          <section className="flex flex-wrap mx-3 gap-3 mb-4 md:grid grid-cols-4">
            {ProductInfo.map((product) => {
              const { id, img, Pname, price } = product;
              return (
                <div
                  key={id}
                  className="card bg-orange-200  px-2 py-3 flex flex-wrap lg:flex-nowrap items-center gap-10 rounded-md shadow-sm shadow-black/50"
                >
                  <img
                    src={img}
                    alt={`${img}-${id}`}
                    loading="lazy"
                    className="size-16 object-contain rounded-md transition-transform delay-75 duration-75 ease-in-out hover:scale-75 overflow-clip"
                  />

                  <section className="flex items-center gap-2">
                    <p className="">{Pname}</p>
                    <p className="">{price}</p>
                  </section>

                  <Button sizes="sm">details</Button>
                </div>
              );
            })}
          </section>
        </article>
      </main>
    </>
  );
}
