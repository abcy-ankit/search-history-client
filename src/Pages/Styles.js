export const styles = {
    header: {
        display: "flex",
        justifyContent: "space-between",
        padding: 20,
        backgroundColor: "#f3f3f3",
        alignItems: "center"
    },
    inputField: {
        padding: "10px 15px",
        border: "1px solid #ccc",
        borderRadius: 4,
        textAlign: "center",
        width: 320
    },
    author: { fontStyle: "italic", fontWeight: 600 },
    login: { display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" },
    btn: {
        width: 150,
        height: 30,
        background: "#c94b07",
        borderRadius: 2,
        border: "1px solid black",
        color: "#FFF",
        cursor: "pointer",
        fontSize: 12
    },
    resultContainer: {
        borderRadius: 6,
        border: "1px dashed silver",
        margin: 20,
        display: "flex",
        overflow: "hidden"
    },
    innerContainer: {
        width: "100%",
        marginLeft: 20,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around"
    },
    error: {
        margin: 0,
        marginTop: 5,
        fontSize: 12,
        color: "red",
        textAlign: "center"
    },
    description: {
        fontSize: 12,
        fontStyle: "italic",
        overflow: "hidden",
        textOverflow: "ellipsis",
        display: "-webkit-box",
        WebkitLineClamp: 3,
        lineClamp: 3,
        WebkitBoxOrient: "vertical"
    },
    bookContainer: {
        margin: 20,
        borderRadius: 6,
        border: "1px dashed silver", 
        padding: 10
    }
};