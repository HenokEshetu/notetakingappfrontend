import React, { useEffect, useState } from "react";
import "./PopupForm.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";

function Popup({ id, onCloseClick, type, data, onFormSubmit }) {
	const [titleChanging, setTitleChanging] = useState("");
	const [bodyChanging, setBodyChanging] = useState("");
	const [isTitle, setIsTitle] = useState(type == "create" ? false : true);
	const [isBody, setIsBody] = useState(type == "create" ? false : true);

	useEffect(() => {
		setTitleChanging(data ? data.title : "");
		setBodyChanging(data ? data.body : "");
	}, []);

	return (
		<div id={id} className="popup">
			<FontAwesomeIcon
				icon={faClose}
				className="popup-close"
				onClick={onCloseClick}
			/>
			<form
				action="/"
				method="GET"
				className="form"
				onSubmit={(e) => onFormSubmit(e)}
			>
				<h2>{type == "Create" ? "New Note" : "Update Note"}</h2>
				<input
					type="text"
					name="form-title"
					id="form-title"
					className="add-note-title"
					placeholder="Title ..."
					value={titleChanging}
					onChange={(e) => {
						const val = e.target.value;
						setTitleChanging(val);
						if (val.length > 64 || val.length == 0) {
							document.getElementById("form-title").style.borderColor =
								"#cc3333";
							document.querySelector(".titleError").innerHTML = "Title must be <= 64 characters and not empty";
							setIsTitle(false);
						} else {
							document.getElementById("form-title").style.borderColor = "#bbb";
							document.querySelector(".titleError").innerHTML = "";
							setIsTitle(true);
						}
					}}
				/>
				<p className="titleError"></p>
				<textarea
					name="form-body"
					id="form-body"
					placeholder="Your note here ..."
					value={bodyChanging}
					onChange={(e) => {
						const val = e.target.value;
						setBodyChanging(val);
						if (val.length > 1000 || val.length == 0) {
							document.getElementById("form-body").style.borderColor =
								"#cc3333";
								document.querySelector(".bodyError").innerHTML = "Title must be <= 1000 characters and not empty";
							setIsBody(false);
						} else {
							document.getElementById("form-body").style.borderColor = "#bbb";
							document.querySelector(".bodyError").innerHTML = "";
							setIsBody(true);
						}
					}}
				></textarea>
				<p className="bodyError"></p>
				{isTitle && isBody && (
					<input type="submit" value={type == "Create" ? "Create" : "Update"} />
				)}
			</form>
		</div>
	);
}

export default Popup;
