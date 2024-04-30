import React from "react";
import NoteCards from "./NoteCards";
import "./Notes.css";
import { deleteNote } from "../services/NoteServices";

function Notes({
	notes,
	update,
	noteToUpdate,
	deleteVerificationPopup,
	deleteId,
}) {
	return (
		<ul className="notes">
			{notes.map((note) => (
				<NoteCards
					note={note}
					onClickEdit={() => {
						update(true);
						noteToUpdate(note);
					}}
					onClickDelete={() => {
						deleteId(note.noteId);
						deleteVerificationPopup(true);
					}}
				/>
			))}
		</ul>
	);
}

export default Notes;
