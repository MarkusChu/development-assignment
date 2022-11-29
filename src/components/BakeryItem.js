import "../App.css";

// TODO: create a component that displays a single bakery item
function BakeryItem(props) {
    return (
        <div className="BakeryItem">
            <img src={props.image} alt={props.name} width="200" height="200" />
            <p>{props.name}</p>
            <p>{props.description}</p>
            <p>${props.price}</p>
            <button onClick={() => props.callback(props)}>Add to Cart</button>
        </div>
    );
}

export default BakeryItem;
