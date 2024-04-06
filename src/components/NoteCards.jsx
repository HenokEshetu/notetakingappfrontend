import React, { useEffect } from "react";
import "./NoteCards.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

function NoteCards({ note, onClickUpdate, onClickDelete }) {
	return (
		<li className="note-column">
			<div className="note-container">
				<span className="note-title">{note.title}</span>
				<p className="note-body">{note.body}</p>
				<div className="note-icons">
					<FontAwesomeIcon
						icon={faEdit}
						style={{ color: "dodgerblue" }}
						onClick={onClickUpdate}
					/>
					<FontAwesomeIcon
						icon={faTrash}
						style={{ color: "tomato" }}
						onClick={onClickDelete}
					/>
				</div>
			</div>
		</li>
	);
}

export default NoteCards;
