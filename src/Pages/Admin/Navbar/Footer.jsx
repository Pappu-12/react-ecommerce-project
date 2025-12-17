import { Link } from "react-router-dom"

export default function Footer() {
     return (
        <footer className="bg-dark text-light mt-5 pt-4">

            <div className="container">
                <div className="row text-center text-md-start">

                    <div className="col-md-4 mb-3">
                        <h3 className="fw-bold">MyShop</h3>
                        <p className="text-secondary">
                            Your online store
                        </p>
                    </div>


                    <div className="col-md-4 mb-3">
                        <h5 className="fw-semibold mb-3">Quick Links</h5>

                        <Link to="/" className="text-secondary d-block text-decoration-none mb-1">Home</Link>

                        <Link to="/cart" className="text-secondary d-block text-decoration-none mb-1">  Cart</Link>

                        <Link to="/wish" className="text-secondary d-block text-decoration-none mb-1"> Wishlist </Link>

                        <Link to="/userprofile" className="text-secondary d-block text-decoration-none">  Profile </Link>
                    </div>

                    <div className="col-md-4 mb-3">
                        <h5 className="fw-semibold mb-3 ">Contact</h5>
                        <p className="text-secondary mb-1">myshop@gmail.com</p>
                        <p className="text-secondary">+91 98765 43210</p>
                    </div>

                </div>
            </div>

            <div className="border-top border-secondary mt-3 py-3 text-center text-info">
                © 2025 MyShop | All Rights Reserved
            </div>

        </footer>
    );
}