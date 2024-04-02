import { useEffect, useState } from 'react'
import './App.css'
import { getUser, getUsers } from './services';

function App() {

  const notes = [
    {
      "title": "Title 1",
      "body": "lorem ipsum dolor sit amet, consectetur adipiscing"
    },
    {
      "title": "Title 2",
      "body": "lorem ipsum dolor sit amet, consectetur adipiscing"
    },
    {
      "title": "Title 3",
      "body": "lorem ipsum dolor sit amet, consectetur adipiscing"
    },
    {
      "title": "Title 4",
      "body": "lorem ipsum dolor sit amet, consectetur adipiscing"
    },
    {
      "title": "Title 5",
      "body": "lorem ipsum dolor sit amet, consectetur adipiscing"
    },
  ];

  const [value, setValue] = useState("");

  useEffect(() => {
    getUser(10).then((value) => {
      setValue(value);
    }).catch((err) => {
      console.log(err);
    });
  }, [])
  

  return (
    <div className="app">
      <ul className="sidebar">
        <li className="account-container">
          <ul className="account">
            <li className="account-item account-profile">
              <img src="" alt="" style={{ "width": "100px", "height": "100px", "borderRadius": "50%", "border": "1px solid red" }} />
            </li>
            <li className="account-item account-name">Henok Eshetu</li>
            <li className="account-item account-logout">logout</li>
          </ul>
        </li>
        <li className="sidebar-item add-note">+ Add Note</li>
        <li className="sidebar-item">About</li>
        <li className="sidebar-item">Contact</li>
      </ul>
      <div className="main">
        <h1>Welcome, Henok!</h1>
        <div className="search-bar">
          <input type="search" name="search" id="search" className="search" placeholder="Search ..." />
        </div>
        <ul className="notes">
          {notes.map(note => (
            <li className="note-column">
              <div className="note">
                <span className="title">{note.title}</span>
                <p className="body">{note.body}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default App
