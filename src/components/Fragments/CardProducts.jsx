import { Link } from "react-router-dom";
import Button from "../Elements/Button/Button";

const CardProducts = ({ children }) => {
  return (
    <>
      <div className="w-full max-w-xs bg-slate-900 border my-2 border-gray-200 rounded-lg shadow-md mx-2 flex flex-col  justify-between">
        {children}
      </div>
    </>
  );
};

const Body = (props) => {
  const { name, children } = props;
  return (
    <>
      <div className="px-5 pb-5 h-full">
        <a href="">
          <h5 className="text-xl font-semibold tracking-tight text-white">
            {name.substring(0, 20)}
          </h5>
        </a>
        <p className="text-white text-sm">{children.substring(0, 100)}...</p>
      </div>
    </>
  );
};

const Header = (props) => {
  const { image, id } = props;
  return (
    <Link to={`/product/${id}`}>
      <a href="">
        <img
          src={image}
          alt="product"
          className="p-8 rounded-t-lg h-60 w-full object-cover object-left-top"
        />
      </a>
    </Link>
  );
};

const Footer = (props) => {
  const { price, handleAddToCart, id } = props;
  return (
    <div className="flex items-center justify-between px-5 pb-5">
      <span className="text-xl font-bold text-white">
        {price.toLocaleString("en-US", { style: "currency", currency: "USD" })}
      </span>
      <Button className="bg-slate-100" onClick={() => handleAddToCart(id)}>
        Add to cart
      </Button>
    </div>
  );
};

CardProducts.Header = Header;
CardProducts.Body = Body;
CardProducts.Footer = Footer;

export default CardProducts;
