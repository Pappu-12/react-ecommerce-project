import { useContext, useState } from "react"
import { mycontext } from "../Context"
import { useNavigate, Link } from "react-router-dom"

export default function AdminLogin() {

    const { adminAccount } = useContext(mycontext)
    const nav = useNavigate()

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")


    function handleAdminLogin() {
        if (email === adminAccount.email && password === adminAccount.password) {
            localStorage.setItem("adminAuth", "true")
            alert("Admin Logged In Successfully")
            nav("/admindashboard")
        }
        else {
            alert("Invalid Admin Credentials")
        }
    }
   
    return (
        <div className="container mt-4">

            <Link to="/" className="text-decoration-none fw-bold text-danger"> ← Home</Link>

            <div className="d-flex justify-content-center mt-5">
                <div className="card shadow-lg p-4" style={{ width: "350px" }}>

                    <h3 className="text-center mb-4">Admin Login</h3>

                    <div className="mb-3">
                        <input type="email" className="form-control" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                    </div>

                    <div className="mb-3">
                        <input type="password" className="form-control" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                    </div>

                    <div className="text-center">
                        <button className="btn btn-success w-50"onClick={handleAdminLogin} > Login</button>
                    </div>

                </div>
            </div>
        </div>
    );
}