import React, { useEffect } from "react";
import "./NoteCards.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

function NoteCards({ note, onClickEdit, onClickDelete }) {
	return (
		<li className="note-column">
			<div className="note-container">
				<span className="note-title">{note.title}</span>
				<p className="note-body">{note.body}</p>
				<div className="note-icons">
					<FontAwesomeIcon
						icon={faEdit}
						style={{ color: "#0059b3" }}
						onClick={onClickEdit}
					/>
					<FontAwesomeIcon
						icon={faTrash}
						style={{ color: "#d15036" }}
						onClick={onClickDelete}
					/>
				</div>
			</div>
		</li>
	);
}

export default NoteCards;
