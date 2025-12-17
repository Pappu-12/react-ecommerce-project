import { useContext, useState } from "react"
import { mycontext } from "../Context"

export default function AdminProducts() {
    const { Pdata, setPdata } = useContext(mycontext);

    const [form, setForm] = useState({
        Name: "", Price: "", Category: "", Description: "", Image: ""
    });

    const [editIndex, setEditIndex] = useState(-1)

    function updateForm(e) {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    function saveProduct() {
        if (!form.Name || !form.Price || !form.Category) {
            alert("All fields are required")
            return;
        }

        if (editIndex === -1) {
            setPdata([...Pdata, form])
            alert("Product Added")
        } else {
            let updated = [...Pdata]
            updated[editIndex] = form
            setPdata(updated)
            alert("Product Updated")
        }

        setForm({ Name: "", Price: "", Category: "", Description: "", Image: "" })
        setEditIndex(-1)
    }

    function deleteProduct(index) {
        let updated = [...Pdata]
        updated.splice(index, 1)
        setPdata(updated)
        alert("Product Deleted")
    }

    function editProduct(index) {
        setForm(Pdata[index])
        setEditIndex(index)
    }

    return (
        <div className="container mt-4">

            <h1 className="text-center mb-4">Manage Products</h1>

            <div className="card shadow-sm p-4 mb-5 mx-auto" style={{ maxWidth: "450px" }}>
                <h5 className="text-center mb-3">
                    {editIndex === -1 ? "Add Product" : "Edit Product"}
                </h5>

                <input className="form-control mb-2" name="Name" value={form.Name} placeholder="Product Name" onChange={updateForm} />

                <input className="form-control mb-2" name="Price" value={form.Price} placeholder="Price" onChange={updateForm} />

                <input className="form-control mb-2" name="Category" value={form.Category} placeholder="Category" onChange={updateForm} />

                <input className="form-control mb-2" name="Quantity" value={form.Quantity} placeholder="Quantity" onChange={updateForm} />

                <input className="form-control mb-2" name="Image" value={form.Image} placeholder="Image URL" onChange={updateForm} />

                <textarea className="form-control mb-3" name="Description" value={form.Description} placeholder="Description" rows="3" onChange={updateForm} />

                <button className={`btn ${editIndex === -1 ? "btn-success" : "btn-warning"} w-100`} onClick={saveProduct} > {editIndex === -1 ? "Add Product" : "Update Product"}</button>
            </div>

            <h2 className="mb-3">Product List</h2>

            <div className="row">
                {
                    Pdata.map((item, index) => (
                        <div className="col-md-4 mb-4" key={index}>
                            <div className="card h-100 shadow-sm">
                                <img src={item.Image} alt={item.Name} className="card-img-top" style={{ height: "250px" }} />

                                <div className="card-body">
                                    <h5 className="card-title">{item.Name}</h5>
                                    <p className="card-text text-muted">
                                        {item.Category}
                                    </p>
                                    <p className="fw-bold">₹ {item.Price}</p>
                                </div>

                                <div className="card-footer text-center">
                                    <button className="btn btn-outline-primary btn-sm" onClick={() => editProduct(index)} > Edit </button>

                                    <button className="btn btn-outline-danger btn-sm" onClick={() => deleteProduct(index)} >Delete </button>
                                </div>
                            </div>
                        </div>
                    ))}
            </div>

        </div>
    );
}