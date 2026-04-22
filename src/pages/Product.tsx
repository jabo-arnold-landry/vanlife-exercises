import { useLocation } from "react-router-dom";
import Button from "../components/UI/Button";
import Anchor from "../components/UI/Anchor";

function Product() {
  const location = useLocation();
  const product = location.state;
  const { img, category, Pname, price, Pdescription } = product;
  return (
    <>
      <main className="mx-10">
        <Anchor to="/vans">back to vans</Anchor>
        <img src={img} alt="imageone" />
        <div className="my-5 grid gap-4 w-fit">
          <Button
            className="place-self-start"
            color={category as string}
            sizes="sm"
          >
            {category}
          </Button>
          <h3>{Pname}</h3>
          <strong className="font-bold text-xl">{price}</strong>
          <p className="max-inline-[40ch] text-2xl">{Pdescription}</p>
          <Button className="col-span-full" color="bgOrange" sizes="md">Rent the van</Button>
        </div>
      </main>
    </>
  );
}

export default Product;
