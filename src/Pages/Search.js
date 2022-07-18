import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { saveHistory, searchGoogleBooks, placeholderUrl } from "../utils";
import { styles } from "./Styles";

function Search() {
    const navigate = useNavigate();
    const [userData, setUserData] = React.useState({});
    const [query, setQuery] = React.useState("");
    const [searchResults, setSearchResults] = React.useState(null);
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState("");
    const user = localStorage.getItem("user");

    React.useEffect(() => {
        if (!user) {
            navigate("/");
        } else {
            setUserData(JSON.parse(user));
        }
    }, [navigate, user]);

    const handleLogout = () => {
        localStorage.clear();
        navigate("/");
    };

    const handleKeydown = (event) => setQuery(event.target.value);

    const handleSearch = () => {
        if (query) {
            setLoading(true);
            setError("");
            searchGoogleBooks(query).then(({ data }) => {
                setSearchResults(data.items);
                setLoading(false);
            }).catch((error) => {
                setLoading(false);
                alert("Error while fetching google books");
            });
            saveHistory({ name: userData.name, email: userData.email, query }).then(({ data }) => {
                console.log("Saved search history");
            }).catch((error) => {
                alert("Error while saving history");
            });
        } else {
            setError("Enter valid input");
        }
    };

    return (
        <div>
            <div style={styles.header}>
                <p style={{ margin: 0 }}>Hello {userData.name}</p>
                <button style={styles.btn} type="button" onClick={handleLogout}>Logout</button>
            </div>
            <div style={{ marginTop: 30, textAlign: "center" }}>
                <input value={query} type="text" style={styles.inputField} onChange={handleKeydown} placeholder="Search book name" />
                {error !== "" && <p style={styles.error}>{error}</p>}
            </div>
            <div style={{ textAlign: "center", marginTop: 10 }}>
                <button style={styles.btn} type="button" onClick={handleSearch}>Submit</button>
            </div>
            <div style={{ marginTop: 30 }}>
                {loading ? <p style={{ textAlign: "center" }}>Please wait...</p> : (
                    searchResults && (
                        searchResults.length ? (
                            searchResults.map(book => (
                                <Link key={book.id} to={`/book/${book.id}`}>
                                    <div style={styles.resultContainer}>
                                        <img alt={book.volumeInfo?.title} src={book.volumeInfo?.imageLinks?.thumbnail || `${placeholderUrl}${book.volumeInfo?.title}`} style={styles.image} />
                                        <div style={styles.innerContainer}>
                                            <p style={{ fontWeight: 700 }}>{book.volumeInfo?.title}</p>
                                            <p style={styles.description}>{book.volumeInfo?.description}</p>
                                            <p style={{ fontSize: 12 }}><span style={styles.author}>Author(s) - </span>{book.volumeInfo?.authors}</p>
                                        </div>
                                    </div>
                                </Link>
                            ))
                        ) : <p>No results found</p>
                    )
                )}
            </div>
        </div>
    );
}

export default Search;