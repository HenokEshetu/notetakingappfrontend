import React from "react";
import NoteCards from "./NoteCards";
import "./Notes.css";

function Notes({ notes, update }) {
	return (
		<ul className="notes">
			{notes.map((note) => (
				<NoteCards
					note={{ "title": JSON.parse(note).title, "body": JSON.parse(note).body }}
					onClickUpdate={() => update(true)}
					onClickDelete={() => console.log("Deleting ...")}
				/>
			))}
		</ul>
	);
}

export default Notes;
