import { makeStyles } from "@material-ui/core";

const SelectButton = ({ children, selected, onClick }) => {
  const useStyles = makeStyles({
    selectbutton: {
      border: "1px solid #74ff9e",
      borderRadius: 5,
      padding: 10,
      fontFamily: "Montserrat",
      cursor: "pointer",
      backgroundColor: selected ? "#74ff9e" : "",
      color: selected ? "black" : "",
      fontWeight: selected ? 700 : 500,
      "&:hover": {
        backgroundColor: "#74ff9e",
        color: "black",
      },
      width: "23%",
      textAlign: "center",
    },
  });

  const classes = useStyles();

  return (
    <span onClick={onClick} className={classes.selectbutton}>
      {children}
    </span>
  );
};

export default SelectButton;
