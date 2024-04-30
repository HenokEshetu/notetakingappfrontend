import React, { useEffect } from "react";
import "./NoteCards.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";

function NoteCards({ note, onClickEdit, onClickDelete }) {
	return (
		<li className="note-column" key={note.id}>
			<div className="note-container">
				<span className="note-title">{note.title}</span>
				<p className="note-body">{note.body}</p>
				<div className="note-icons">
					<div className="note-icon-container" onClick={onClickEdit}>
						<FontAwesomeIcon icon={faEdit} />
					</div>
					<div className="note-icon-container" onClick={onClickDelete}>
						<FontAwesomeIcon icon={faTrash} />
					</div>
				</div>
			</div>
		</li>
	);
}

export default NoteCards;
