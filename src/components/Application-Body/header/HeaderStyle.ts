import makeStyles from "@material-ui/core/styles/makeStyles";

const dialogThemeColor = "rgb(89,89,89)";

const styles = makeStyles({
    root: {
        display: 'flex',
        justifyContent: 'space-between',
        height: '5vh'
    },
    addNewPostButton: {
        color: "white",
        backgroundColor: `${dialogThemeColor}`,
        "&:hover": {
            backgroundColor: `${dialogThemeColor}`,
        },
        "&:focus": {
            backgroundColor: `${dialogThemeColor}`,
        },
        alignSelf: "flex-end"
    },
    searchBar: {
        width: '50vw',
        fontSize: '1.3em',
        boxShadow: '6px 5px 8px 3px #ccc'
    }
});

export default styles;