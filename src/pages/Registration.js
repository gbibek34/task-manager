import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const Register = () => {
    const [fullname, setFullName] = useState("")
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleNameChange = (event) => {
        setFullName(event.target.value);
    }

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const onSubmit = async () => {
        const user = {
            fullname,
            username,
            email,
            password,
        };
        await axios
            .post("/users/register", user)
            .then(() => {
                toast.success("User Registered Successfully");
                setTimeout(() => {
                    window.location.replace("/login");
                }, 500);
            })
            .catch((e) => {
                toast.error(`Registration Failed! ${e["response"]["data"]["msg"]}`);
            });
    };

    return (
        <div className="user-form">
            <h1 style={{ textAlign: "center" }}>CheckMate</h1>
            <h3 style={{ color: "rgba(0, 0, 0, 0.6)" }}>Registration</h3>
            <div className="form-content">
                <div className="form-group">
                    <label htmlFor="name">Full Name</label>
                    <input
                        type="text"
                        id="fullname"
                        name="fullname"
                        required="required"
                        value={fullname}
                        onChange={handleNameChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        required="required"
                        value={username}
                        onChange={handleUsernameChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        required="required"
                        value={email}
                        onChange={handleEmailChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        required="required"
                        value={password}
                        onChange={handlePasswordChange}
                    />
                </div>
                <div className="form-group">
                    <button onClick={onSubmit}>Register</button>
                </div>
                <div className="form-group">
                    <Link to="/login">
                        <button className="register-button">Login</button>
                    </Link>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};
export default Register;