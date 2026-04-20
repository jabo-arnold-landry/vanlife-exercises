import { useLocation } from "react-router-dom";
import Button from "../components/UI/Button";
import Anchor from "../components/UI/Anchor";

function Product() {
  const location = useLocation();
  const product = location.state;
  const { img, category, Pname, price, Pdescription } = product;
  return (
    <>
      <Anchor to="/vans">back to vans</Anchor>
      <img src={img} alt="imageone" />
      <Button>{category}</Button>
      <h3>{Pname}</h3>
      <strong>{price}</strong>
      <p>{Pdescription}</p>
      <Button>Rent the van</Button>
    </>
  );
}

export default Product;
