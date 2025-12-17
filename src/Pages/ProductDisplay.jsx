import { useContext } from "react"
import { mycontext } from "./Context"

export default function ProductDisplay() {

    const { Pdata, selectedIndex } = useContext(mycontext)

 if (selectedIndex === -1) {
        return (
            <h2 className="text-center mt-5 text-muted"> No product selected </h2>
        )
    }

    const item = Pdata[selectedIndex]

    return (
        <div className="container mt-5">
             <h2 className="text-center mt-3"> Product Details</h2>
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card shadow-lg rounded-4">
                        
                        <img src={item.Image} alt={item.Name} className="card-img-top"/>

                        <div className="card-body">
                            <h3 className="card-title text-center mb-3">
                                {item.Name}
                            </h3>

                            <p className="card-text"> <strong> Description:</strong> {item.Description}</p>

                            <p className="card-text"> <strong> Quantity:</strong> {item.Quantity} </p>

                            <p className="card-text"> <strong> Price:</strong> ₹ {item.Price}</p>

                            <p className="card-text"> <strong> Category:</strong> {item.Category} </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}