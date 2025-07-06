# 📝 Note Taking App Frontend

A modern, elegant, and expressive note-taking web application built with **React** and **Vite**. This project provides a seamless user experience for creating, editing, searching, and managing notes, with robust authentication and a beautiful UI.

---

## ✨ Features

- **User Authentication**: Secure registration and login with JWT-based authentication.
- **Personalized Notes**: Each user can create, update, and delete their own notes.
- **Live Search**: Instantly filter notes as you type.
- **Responsive Design**: Fully responsive layout for desktop and mobile.
- **Elegant UI**: Clean, modern interface with expressive feedback and popups.
- **RESTful API Integration**: Communicates with a backend API for all data operations.
- **Popup Modals**: For note creation, editing, deletion confirmation, and user feedback.
- **Accessibility**: Keyboard navigable and accessible color contrast.

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16+ recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/notetakingappfrontend.git
   cd notetakingappfrontend
   ```

2. **Install dependencies:**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server:**

   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open in your browser:**
   ```
   http://localhost:5173
   ```

> **Note:** The frontend expects a backend API running at `http://localhost:8012/api/v1/`. Adjust the API URLs in `/src/services/` if your backend runs elsewhere.

---

## 🖥️ Project Structure

```
src/
  components/      # Reusable UI components (popups, notes, etc.)
  pages/           # Main page components (Home, Login/Register)
  services/        # API service modules (UserServices, NoteServices)
  App.jsx          # Main app router
  main.jsx         # Entry point
  index.css        # Global styles
public/
  fav2.jpeg        # App logo and assets
```

---

## 🛠️ Usage

- **Register**: Create a new account with a valid email and strong password.
- **Login**: Access your notes securely.
- **Add Note**: Click "Add Note" to create a new note.
- **Edit/Delete**: Use the icons on each note card to update or remove notes.
- **Search**: Use the search bar to filter your notes in real time.
- **Logout**: Securely end your session from the sidebar.

---

## 🧩 Tech Stack

- **Frontend**: [React](https://react.dev/), [Vite](https://vitejs.dev/)
- **UI**: CSS3, [FontAwesome](https://fontawesome.com/)
- **State Management**: React Hooks
- **HTTP Client**: [Axios](https://axios-http.com/)
- **Authentication**: JWT (via backend)
- **Cookies**: [js-cookie](https://github.com/js-cookie/js-cookie)

---

## 🤝 Contributing

Contributions are welcome! Please open issues and submit pull requests for improvements or bug fixes.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/YourFeature`)
3. Commit your changes (`git commit -am 'Add new feature'`)
4. Push to the branch (`git push origin feature/YourFeature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

## 🙏 Acknowledgements

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [FontAwesome](https://fontawesome.com/)
- [Axios](https://axios-http.com/)
- All contributors and open-source libraries

---

> Crafted with ❤️ for productivity and simplicity.
