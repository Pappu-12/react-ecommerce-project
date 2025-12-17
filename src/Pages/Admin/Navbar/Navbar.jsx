import { Link, useNavigate } from "react-router-dom"
import { useContext } from "react"
import { mycontext } from "../../Context"

export default function Navbar() {

    const { isLoggedIn, setIsLoggedIn, cart } = useContext(mycontext)
    const nav = useNavigate()

    function handleLogout() {
        setIsLoggedIn(false)
        alert("Logged Out")
        nav("/login")
    }


    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom px-4">

            <div className="container-fluid justify-content-end">

                <ul className="navbar-nav align-items-center gap-3">

                    <li className="nav-item position-relative">
                        <Link className="nav-link fw-semibold" to="/cart">Cart</Link>
                        {
                            cart.length > 0 && (
                                <span className="badge bg-danger position-absolute top-0 start-100 translate-middle">{cart.length}</span>
                            )}
                    </li>

                    <li className="nav-item">
                        <Link className="nav-link fw-semibold" to="/wish">Wishlist </Link>
                    </li>

                    {
                        !isLoggedIn && (
                            <li className="nav-item">
                                <Link className="nav-link fw-semibold" to="/login"> Login </Link>
                            </li>
                        )}
                    {
                        isLoggedIn && (
                            <li className="nav-item">
                                <button className="btn btn-link nav-link fw-semibold" onClick={handleLogout} > Logout</button>
                            </li>
                        )}

                    <li className="nav-item">
                        <Link className="nav-link fw-semibold" to="/register"> Register</Link>
                    </li>

                    <li className="nav-item">
                        <Link className="nav-link fw-semibold" to="/adminlogin"> AdminLogin </Link>
                    </li>

                    <li className="nav-item">
                        <Link className="nav-link fw-semibold" to="/userprofile"> Profile </Link>
                    </li>

                </ul>

            </div>
        </nav>
    );
}