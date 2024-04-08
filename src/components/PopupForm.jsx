import React, { useEffect, useState } from "react";
import "./PopupForm.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";

function Popup({ id, onCloseClick, type, data, onFormSubmit }) {

	const [titleChanging, setTitleChanging] = useState("");
	const [bodyChanging, setBodyChanging] = useState("");

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
					onChange={(e) => setTitleChanging(e.value)}
				/>
				<textarea
					name="form-body"
					id="form-body"
					placeholder="Your note here ..."
					value={bodyChanging}
					onChange={(e) => setBodyChanging(e.value)}
				></textarea>
				<input type="submit" value={type == "Create" ? "Create" : "Update"} />
			</form>
		</div>
	);
}

export default Popup;
