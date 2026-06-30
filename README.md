# Contacts Manager

A responsive web application for managing personal contacts, built with React and utilizing JSON Server for data management.

---

## 📋 Overview

The Contacts Manager is a frontend application designed to display, view details of, and edit personal contact information. It provides a clean, user-friendly interface for managing a contact list, featuring intuitive navigation between list views, detailed contact views, and an editing form for updating contact details.

---

## ✨ Features

### Core Features

* **Contact List View**: Displays all stored contacts in an organized list with avatars.
* **Detailed View**: Access detailed information for a specific contact, including name, email, date of birth, and phone numbers.
* **Contact Editing**: Update existing contact information via a structured form.
* **Dynamic Phone Numbers**: Ability to add or remove multiple phone number entries for a single contact.
* **Search/Filter**: (Implemented in UI structure; data-backed by local JSON).

---

## 🛠 Tech Stack

| Category | Technology |
| --- | --- |
| **Frontend** | React, JavaScript |
| **UI Framework** | Material UI (MUI) |
| **State Management** | React `useState` |
| **API Client** | Axios |
| **Database/Mock API** | JSON Server |
| **Build Tool** | Create React App |

---

## 📂 Project Structure

```text
contacts/
├── public/              # Static assets (index.html, icons)
├── src/
│   ├── components/      # UI components (ContactList, EditForm, SingleContact)
│   ├── styles/          # Global styles
│   ├── App.js           # Main application component
│   ├── db.js            # Local data source
│   └── index.js         # Entry point
├── db.json              # Mock database for JSON Server
└── package.json         # Project dependencies and scripts

```

---

## 🚀 Getting Started

### Prerequisites

* Node.js (v14+)
* Yarn (recommended)

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd contacts

```


2. Install dependencies:
```bash
yarn install

```


3. Start the mock API server:
```bash
yarn database

```


4. Start the development server (in a separate terminal):
```bash
yarn start

```



---

## 💾 Database

The project uses `json-server` to mock a REST API. The data is persisted in `db.json`.

* **Base URL**: `http://localhost:8080`
* **Resource**: `/contacts`

---

## 📝 API Documentation

| Method | Endpoint | Description |
| --- | --- | --- |
| `GET` | `/contacts` | Retrieve the list of all contacts. |

---

## ⚙️ Deployment

This project can be deployed using standard React hosting services. Since it relies on a local `json-server` instance for backend functionality, for production deployment, the API calls should be updated to point to a persistent backend service (e.g., Firebase, Heroku, or a VPS).

---

## 🧪 Testing

The project is bootstrapped with `Create React App` and includes `Testing Library` for component testing.

* **Run tests**: `yarn test`

---

## 🔮 Future Improvements

* **User Authentication**: Add secure login and registration.
* **Cloud Storage**: Implement image uploads for contact avatars using services like AWS S3 or Cloudinary.
* **Validation**: Add robust form validation for phone numbers and email formats using libraries like Formik or React Hook Form.

---

## 📜 License

This project is licensed under the MIT License.

---

## 👤 Author

**Arnav Maheshwari**

---

## 💡 Acknowledgements

* [Create React App](https://github.com/facebook/create-react-app)
* [Material UI](https://mui.com/)
* [JSON Server](https://github.com/typicode/json-server)
