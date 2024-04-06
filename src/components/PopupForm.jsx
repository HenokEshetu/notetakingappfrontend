import React, { useState } from 'react'
import "./PopupForm.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';

function Popup({ onCloseClick, type, data, onFormSubmit }) {
	return (
		<div className="popup">
			<FontAwesomeIcon icon={faClose} className="popup-close" onClick={onCloseClick} />
			<form action="/" method="GET" className="form" onSubmit={onFormSubmit}>
				<h2>{type == "Create" ? "New Note" : "Update Note"}</h2>
				<input type="text" name="form-title" id="form-title" className="add-note-title" placeholder="Title ..." />
				<textarea name="form-body" id="form-body" placeholder="Your note here ..."></textarea>
				<input type="submit" value={type == "Create" ? "Create" : "Update"} />
			</form>
		</div>
	)
}

export default Popup
