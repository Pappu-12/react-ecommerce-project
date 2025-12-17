import { useContext, useEffect } from "react"
import { mycontext } from "./Context"

export default function Carts() {

    const { cart, setCart, isLoggedIn } = useContext(mycontext)

    useEffect(() => {
        if (!isLoggedIn) setCart([])
    }, [isLoggedIn, setCart])


    console.log("cart page", cart)

    function increaseQty(index) {
        let updated = [...cart]
        updated[index].qty = (updated[index].qty || 1) + 1
        setCart(updated)
    }
    function decreaseQty(index) {
        let updated = [...cart]
        if ((updated[index].qty || 1) > 1) {
            updated[index].qty -= 1
            setCart(updated)
        }
    }

    function removeItem(index) {
        let updated = [...cart]
        updated.splice(index, 1)
        setCart(updated)
    }


    let totalValue = cart.reduce((total, value) => total + (value.Price * value.qty), 0)
    if (!isLoggedIn) {
        return <h2 className="text-center mt-5"> Please login to view Cart</h2>
    }

    return (
        <div className="container my-4">
            <h2 className="mb-4 text-center">Shopping Cart</h2>

            {
                cart.length > 0 ? (
                    cart.map((item, index) => (
                        <div className="card mb-3 shadow-sm" key={index}>
                            <div className="row g-0 align-items-center">
                                <div className="col-md-3 text-center">
                                    <img src={item.Image} className="img-fluid rounded p-2 " alt={item.Name} />
                                </div>

                                <div className="col-md-6">
                                    <div className="card-body">
                                        <h5 className="card-title">{item.Name}</h5>
                                        <p className="card-text">  Price: ₹ {item.Price * item.qty}</p>
                                        <p className="card-text">  Quantity: {item.qty}</p>

                                        <div className="btn-group">
                                            <button className="btn btn-outline-primary" onClick={() => decreaseQty(index)} >  -</button>
                                            <button className="btn btn-outline-primary" onClick={() => increaseQty(index)} >  +</button>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-3 ">
                                    <button className="btn btn-danger mb-2" onClick={() => removeItem(index)} >  Remove  </button>
                                </div>
                            </div>
                        </div>
                    ))
                ) :
                    (
                        <h4 className="text-center mt-5">
                            Your cart is empty! 🛒
                        </h4>
                    )}

            <h3 className="text-end mt-4">
                Total: ₹ {totalValue}
            </h3>
        </div>
    );
}
