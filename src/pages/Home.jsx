import { useEffect, useRef, useState } from "react";
import "./Home.css";
import { getUserByEmail, getUsers } from "../services/UserServices";
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
// import { v4 as uuid } from "uuid";
import { AES } from "crypto-js";
import {
	faSignOut,
	faAdd,
	faContactCard,
	faListDots,
} from "@fortawesome/free-solid-svg-icons";
import Notes from "../components/Notes";
import DeleteVerification from "../components/DeleteVerification";
import Cookies from "js-cookie";
import AboutPopup from "../components/AboutPopup";
import ContactPopup from "../components/ContactPopup";

function Home() {
	const [user, setUser] = useState({});
	const [noteToUpdate, setNoteToUpdate] = useState({});
	const [notes, setNotes] = useState([]);
	const [addNotePopup, setAddNotePopup] = useState(false);
	const [updateNotePopup, setUpdateNotePopup] = useState(false);
	const [deleteVerificationPopup, setDeleteVerificationPopup] = useState(false);
	const [deleteId, setDeleteId] = useState("");

	const [about, showAbout] = useState(false);
	const [contact, showContact] = useState(false);

	useEffect(() => {
		const email = Cookies.get("email");
		getUserByEmail(email)
			.then((_user) => {
				console.log(_user);
				setUser(_user);
			})
			.catch((err) => console.log(err));
	}, []);

	useEffect(() => {
		if (user) {
			getNotesByUserId(user.id)
				.then((notes) => {
					setNotes(notes);
					console.log(notes);
				})
				.catch((err) => {
					console.log(err);
				});
		}
	}, [notes]);

	const onAddNoteSubmit = (e) => {
		e.preventDefault();

		const title = e.target["form-title"].value;
		const body = e.target["form-body"].value;

		const note = {
			title: title,
			body: body,
			userId: user.id,
		};

		createNote(note)
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

		const note = {
			noteId: id,
			title: title,
			body: body,
			userId: user.id,
		};

		updateNote(note)
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

	const onClickDelete = (e, id) => {
		e.preventDefault();
		deleteNote(id)
			.then((res) => {
				console.log(res);
			})
			.catch((err) => {
				console.log(err);
			});
		setDeleteVerificationPopup(false);
	};

	const onSearch = (e) => {
		e.preventDefault();
		const val = e.target.value;
		const _notes = [];
		notes.map((note) => {
			if (JSON.stringify(note).includes(val)) {
				_notes.push(note);
			}
		});
		setNotes(_notes);
		if (val === "") {
			if (user) {
				getNotesByUserId(user.id)
					.then((notes) => {
						setNotes(notes);
						console.log(notes);
					})
					.catch((err) => {
						console.log(err);
					});
			}
		}
	};

	return (
		<div className="app">
			<ul className="sidebar">
				<li className="account-container">
					<ul className="account">
						<li className="account-item account-profile">
							<img
								src="/favicon.jpeg"
								alt=""
								style={{
									width: "100px",
									height: "100px",
									borderRadius: "50%",
								}}
								// onClick={showProfile}
							/>
						</li>
						<div className="account-item account-email">{user.email}</div>
						<li className="account-item account-name">{user.fullName}</li>
						<li
							className="account-item account-logout"
							onClick={() => {
								Cookies.remove("accessToken");
								Cookies.remove("email");
								document.location.href = "http://localhost:5173/";
							}}
						>
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
					<span
						className="sidebar-items-separator-text"
						style={{ marginTop: "30px" }}
					>
						HELP
					</span>
					<hr className="sidebar-items-separator" />
					<li className="sidebar-item" onClick={() => showAbout(true)}>
						<FontAwesomeIcon icon={faListDots} /> About
					</li>
					<li className="sidebar-item" onClick={() => showContact(true)}>
						<FontAwesomeIcon icon={faContactCard} /> Contact
					</li>
				</ul>
			</ul>
			<div className="main">
				<h1>Welcome, {user.fullName}!</h1>
				<div className="search-bar">
					<input
						type="search"
						name="search"
						id="search"
						className="search"
						placeholder="Search ..."
						onChange={onSearch}
					/>
				</div>
				{notes.length != 0 ? (
					<Notes
						notes={notes}
						update={setUpdateNotePopup}
						noteToUpdate={setNoteToUpdate}
						deleteVerificationPopup={setDeleteVerificationPopup}
						deleteId={setDeleteId}
					/>
				) : (
					<p
						style={{
							width: "100%",
							height: "100%",
							textAlign: "center",
							paddingTop: "20%",
							fontSize: "100px",
						}}
					>
						The note is Empty!
					</p>
				)}
			</div>
			{addNotePopup && (
				<PopupForm
					onCloseClick={() => setAddNotePopup(false)}
					onFormSubmit={onAddNoteSubmit}
					data={{}}
					type="Create"
				/>
			)}
			{updateNotePopup && (
				<PopupForm
					onCloseClick={() => setUpdateNotePopup(false)}
					onFormSubmit={(e) => onUpdateNoteSubmit(e, noteToUpdate.noteId)}
					data={noteToUpdate}
					type="Update"
				/>
			)}
			{deleteVerificationPopup && (
				<DeleteVerification
					deleteVerificationPopup={setDeleteVerificationPopup}
					onClickDelete={(e) => onClickDelete(e, deleteId)}
				/>
			)}
			{about && <AboutPopup onCloseClick={() => showAbout(false)} />}
			{contact && <ContactPopup onCloseClick={() => showContact(false)} />}
		</div>
	);
}

export default Home;
