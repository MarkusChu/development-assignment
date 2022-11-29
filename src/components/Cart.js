import "../App.css";

function Cart(props) {
    const cart = props.cart.reduce((acc, item) => {
        const existingItem = acc.find((cartItem) => cartItem.name === item.name);
        if (existingItem) {
            existingItem.count++;
        } else {
            acc.push({ ...item, count: 1 });
        }
        return acc;
    }, []);
    
    const totalPrice = cart.reduce((acc, item) => {
        return acc + item.price * item.count;
    }, 0);

    return (
        <div>
            <h2>Cart</h2>
            <h4>Total Price: ${totalPrice}</h4>
            {cart.map((item, index) => (
                <>
                    <div className="Cart">
                        <p>{item.name}</p>
                        <p>${item.price}</p>
                        <p>Quantity: {item.count}</p>
                        <button onClick={() => props.callback(item.name)}>Remove</button>
                    </div> <br />
                </>

            ))}
        </div>
    )
}

export default Cart;
