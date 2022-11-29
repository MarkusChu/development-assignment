import "../App.css";

function BakeryItem(props) {
    const ingredientString = props.ingredients.map((ingredient, index) => {
        if (index === props.ingredients.length - 1) {
            return ingredient;
        } else {
            return ingredient + ", ";
        }
    });

    const priceCategory = (price) => {
        if (price < 3) {
            return "Under $3";
        } else if (price >= 3 && price <= 5) {
            return "$3 - $5";
        } else {
            return "Over $5";
        }
    }
    
    return (
        <div className="BakeryItem">
            <img src={props.image} alt={props.name} width="200" height="200" />
            <p>{props.name}</p>
            <p>${props.price}</p>
            <p>Ingredients: {ingredientString}</p>
            <p>Price Category: {priceCategory(props.price)}</p>
            <button onClick={() => props.callback(props)}>Add to Cart</button>
        </div>
    );
}

export default BakeryItem;
