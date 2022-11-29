import "./App.css";
import { useState } from "react";
import bakeryData from "./assets/bakery-data.json";
import BakeryItem from "./components/BakeryItem";

/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */

function App() {
  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */
  const [cart, setCart] = useState([]);

  const AddToCart = (item) => {
    setCart([...cart, item]);
  };

  return (
    <div className="App">
      <h1>My Bakery</h1> {/* TODO: personalize your bakery (if you want) */}

      {bakeryData.map((item, index) => ( // TODO: map bakeryData to BakeryItem components
        <>
          <BakeryItem image={item.image} name={item.name} price={item.price} description={item.description} callback={AddToCart}/>
        </>
      ))}

      <div>
        <h2>Cart</h2>
        {/* TODO: render a list of items in the cart */}
        {cart.map((item, index) => (
          <div>
            <p>{item.name}</p>
            <p>${item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
