# Los Tres Primos Bookstore — CoderHouse ReactJS Final Project

Web e-commerce bookstore built with React, Material UI, and Firebase/Firestore.

**Author:** Francisco Vargas — Comisión 44970

![Logo](https://coderhouse-fvd.web.app/logo192.png)

## Live Demo

🌐 **[https://coderhouse-fvd.web.app/](https://coderhouse-fvd.web.app/)**

---

## Overview

This app lets users:

- Browse all books in the store
- Filter books by category (`new`, `top`)
- Open a book detail page by ISBN
- Add or remove items in a shopping cart
- Persist cart data in the browser's local storage
- Complete checkout with buyer form validation
- Generate an order in Firestore and receive a unique Order ID
- Update product stock in Firestore automatically after purchase

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 18 + React DOM 18 |
| Build tool | Create React App (`react-scripts`) |
| Routing | `react-router-dom` v6 |
| State management | React Context API + `useState` + `localStorage` |
| UI components | MUI (`@mui/material`, `@mui/icons-material`, `@mui/lab`), `@emotion/*`, `mui-image` |
| Notifications | `react-toastify`, `sweetalert2` |
| Backend / database | Firebase + Cloud Firestore |

---

## Routes

| Path | Description |
|---|---|
| `/` | Store — all books |
| `/books/category/new` | New books |
| `/books/category/top` | Top (popular) books |
| `/books/isbn/:isbn` | Book detail by ISBN |
| `/books/author/:author` | Books by author (available, not linked in the UI yet) |
| `/cart` | Shopping cart |
| `/checkout` | Checkout |

---

## Getting Started

### Prerequisites

- Node.js (LTS recommended)
- A package manager: **npm**, **yarn**, or **pnpm**

### Install dependencies

```bash
npm install
# or
yarn install
# or
pnpm install
```

### Run in development mode

```bash
npm start
# or
yarn start
# or
pnpm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Available Scripts

Defined in `package.json`:

| Script | Description |
|---|---|
| `npm start` | Starts the development server |
| `npm run build` | Creates an optimized production build in `build/` |
| `npm test` | Runs tests in interactive watch mode |
| `npm run eject` | Ejects CRA configuration (irreversible) |

---

## Production Build

```bash
npm run build
```

The static output is generated in `build/` and is ready to be served or deployed.

---

## Environment Variables

There is currently **no `.env` file** in this repository. Firebase configuration is initialized directly in `src/index.js`.

To use environment variables instead (recommended), replace the hardcoded config values with `REACT_APP_*` variables in a `.env` file:

```
REACT_APP_FIREBASE_API_KEY=...
REACT_APP_FIREBASE_AUTH_DOMAIN=...
REACT_APP_FIREBASE_PROJECT_ID=...
REACT_APP_FIREBASE_STORAGE_BUCKET=...
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=...
REACT_APP_FIREBASE_APP_ID=...
```

> `.env.local` is already in `.gitignore`, so secrets stay out of version control.

---

## Project Structure

```
.
├── public/
│   ├── index.html
│   ├── favicon.svg
│   └── ...
├── src/
│   ├── assets/
│   │   └── img/
│   ├── components/
│   │   ├── CartContext.jsx        # Global cart state (Context API + localStorage)
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── ItemListContainer.jsx  # Fetches and filters products from Firestore
│   │   ├── ItemList.jsx
│   │   ├── Item.jsx
│   │   ├── ItemDetailContainer.jsx
│   │   ├── ItemDetail.jsx
│   │   ├── ItemDetailDescription.jsx
│   │   ├── ItemDetailFinish.jsx
│   │   ├── ItemCountAddButton.jsx
│   │   ├── Cart.jsx
│   │   ├── CartWidget.jsx
│   │   ├── Checkout.jsx           # Order creation and stock update in Firestore
│   │   ├── CheckoutBrief.jsx
│   │   ├── CheckoutSuccess.jsx
│   │   ├── Loader.jsx
│   │   └── ErrorPage.jsx
│   ├── App.js                     # Routes definition
│   ├── index.js                   # Firebase initialization + React root
│   └── index.css
├── firebase.json                  # Firebase Hosting config
├── .firebaserc                    # Firebase project alias
├── .prettierrc                    # Prettier formatting config
└── package.json
```

---

## Testing, Linting & Formatting

- **Tests:** `npm test` — uses Jest + Testing Library (CRA default setup)
- **Linting:** CRA's ESLint config is active during development, but no dedicated `lint` script is defined
- **Formatting:** `.prettierrc` is configured (2-space indent, double quotes, trailing commas); no `format` script is defined

---

## Deployment

This project is deployed to **Firebase Hosting**:

- Hosting serves the `build/` directory
- All routes are rewritten to `/index.html` for SPA compatibility (`firebase.json`)
- Firebase project: `coderhouse-fvd` (`.firebaserc`)

A **GitHub Actions workflow** (`.github/workflows/firebase-hosting-pull-request.yml`) automatically creates a Firebase preview deployment for every pull request.

### Manual deploy with Firebase CLI

```bash
npm run build
firebase deploy --only hosting
```

---

## Additional Libraries

| Library | Purpose |
|---|---|
| [sweetalert2](https://sweetalert2.github.io/) | Validation error alerts |
| [react-toastify](https://fkhadra.github.io/react-toastify/) | Action notifications (e.g. item added to cart) |
| [@mui/material](https://mui.com/) | Material UI component library |
| [@mui/lab](https://mui.com/material-ui/about-the-lab/) | Loading spinners and lab components |
| [@mui/icons-material](https://mui.com/material-ui/material-icons/) | MUI icon set |
| [mui-image](https://github.com/benmneb/mui-image) | MUI-styled image component |
