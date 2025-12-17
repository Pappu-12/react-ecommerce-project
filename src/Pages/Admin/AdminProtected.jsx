import { Navigate } from "react-router-dom"

export default function AdminProtected({ children }) {
    const adminAuth = localStorage.getItem("adminAuth")
    return adminAuth ? children : <Navigate to="/AdminLogin" />
}