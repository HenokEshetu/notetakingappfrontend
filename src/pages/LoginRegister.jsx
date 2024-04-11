import React, { useState } from "react";
import "./LoginRegister.css"; // Import the CSS file

const LoginRegister = () => {
	const [showLoginForm, setShowLoginForm] = useState(true);
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [errorMsg, setErrorMsg] = useState("");

	const handleLogin = (e) => {
		e.preventDefault();
		// Simulate login logic (replace with actual authentication)
		setErrorMsg(""); // Clear any previous errors
		console.log("Login attempted");
	};

	const handleRegister = (e) => {
		e.preventDefault();
		// Simulate registration logic (replace with actual user creation)
		if (password !== confirmPassword) {
			setErrorMsg("Passwords do not match");
		} else {
			setErrorMsg("");
			console.log("Registration successful!");
			setUsername("");
			setPassword("");
			setConfirmPassword("");
		}
	};

	const toggleForm = () => {
		setShowLoginForm(!showLoginForm);
	};

	return (
		<div className="login-register-container">
			<div className="form-container">
				<img
					src="/favicon.jpeg"
					style={{ width: "200px", height: "200px", borderRadius: "50%", position: "absolute", top: "10%", left: "45%" }}
					alt=""
				/>
				{showLoginForm ? (
					<div className="active">
						<h1>Login</h1>
						{errorMsg && <p className="error-message">{errorMsg}</p>}
						<form onSubmit={handleLogin} className="login-form-container">
							<input
								type="email"
								id="username"
								value={username}
								onChange={(e) => setUsername(e.target.value)}
								required
								placeholder="Email ..."
							/>
							<input
								type="password"
								id="password"
								value={password}
								onChange={(e) => setPassword(e.target.value)}
								required
								placeholder="Password ..."
							/>
							<div className="login-submit-container">
								<a onClick={toggleForm}>New User? Register Here</a>
								<button type="submit">Login</button>
							</div>
						</form>
					</div>
				) : (
					<div className="active">
						<h1>Register</h1>
						{errorMsg && <p className="error-message">{errorMsg}</p>}
						<form onSubmit={handleRegister} className="register-form-container">
							<input
								type="email"
								id="username"
								value={username}
								onChange={(e) => setUsername(e.target.value)}
								required
								placeholder="Email ..."
							/>
							<input
								type="password"
								id="password"
								value={password}
								onChange={(e) => setPassword(e.target.value)}
								required
								placeholder="Password ..."
							/>
							<input
								type="password"
								id="confirmPassword"
								value={confirmPassword}
								onChange={(e) => setConfirmPassword(e.target.value)}
								required
								placeholder="Confirm password ..."
							/>
							<div className="login-submit-container">
								<a href="#" onClick={toggleForm}>
									Already a User? Login Here
								</a>
								<button type="submit">Register</button>
							</div>
						</form>
					</div>
				)}
			</div>
		</div>
	);
};

export default LoginRegister;
