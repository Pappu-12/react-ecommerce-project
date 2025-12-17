import { useContext, useState } from "react"
import { useNavigate,Link} from "react-router-dom"
import { mycontext } from "./Context"

export default function Register() {
    const {users, setUser } = useContext(mycontext)
    const nav = useNavigate()
    const [form, setForm] = useState({
        Name: "",
        Email: "",
        Password: "",
    })
    function Updateform(e) {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    function handleRegister() {
        if (!form.Name || !form.Email || !form.Password) {
            alert("All fields are required")
            return
        }
        if (form.Password.length < 6) {
            alert("Password must be atleast 6 character")
            return
        }
        setUser([...users,form])
        alert("Register Succesfully")
        nav("/login")
    }

     return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-4">

                    <div className="card shadow-lg p-4 text-center">
                        <h3 className="mb-4">User Registration</h3>

                        <input type="text" className="form-control mb-3" name="Name" value={form.Name} placeholder="Enter Name" onChange={Updateform}/>

                        <input type="email"  className="form-control mb-3" name="Email" value={form.Email} placeholder="Enter Email" onChange={Updateform} />

                        <input type="password" className="form-control mb-3" name="Password" value={form.Password} placeholder="Enter Password" onChange={Updateform} />

                        <button className="btn btn-success w-100 mb-3" onClick={handleRegister} > Register </button>

                        <p className="mb-0">
                            Already have an account?{" "}
                            <Link to="/login" className="fw-bold text-decoration-none"> Login</Link>
                        </p>
                    </div>

                </div>
            </div>
        </div>
    );
}