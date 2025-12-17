import { useContext } from "react"
import { mycontext } from "./Context"

export default function Wishlist() {

    const { like, setLike, cart, setCart, isLoggedIn } = useContext(mycontext);

    function removeFromWishlist(index) {
        let updated = [...like]
        updated.splice(index, 1)
        setLike(updated)
    }


    function moveToCart(item, index) {
        setCart([...cart, { ...item, qty: 1 }])
        removeFromWishlist(index)
    }
    if (!isLoggedIn) {
        return (
            <h2 className="text-center mt-5">
                Please login to view Wishlist
            </h2>
        );
    }

    return (
        <div className="container mt-4">
            <h2 className="text-center mb-4">Wishlist</h2>

            {
                like.length === 0 ? (
                    <h5 className="text-center text-muted">
                        Your wishlist is empty
                    </h5>
                ) :
                    (
                        like.map((item, index) => (
                            <div className="card mb-3 shadow-sm" key={index}>
                                <div className="row g-0 align-items-center">

                                    <div className="col-md-3 text-center">
                                        <img src={item.Image} alt={item.Name} className="img-fluid rounded p-2" style={{ maxHeight: "150px" }} />
                                    </div>

                                    <div className="col-md-6">
                                        <div className="card-body">
                                            <h5 className="card-title">{item.Name}</h5>
                                            <p className="card-text fw-bold">
                                                ₹ {item.Price}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="col-md-3 text-center mb-3">
                                        <button className="btn btn-success btn-sm mb-2 w-75" onClick={() => moveToCart(item, index)} > Move to Cart </button>

                                        <br />

                                        <button className="btn btn-danger btn-sm w-75" onClick={() => removeFromWishlist(index)} >Remove </button>
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
        </div>
    );
}