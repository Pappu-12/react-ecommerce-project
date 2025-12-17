import { useContext, useState } from "react"
import { useNavigate,Link} from "react-router-dom"
import { mycontext } from "./Context"

export default function Login(){

    const{users,setIsLoggedIn,setCart,setLoggedUser}=useContext(mycontext)
    const nav=useNavigate()
    const[email,setEmail]=useState("")
    const[password,setPassword]=useState("")


    function handleLogin(){
        const User=users.find(data=>data.Email===email && data.Password===password)
        if(User){
            alert("Login Successfully")
            setIsLoggedIn(true)
              setLoggedUser(User)
              setCart([])
            nav("/")
        }
        else{
            alert("invalid Email or Password")
        }
    }
   return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-4">

                    <div className="card shadow-lg p-4 text-center">
                        <h3 className="mb-4">User Login</h3>

                        <input type="email" className="form-control mb-3" placeholder="Email" onChange={(e) => setEmail(e.target.value)}/>

                        <input type="password" className="form-control mb-3" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>

                        <button className="btn btn-success w-100 mb-3" onClick={handleLogin} > Login </button>

                        <p className="mb-0">
                            Don’t have an account?{" "}
                            <Link to="/register" className="fw-bold text-decoration-none"> Register</Link>
                        </p>
                    </div>

                </div>
            </div>
        </div>
    );
}