import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getBookDetails, placeholderUrl } from "../utils";
import { styles } from "./Styles";

function BookDetails() {
    const navigate = useNavigate();
    const { bookId } = useParams();
    const [userData, setUserData] = React.useState({});
    const [loading, setLoading] = React.useState(true);
    const [book, setBook] = React.useState({});
    const [error, setError] = React.useState("");
    const user = localStorage.getItem("user");

    React.useEffect(() => {
        if (!user) {
            navigate("/");
        } else {
            setUserData(JSON.parse(user));
        }
    }, [navigate, user]);

    React.useEffect(() => {
        getBookDetails(bookId).then(({ data }) => {
            setBook(data);
            setLoading(false);
        }).catch(({ response }) => {
            console.log(response.data);
            if (response && response.data && response.data.error) {
                setError(response.data.error.message);
            } else {
                setError("Request failed");
            }
            setLoading(false);
        });
    }, [bookId]);

    const handleLogout = () => {
        localStorage.clear();
        navigate("/");
    };

    return (
        <div>
            <div style={styles.header}>
                <p style={{ margin: 0 }}>Hello {userData.name}</p>
                <button style={styles.btn} type="button" onClick={handleLogout}>Logout</button>
            </div>
            {loading ? <p style={{ textAlign: "center" }}>Loading book details ...</p> : (
                error === "" ? (
                    <div style={styles.bookContainer}>
                        <div style={{ textAlign: "center" }}>
                            <img src={book.volumeInfo?.imageLinks?.thumbnail || `${placeholderUrl}${book.volumeInfo?.title}`} alt={book.volumeInfo?.title} />
                            <p style={{ fontWeight: 700 }}>{book.volumeInfo?.title}</p>
                            <p style={{ fontSize: 12, fontStyle: "italic" }}>{book.volumeInfo?.description}</p>
                            <p style={{ fontSize: 12 }}><span style={styles.author}>Author(s) - </span>{book.volumeInfo?.authors.join(", ")}</p>
                        </div>
                    </div>
                ) : <p style={styles.error}>{error}</p>
            )}
        </div>
    );
}

export default BookDetails;