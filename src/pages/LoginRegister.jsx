import React, { useRef, useState } from "react";
import "./LoginRegister.css";
import { createUser, login } from "../services/UserServices";
import Cookies from "js-cookie";
import SuccessPopup from "../components/SuccessPopup";
import FailurePopup from "../components/FailurePopup";

const LoginRegister = () => {
	const [showLoginForm, setShowLoginForm] = useState(true);
	const [fullName, setFullName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");

	const [isEmail, setIsEmail] = useState(false);
	const [isPassword, setIsPassword] = useState(false);
	const [isFullName, setIsFullName] = useState(false);
	const [isConfirm, setIsConfirm] = useState(false);

	const [successPopup, setSuccessPopup] = useState(false);
	const [signinErrorPopup, setSigninErrorPopup] = useState(false);

	const validatePassword = (password) => {
		const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W)[^\s]{8,}$/;
		return passwordPattern.test(password);
	};

	const validateEmail = (email) => {
		const emailPattern =
			/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
		return emailPattern.test(email);
	};

	const validateText = (text) => {
		const alphabetPattern = /^[a-zA-Z ]+$/;
		return alphabetPattern.test(text);
	};

	const toggleForm = () => {
		setShowLoginForm(!showLoginForm);
	};

	const onCreateUser = (e) => {
		e.preventDefault();
		const user = {
			fullName: fullName,
			email: email,
			password: password,
		};

		createUser(user)
			.then((user) => setSuccessPopup(true))
			.catch((err) => console.log(err));

		setFullName("");
		setEmail("");
		setPassword("");
		setConfirmPassword("");
	};

	const handleLogin = (e) => {
		e.preventDefault();
		login(email, password)
			.then((token) => {
				Cookies.set("accessToken", token, { expires: 1, secure: true });
				Cookies.set("email", email, { expires: 1, secure: true });
				document.location.href = "http://localhost:5173/home";
			})
			.catch((err) => setSigninErrorPopup(true));
		setEmail("");
		setPassword("");
	};

	return (
		<div className="login-register-container">
			<div className="form-container">
				<img
					src="/fav2.jpeg"
					style={{
						width: "200px",
						height: "200px",
						borderRadius: "50%",
						position: "absolute",
						top: "7%",
						left: "45%",
					}}
					alt=""
				/>
				{showLoginForm ? (
					<div className="active">
						<h1>Login</h1>
						<form
							action="#"
							onSubmit={handleLogin}
							className="login-form-container"
						>
							<input
								type="email"
								id="email"
								value={email}
								onChange={(e) => {
									const val = e.target.value;
									setEmail(val);
									if (!validateEmail(val)) {
										document.getElementById("email").style.borderColor =
											"#cc3333";
										document.querySelector(".emailError").innerHTML =
											"Please enter a valid email address.";
										setIsEmail(false);
									} else {
										document.getElementById("email").style.borderColor = "#ccc";
										document.querySelector(".emailError").innerHTML = "";
										setIsEmail(true);
									}
								}}
								required
								placeholder="Email ..."
							/>
							<p className="emailError error-message"></p>
							<input
								type="password"
								id="password"
								value={password}
								onChange={(e) => {
									const val = e.target.value;
									setPassword(val);
									if (val === "") {
										document.getElementById("password").style.borderColor =
											"#cc3333";
										document.querySelector(".passwordError").innerHTML =
											"Please Enter a password.";
										setIsPassword(false);
									} else {
										document.getElementById("password").style.borderColor =
											"#ccc";
										document.querySelector(".passwordError").innerHTML = "";
										setIsPassword(true);
									}
								}}
								required
								placeholder="Password ..."
							/>
							<p className="passwordError error-message"></p>
							<div className="login-submit-container">
								<a onClick={toggleForm}>New User? Register Here</a>
								{isPassword && isEmail && <button type="submit">Login</button>}
							</div>
						</form>
					</div>
				) : (
					<div className="active">
						<h1>Register</h1>
						<form
							action=""
							className="register-form-container"
							onSubmit={onCreateUser}
						>
							<input
								type="text"
								id="fullName"
								name="fullName"
								value={fullName}
								onChange={(e) => {
									const val = e.target.value;
									setFullName(val);
									if (!validateText(val)) {
										document.getElementById("fullName").style.borderColor =
											"#cc3333";
										document.querySelector(".fullNameError").innerHTML =
											"Only alphabetic characters are allowed.";
										setIsFullName(false);
									} else {
										document.getElementById("fullName").style.borderColor =
											"#ccc";
										document.querySelector(".fullNameError").innerHTML = "";
										setIsFullName(true);
									}
								}}
								required
								placeholder="Full name ..."
							/>
							<p className="fullNameError error-message"></p>
							<input
								type="email"
								id="email"
								name="email"
								value={email}
								onChange={(e) => {
									const val = e.target.value;
									setEmail(val);
									if (!validateEmail(val)) {
										document.getElementById("email").style.borderColor =
											"#cc3333";
										document.querySelector(".emailError").innerHTML =
											"Enter a valid email address.";
										setIsEmail(false);
									} else {
										document.getElementById("email").style.borderColor = "#ccc";
										document.querySelector(".emailError").innerHTML = "";
										setIsEmail(true);
									}
								}}
								required
								placeholder="Email ..."
							/>
							<p className="emailError error-message"></p>
							<input
								type="password"
								id="password"
								name="password"
								value={password}
								onChange={(e) => {
									const val = e.target.value;
									setPassword(val);
									if (!validatePassword(val)) {
										document.getElementById("password").style.borderColor =
											"#cc3333";
										document.querySelector(".passwordError").innerHTML =
											"Password must contain at least one uppercase letter, lowercase letter, number, and special character (minimum 8 characters).";
										setIsPassword(false);
									} else {
										document.getElementById("password").style.borderColor =
											"#ccc";
										document.querySelector(".passwordError").innerHTML = "";
										setIsPassword(true);
									}
								}}
								required
								placeholder="Password ..."
							/>
							<p className="passwordError error-message"></p>
							<input
								type="password"
								id="confirmPassword"
								value={confirmPassword}
								onChange={(e) => {
									const val = e.target.value;
									setConfirmPassword(val);
									if (val !== password) {
										document.getElementById(
											"confirmPassword"
										).style.borderColor = "#cc3333";
										document.querySelector(".confirmPasswordError").innerHTML =
											"Confirm the password correctly.";
										setIsConfirm(false);
									} else {
										document.getElementById(
											"confirmPassword"
										).style.borderColor = "#ccc";
										document.querySelector(".confirmPasswordError").innerHTML =
											"";
										setIsConfirm(true);
									}
								}}
								required
								placeholder="Confirm password ..."
							/>
							<p className="confirmPasswordError error-message"></p>
							<div className="login-submit-container">
								<a href="#" onClick={toggleForm}>
									Already a User? Login Here
								</a>
								{isPassword && isEmail && isFullName && isConfirm && (
									<button type="submit">Register</button>
								)}
							</div>
						</form>
					</div>
				)}
			</div>
			{signinErrorPopup && (
				<FailurePopup
					title="Login Error"
					message1="Your credentials doesn't match"
					message2="Please enter a valid login credential!"
					onClickOk={() => setSigninErrorPopup(false)}
				/>
			)}
			{successPopup && (
				<SuccessPopup
					title="Registration Success"
					message1="You created"
					message2="Your account successfully!"
					onClickOk={() => {
						setSuccessPopup(false);
						window.location.href = "http://localhost:5173/";
					}}
				/>
			)}
		</div>
	);
};

export default LoginRegister;
