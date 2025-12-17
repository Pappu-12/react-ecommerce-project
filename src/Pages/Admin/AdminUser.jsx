import { useContext } from "react"
import { mycontext } from "../Context"

export default function AdminUser() {
    const { users, setUser } = useContext(mycontext)
    function deleteUser(index) {
        let updated = [...users]
        updated.splice(index, 1)
        setUser(updated)
        alert("User Deleted")
    }

    function toggleBlock(index) {
        let updated = [...users]
        updated[index].blocked = !updated[index].blocked
        setUser(updated)
    }

    return (
        <div className="container mt-4">

            <h1 className="text-center mb-4">Manage Users</h1>

            {users.length === 0 ? (
                <h5 className="text-center text-muted">
                    No users available
                </h5>
            ) :
                (
                    <div className="row">
                        {
                            users.map((u, index) => (
                                <div className="col-md-6 mb-3" key={index}>
                                    <div className="card shadow-sm h-100">
                                        <div className="card-body">

                                            <h5 className="card-title">{u.Name}</h5>
                                            <p className="card-text">
                                                <strong>Email:</strong> {u.Email}
                                            </p>

                                            <div className="d-flex gap-2">
                                                <button className={`btn btn-sm ${u.blocked ? "btn-success" : "btn-warning"}`} onClick={() => toggleBlock(index)}>{u.blocked ? "Unblock" : "Block"} </button>

                                                <button className="btn btn-sm btn-danger" onClick={() => deleteUser(index)} > Delete </button>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            ))}
                    </div>
                )}

        </div>
    );
}