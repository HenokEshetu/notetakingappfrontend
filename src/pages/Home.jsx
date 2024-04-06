import { useEffect, useState } from "react";
import "./Home.css";
import { getUser, getUsers, getNotes } from "../services";
import PopupForm from "../components/PopupForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faSignOut,
	faAdd,
	faContactCard,
	faListDots,
} from "@fortawesome/free-solid-svg-icons";
import Notes from "../components/Notes";

function Home() {
	const [users, setUsers] = useState([]);
	const [notes, setNotes] = useState([]);
	const [addNotePopup, setAddNotePopup] = useState(false);
	const [updateNotePopup, setUpdateNotePopup] = useState(false);

	useEffect(() => {
		getUsers()
			.then((users) => setUsers(users))
			.catch((err) => {
				console.log(err);
			});
		getNotes()
			.then((notes) => {
				setNotes(notes);
				console.log(notes);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	const onAddNoteSubmit = () => {};

	const onUpdateNoteSubmit = () => {};

	return (
		<div className="app">
			<ul className="sidebar">
				<li className="account-container">
					<ul className="account">
						<li className="account-item account-profile">
							<img
								src=""
								alt=""
								style={{
									width: "100px",
									height: "100px",
									borderRadius: "50%",
									border: "1px solid red",
								}}
							/>
						</li>
						<li className="account-item account-name">Henok Eshetu</li>
						<li className="account-item account-logout">
							<FontAwesomeIcon icon={faSignOut} /> logout
						</li>
					</ul>
				</li>
				<span className="sidebar-items-separator-text">CATEGORIES</span>
				<hr className="sidebar-items-separator" />
				<ul className="sidebar-items">
					<li
						className="sidebar-item add-note"
						onClick={() => setAddNotePopup(true)}
					>
						<FontAwesomeIcon icon={faAdd} /> Add Note
					</li>
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
				<Notes notes={notes} update={setUpdateNotePopup} />
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
					onFormSubmit={onUpdateNoteSubmit}
					data={{}}
					type="Update"
				/>
			)}
		</div>
	);
}

export default Home;
