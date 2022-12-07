import "./App.css";
import { useState, useEffect } from "react";
import bakeryData from "./assets/bakery-data.json";
import BakeryItem from "./components/BakeryItem";
import Cart from "./components/Cart";

bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
const bakeryDataSorted = bakeryData.sort((a, b) => a.name.localeCompare(b.name))

function App() {
  const [cart, setCart] = useState([]);
  const [priceFilter, setPriceFilter] = useState(0);
  const [ingredientFilter, setIngredientFilter] = useState("");
  const [sortBy, setSortBy] = useState("name");
  const [filterSortList, setFilterSortList] = useState(bakeryDataSorted);

  const AddToCart = (item) => {
    setCart([...cart, item]);
  };

  const RemoveFromCart = (itemName) => {
    let item = cart.find((item) => item.name === itemName);
    let index = cart.indexOf(item);
    let newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
  };

  const ClearFilters = () => {
    setPriceFilter(0);
    setIngredientFilter("")
    setSortBy("name")
  }

  useEffect(() => {
    let filteredList = filterSortList;
    if (priceFilter > 0) {
      filteredList = filteredList.filter((item) =>
        (priceFilter === 1 && item.price < 3) ||
        (priceFilter === 2 && item.price >= 3 && item.price <= 5) ||
        (priceFilter === 3 && item.price > 5)
      );
    }
    if (ingredientFilter !== "") {
      filteredList = filteredList.filter((item) =>
        item.ingredients.includes(ingredientFilter)
      );
    }
    if (sortBy === "name") {
      filteredList = filteredList.sort((a, b) => a.name.localeCompare(b.name))
    } else if (sortBy === "price") {
      filteredList = filteredList.sort((a, b) => (a.price > b.price) ? 1 : -1);
    }

    setFilterSortList(filteredList);
  }, [priceFilter, ingredientFilter, sortBy]);

  return (
    <div style={{ textAlign: "center" }}>
      <div className="App">
        <Cart cart={cart} callback={RemoveFromCart} />
        <div>
          <h1>My Bakery</h1>
          <div>
            <label>Filter by Price:</label>
            <select value={priceFilter} onChange={(e) => setPriceFilter(Number(e.target.value))}>
              <option value="0">All</option>
              <option value="1">Under $3</option>
              <option value="2">$3 to $5</option>
              <option value="3">Over $5</option>
            </select> <br />

            <label>Filter by Ingredients:</label>
            <select value={ingredientFilter} onChange={(e) => setIngredientFilter(e.target.value)}>
              <option value="">All</option>
              <option value="flour">Flour</option>
              <option value="sugar">Sugar</option>
              <option value="eggs">Eggs</option>
              <option value="cream">Cream</option>
              <option value="butter">Butter</option>
              <option value="taro">Taro</option>
            </select> <br />

            <label>Sort by:</label>
            <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
              <option value="name">Name</option>
              <option value="price">Price</option>
            </select> <br />

            <button onClick={ClearFilters}>Clear Filters</button>
          </div>

          {filterSortList.map((item, index) => (
            <>
              <BakeryItem image={item.image} name={item.name} price={item.price} ingredients={item.ingredients} callback={AddToCart} />
            </>
          ))}
        </div>
      </div>
    </div>
  )
}

export default App;
