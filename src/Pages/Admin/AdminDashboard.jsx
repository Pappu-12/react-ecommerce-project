import { useContext } from "react"
import { mycontext } from "../Context"
import { useNavigate,Link } from "react-router-dom"

export default function AdminDashboard(){

    const {Pdata,users}=useContext(mycontext)
    const nav =useNavigate()

    function logout() {
        localStorage.removeItem("adminAuth")
        nav("/adminlogin")
    }
    const totalCategories = new Set(Pdata.map(p => p.Category)).size;
   return (
        <div className="container mt-4">
            <Link to="/" className="text-decoration-none fw-bold text-success" >← Home</Link>

            <h1 className="text-center my-4">Admin Dashboard</h1>

            <div className="row justify-content-center g-4">

                <div className="col-md-3">
                    <div className="card text-center shadow-sm bg-light">
                        <div className="card-body">
                            <h5 className="card-title">Total Products</h5>
                            <p className="fs-3 fw-bold">{Pdata.length}</p>
                        </div>
                    </div>
                </div>

                <div className="col-md-3">
                    <div className="card text-center shadow-sm bg-warning-subtle">
                        <div className="card-body">
                            <h5 className="card-title">Total Users</h5>
                            <p className="fs-3 fw-bold">{users.length}</p>
                        </div>
                    </div>
                </div>

                <div className="col-md-3">
                    <div className="card text-center shadow-sm bg-danger-subtle">
                        <div className="card-body">
                            <h5 className="card-title">Total Categories</h5>
                            <p className="fs-3 fw-bold">{totalCategories}</p>
                        </div>
                    </div>
                </div>

            </div>

            <div className="text-center mt-5">

                <Link to="/adminproduct" className="btn btn-outline-primary me-3" >Manage Products </Link>

                <Link to="/adminusers" className="btn btn-outline-primary" > Manage Users</Link>

                <div className="mt-4">
                    <button className="btn btn-danger px-4" onClick={logout} >Logout  </button>
                </div>

            </div>

        </div>
    );
}