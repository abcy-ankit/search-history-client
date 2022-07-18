import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { GoogleOAuthProvider } from '@react-oauth/google';
import Login from "./Pages/Login";
import Search from "./Pages/Search";
import BookDetails from "./Pages/BookDetails";
import ErrorPage from "./Pages/ErrorPage";

function App() {
  return (
    <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/search" element={<Search />} />
          <Route path="/book/:bookId" element={<BookDetails />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
    </GoogleOAuthProvider>
  );
}

export default App;
