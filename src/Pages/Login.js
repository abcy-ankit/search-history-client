import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";
import jwtDecode from "jwt-decode";
import { styles } from "./Styles";

function Login() {
    const navigate = useNavigate();
    const user = localStorage.getItem("user");

    const onSuccess = (response) => {
        const userObject = jwtDecode(response.credential);
        localStorage.setItem('user', JSON.stringify(userObject));
        localStorage.setItem('auth_token', response.credential);
        navigate("/search");
    };

    const onFailure = (response) => {
        alert("Login Failed!");
    };

    if (user) {
        return <Navigate to="/search" />;
    }

    return (
        <div style={styles.login}>
            <GoogleLogin
                onSuccess={onSuccess}
                onFailure={onFailure}
            />
        </div>
    );
}

export default Login;