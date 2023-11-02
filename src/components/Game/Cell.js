import "./Cell.css";

function Cell({ letter }) {
  const classes = ["Cell"];
  classes.push(letter.status === undefined ? "empty" : letter.status);

  return <td className={classes.join(" ")}>{letter.letter}</td>;
}

export default Cell;
