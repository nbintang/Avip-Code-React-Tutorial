import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Button from "../components/Elements/Button/Button";
import CardProducts from "../components/Fragments/CardProducts";
import { getProducts } from "../services/product.service";
import { useLogin } from "../hooks/useLogin";
import SkeletonLoad from "../components/Elements/Skeleton/Loading";

const ProductsPage = () => {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [products, setProduct] = useState([]);
  const username = useLogin();

  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem("cart")) || []);
  }, []);

  useEffect(() => {
    getProducts((data) => setProduct(data));
  }, []);

  useEffect(() => {
    if (products.length > 0 && cart.length > 0) {
      const sum = cart.reduce((acc, item) => {
        const product = products.find((product) => product.id === item.id);
        return acc + product.price * item.qty;
      }, 0);
      setTotalPrice(sum);
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart, products]);

  const handleLogout = () => {
    window.localStorage.removeItem("token");
    window.location.href = "/login";
  };
  const handleAddToCart = (id) => {
    if (cart.find((item) => item.id === id)) {
      setCart(
        cart.map((item) =>
          item.id === id ? { ...item, qty: item.qty + 1 } : item
        )
      );
    } else {
      setCart([...cart, { id, qty: 1 }]);
    }
  };

  const totalPriceRef = useRef(null);

  // useRef
  // const cartRef = useRef(JSON.parse(localStorage.getItem("cart")) || []);
  // const handleAddToCartRef = (id) => {
  //   cartRef.current = [...cartRef.current, { id, qty: 1 }];
  // };
  // document.getElementById()
  // console.log(totalPriceRef);

  useEffect(() => {
    if (cart.length > 0) {
      totalPriceRef.current.style.display = "table-row";
    } else {
      totalPriceRef.current.style.display = "none";
    }
  }, [cart]);

  return (
    <>
      <div className="flex justify-between h-16 bg-black text-white items-center px-7">
        <Link to={"/profile"}>
          <h1 className="text-md hover:underline font-bold">{username}</h1>
        </Link>
        <Button className=" bg-slate-200 text-black" onClick={handleLogout}>
          Logout
        </Button>
      </div>
      <div className="flex justify-start py-5">
        <div className="w-4/6 flex flex-wrap">
          {products.length > 0 ? (
            products.map((product) => {
              return (
                <CardProducts key={product.id}>
                  <CardProducts.Header image={product.image} id={product.id} />
                  <CardProducts.Body name={product.title}>
                    {product.description}
                  </CardProducts.Body>
                  <CardProducts.Footer
                    price={product.price}
                    id={product.id}
                    handleAddToCart={handleAddToCart}
                  />
                </CardProducts>
              );
            })
          ) : (
            <div className="w-full flex justify-center h-screen items-center">
              <h1 className="text-4xl font-bold">Loading</h1>
              <SkeletonLoad
                color={"black"}
                loading={true}
                margin={9}
                size={15}
              />
            </div>
          )}
        </div>
        <div className="w-2/6">
          <h1 className="text-3xl font-bold ml-4 text-black">Cart</h1>
          <table className="text-left table-auto border-separate border-spacing-x-5">
            <thead>
              <tr>
                <th>Product</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {products.length > 0 &&
                cart.map((item) => {
                  const product = products.find(
                    (products) => products.id === item.id
                  );
                  return (
                    <tr key={item.id}>
                      <td>{product.title.substring(0, 10)}...</td>
                      <td>
                        {product.price.toLocaleString("en-US", {
                          style: "currency",
                          currency: "USD",
                        })}
                      </td>
                      <td>{item.qty}</td>
                      <td>
                        {(item.qty * product.price).toLocaleString("en-US", {
                          style: "currency",
                          currency: "USD",
                        })}
                      </td>
                    </tr>
                  );
                })}
            </tbody>
            <tr ref={totalPriceRef}>
              <td colSpan={3}>
                <b>Total Price</b>
              </td>
              <td>
                <b>
                  $
                  {totalPrice.toLocaleString("en-US", {
                    styles: "currency",
                    currency: "USD",
                  })}
                </b>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </>
  );
};

export default ProductsPage;
