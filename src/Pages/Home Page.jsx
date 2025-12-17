import { useContext, useState } from "react"
import { mycontext } from "./Context"
import { useNavigate } from "react-router-dom"
import Navbar from "./Admin/Navbar/Navbar"

export default function HomePage() {

    const { Pdata, cart, setCart, like, setLike, setSelectedIndex, isLoggedIn } = useContext(mycontext)
    const nav = useNavigate()
    const isAdmin = localStorage.getItem("adminAuth") === "true"
    const [search, setSearch] = useState("")
    const [category, setCategory] = useState("All")
    const [sort, setSort] = useState("")

    const filterProducts = Pdata.filter(item => category === "All" ? true : item.Category === category)
        .sort((a, b) => {
            if (sort === "Low") return a.Price - b.Price
            if (sort === "High") return b.Price - a.Price
            return 0
        })
        .filter(item =>
            item.Name?.toUpperCase().includes(search.toUpperCase())
        );


    function addToCart(item) {
        if (!isLoggedIn) {
            alert("Please login to add items to cart");
            return;
        }
        setCart([...cart, { ...item, qty: 1 }])
        alert("Added to Cart")

    }
    console.log("home page", cart)

    function addToLike(item) {
        if (!isLoggedIn) {
            alert("Please login to add items to wishlist")
            return;
        }
        setLike([...like, item])
        alert("Added to Wishlist")
    }

    function showDetails(index) {
        setSelectedIndex(index)
        nav("/productdisplay")
    }

    return (
        <div style={{ padding: "20px" }}>
            <Navbar />

            <div className="container py-4">
                <h1 className=" text-center mb-4">
                    {isAdmin ? "Admin Product View" : "Product Page"} </h1>

                <div className="row g-3 justify-content-center mb-4">
                    <div className="col-md-3 ">
                        <input type="text" placeholder="Search" value={search} onChange={(e) => setSearch(e.target.value)} />
                    </div>
                    
                    <div className="col-md-3">
                        <select className="form-select" value={category} onChange={(e) => setCategory(e.target.value)}>
                            <option value="All">All</option>
                            <option value="Electronics">Electronics</option>
                            <option value="Accessories">Accessories</option>
                            <option value="Fashion">Fashion</option>
                            <option value="Home">Home</option>
                        </select>
                    </div>

                    
                    <div className="col-md-3">
                        <select value={sort} onChange={(e) => setSort(e.target.value)}>
                            <option value="">Sort by Price</option>
                            <option value="Low">Low - High</option>
                            <option value="High">High - Low</option>
                        </select>
                    </div>
                </div>

                <div className="row-g-4">
                    {
                        filterProducts.map((item, index) => (
                            <div className="col-sm-6 col-md-4 col-lg-3 mb-4" key={index}>
                                <div className="card h-100">
                                    <img src={item.Image} className="card-img-top" alt="" />

                                    <div className="card-body text-center">
                                        <h3 className="card-title">{item.Name}</h3>
                                        <p className="fw-bold mb-1">₹ :{item.Price}</p>
                                        <p className="text-muted">{item.Category}</p>

                                        <button className="btn btn-success w-100 mb-2" onClick={() => addToCart(item)}> Add to Cart </button>

                                        <button className="btn btn-info w-100 mb-2" onClick={() => addToLike(item)}>  Add to Wishlist </button>

                                        <button className="btn btn-warning w-100 mb-2" onClick={() => showDetails(index)}> View Details </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                </div>
            </div>
        </div >
    )
}