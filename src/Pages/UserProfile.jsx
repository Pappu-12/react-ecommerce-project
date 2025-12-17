import { useContext, useState,useEffect} from "react"
import { mycontext } from "./Context"
import { useNavigate } from "react-router-dom"

export default function UserProfile(){
    const nav =useNavigate()
    const{users,setUser,loggedUser,setLoggedUser}=useContext(mycontext)
    const[name,setName]=useState(users.name||"")
    const[email,setEmail]=useState(users.email||"")
    const[password,setPassword]=useState(users.password||"")


    useEffect(() => {
    if (loggedUser) {
      setName(loggedUser.Name)
      setEmail(loggedUser.Email)
      setPassword(loggedUser.Password)
    }
  }, [loggedUser])

    function UpdateProfile(){
       
    const updatedUser = {
      Name: name, Email: email, Password: password,
    };

    setLoggedUser(updatedUser)
    const updatedUsers = users.map((u) =>
      u.Email === loggedUser.Email ? updatedUser : u
    );

    setUser(updatedUsers)
        
        alert("Profile Updated !")
        nav("/")
    }


    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-5">

                    <div className="card shadow-lg p-4">
                        <h3 className="text-center mb-4">User Profile</h3>

                        <div className="mb-3">
                            <label className="form-label fw-semibold">
                                Name
                            </label>
                            <input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)} />
                        </div>

                        <div className="mb-3">
                            <label className="form-label fw-semibold">
                                Email
                            </label>
                            <input type="email"  className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>

                        <div className="mb-4">
                            <label className="form-label fw-semibold">
                                Password
                            </label>
                            
                            <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} />
                        </div>

                        <div className="text-center">
                            <button className="btn btn-success px-4" onClick={ UpdateProfile}> Update Profile</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}