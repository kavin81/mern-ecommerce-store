import { useState } from "react";
import "./Auth.css";

import ky from "ky";

function AuthPage() {
    const [isSignUp, setIsSignUp] = useState(true);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(isSignUp ? "Sign Up" : "Sign In", {
            email,
            password,
            name,
        });
        if (isSignUp) {
            ky.post("http://localhost:3000/api/v1/user/signup", {
                json: { email, password, name },
            }).then((res) => {
                if(res.status === 400){
                    alert("Please check your email and/or password");
                } else if(res.status === 201){
                    window.location = "/catalog"
                }
            });
        } else {
            ky.post("http://localhost:3000/api/v1/user/login", {
                json: { email, password },
            }).then((res) => {
                if(res.status === 400){
                    alert("Please check your email and/or password");
                } else if(res.status === 200){
                    console.log(res)
                    window.location = "/catalog"
                }
            });
        }
    };

    return (
        <div className="auth-page">
            <div className="auth-container">
                <h1 className="auth-title">
                    {isSignUp ? "Create Account" : "Welcome Back"}
                </h1>
                <form onSubmit={handleSubmit} className="auth-form">
                    {isSignUp && (
                        <div className="form-group">
                            <input
                                type="text"
                                id="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                                placeholder="Name"
                            />
                        </div>
                    )}
                    <div className="form-group">
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            placeholder="Email"
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            placeholder="Password"
                        />
                    </div>
                    <button type="submit" className="submit-button">
                        {isSignUp ? "Sign Up" : "Sign In"}
                    </button>
                </form>
                <p className="auth-switch">
                    {isSignUp
                        ? "Already have an account?"
                        : "Don't have an account?"}
                    <button
                        onClick={() => setIsSignUp(!isSignUp)}
                        className="switch-button"
                    >
                        {isSignUp ? "Sign In" : "Sign Up"}
                    </button>
                </p>
            </div>
        </div>
    );
}

export default AuthPage;
