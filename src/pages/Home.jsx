import { useEffect, useState } from 'react'
import './Home.css'
import { getUser, getUsers, getNotes } from '../services';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOut, faAdd, faContactCard, faListDots, faEdit, faTrash, faClose } from '@fortawesome/free-solid-svg-icons';

function Home() {

	const [users, setUsers] = useState([]);
	const [notes, setNotes] = useState([]);
	const [addNotePopup, setAddNotePopup] = useState(false);

	useEffect(() => {
		getUsers()
			.then((users) => {
				setUsers(users);
			})
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
			})
	}, []);

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
							<FontAwesomeIcon icon={faSignOut} />{" "}logout
						</li>
					</ul>
				</li>
				<span className="sidebar-items-separator-text">CATEGORIES</span>
				<hr className="sidebar-items-separator" />
				<ul className="sidebar-items">
					<li className="sidebar-item add-note" onClick={() => setAddNotePopup(true)}>
						<FontAwesomeIcon icon={faAdd} />{" "}Add Note
					</li>
					<li className="sidebar-item">
						<FontAwesomeIcon icon={faListDots} />{" "}About
					</li>
					<li className="sidebar-item">
						<FontAwesomeIcon icon={faContactCard} />{" "}Contact
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
				<ul className="notes">
					{notes.map((note) => (
						<li className="note-column">
							<div className="note">
								<span className="title">{JSON.parse(note).title}</span>
								<p className="body">{JSON.parse(note).body}</p>
								<div className="note-icons">
									<FontAwesomeIcon icon={faEdit} style={{ "color": "dodgerblue" }} />
									<FontAwesomeIcon icon={faTrash} style={{ "color": "tomato" }} />
								</div>
							</div>
						</li>
					))}
				</ul>
			</div>
			{addNotePopup &&
				<div className="add-note-popup">
					<FontAwesomeIcon icon={faClose} className="add-note-close" onClick={() => setAddNotePopup(false)} />
					<form action="/" method="POST">
							<h2>New Note</h2>
							<input type="text" name="title" id="add-note-title" className="add-note-title" placeholder="Title ..." />
							<textarea name="body" id="body" placeholder="Your note here ..."></textarea>
							<input type="submit" value="Create" />
					</form>
				</div>
			}
		</div>
	);
}

export default Home;
