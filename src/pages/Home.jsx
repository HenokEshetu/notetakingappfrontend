import { useEffect, useState } from "react";
import "./Home.css";
import { getUser, getUsers } from "../services/UserServices";
import {
	getNotes,
	getNotesByUserId,
	getNote,
	createNote,
	updateNote,
	deleteNote,
} from "../services/NoteServices";
import PopupForm from "../components/PopupForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { v4 as uuid } from "uuid";
import { AES } from "crypto-js";
import {
	faSignOut,
	faAdd,
	faContactCard,
	faListDots,
} from "@fortawesome/free-solid-svg-icons";
import Notes from "../components/Notes";
import DeleteVerification from "../components/DeleteVerification";

function Home() {
	const [user, setUser] = useState({
		id: "123-456-7890-123-456-789-123-456-789",
	});
	const [noteToUpdate, setNoteToUpdate] = useState({});
	const [notes, setNotes] = useState([]);
	const [addNotePopup, setAddNotePopup] = useState(false);
	const [updateNotePopup, setUpdateNotePopup] = useState(false);
	const [deleteVerificationPopup, setDeleteVerificationPopup] = useState(false);
	const [deleteId, setDeleteId] = useState("");

	useEffect(() => {
		getNotesByUserId(user.id)
			.then((notes) => {
				setNotes(notes);
				console.log(notes);
			})
			.catch((err) => {
				console.log(err);
			});
	}, [notes]);

	const onAddNoteSubmit = (e) => {
		e.preventDefault();

		const title = e.target["form-title"].value;
		const body = e.target["form-body"].value;

		createNote({ id: "" + uuid(), title: title, body: body, userId: user.id })
			.then((note) => {
				console.log(note + " created successfully");
			})
			.catch((err) => {
				console.error(err);
			});

		setAddNotePopup(false);

		document.getElementById("form-title").value = "";
		document.getElementById("form-body").value = "";
	};

	const onUpdateNoteSubmit = (e, id) => {
		e.preventDefault();

		const title = e.target["form-title"].value;
		const body = e.target["form-body"].value;

		updateNote({ id: id, title: title, body: body, userId: user.id })
			.then((note) => {
				console.log(note + " updated successfully");
			})
			.catch((err) => {
				console.error(err);
			});

		setUpdateNotePopup(false);

		document.getElementById("form-title").value = "";
		document.getElementById("form-body").value = "";
	};

	const onClickDelete = (id) => {
		deleteNote(id)
			.then((res) => {
				console.log(res);
			})
			.catch((err) => {
				console.log(err);
			});
		setDeleteVerificationPopup(false);
	};

	return (
		<div className="app">
			<ul className="sidebar">
				<li className="account-container">
					<ul className="account">
						<li className="account-item account-profile">
							<img
								src="/vite.svg"
								alt=""
								style={{
									width: "100px",
									height: "100px",
									borderRadius: "50%",
								}}
							/>
						</li>
						<li className="account-item account-name">Henok Eshetu</li>
						<li className="account-item account-logout">
							<FontAwesomeIcon icon={faSignOut} /> logout
						</li>
					</ul>
				</li>
				<span className="sidebar-items-separator-text">NOTE</span>
				<hr className="sidebar-items-separator" />
				<ul className="sidebar-items">
					<li
						className="sidebar-item add-note"
						onClick={() => setAddNotePopup(true)}
					>
						<FontAwesomeIcon icon={faAdd} /> Add Note
					</li>
					<span className="sidebar-items-separator-text" style={{ marginTop: "30px" }}>HELP</span>
					<hr className="sidebar-items-separator" />
					<li className="sidebar-item">
						<FontAwesomeIcon icon={faListDots} /> About
					</li>
					<li className="sidebar-item">
						<FontAwesomeIcon icon={faContactCard} /> Contact
					</li>
				</ul>
			</ul>
			<div className="main">
				<h1>Welcome, Henok!</h1>
				<div className="search-bar">
					<input
						type="search"
						name="search"
						id="search"
						className="search"
						placeholder="Search ..."
					/>
				</div>
				<Notes
					notes={notes}
					update={setUpdateNotePopup}
					noteToUpdate={setNoteToUpdate}
					deleteVerificationPopup={setDeleteVerificationPopup}
					deleteId={setDeleteId}
				/>
			</div>
			{addNotePopup && (
				<PopupForm
					onCloseClick={() => setAddNotePopup(false)}
					onFormSubmit={(e) => onAddNoteSubmit(e)}
					data={{}}
					type="Create"
				/>
			)}
			{updateNotePopup && (
				<PopupForm
					onCloseClick={() => setUpdateNotePopup(false)}
					onFormSubmit={(e) => onUpdateNoteSubmit(e, noteToUpdate.id)}
					data={noteToUpdate}
					type="Update"
				/>
			)}
			{deleteVerificationPopup && (
				<DeleteVerification
					deleteVerificationPopup={setDeleteVerificationPopup}
					onClickDelete={() => onClickDelete(deleteId)}
				/>
			)}
		</div>
	);
}

export default Home;
