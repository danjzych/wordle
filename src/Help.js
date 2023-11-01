import { Link } from "react-router-dom";
import Row from "./Row";
import "./Help.css";

//TODO: improve animations and style of cells within page.

const helpRows = [
  [
    { letter: "R", status: "correct" },
    { letter: "E", status: "" },
    { letter: "A", status: "" },
    { letter: "C", status: "" },
    { letter: "T", status: "" },
  ],
  [
    { letter: "P", status: "" },
    { letter: "I", status: "partial" },
    { letter: "L", status: "" },
    { letter: "L", status: "" },
    { letter: "S", status: "" },
  ],
  [
    { letter: "V", status: "" },
    { letter: "A", status: "" },
    { letter: "G", status: "" },
    { letter: "U", status: "incorrect" },
    { letter: "E", status: "" },
  ],
];

function Help() {
  return (
    <div className="Help">
      <div className="Help-inner">
        <div>
          <h1>How to Play</h1>

          <h3>Guess the Wordle in 6 Tries</h3>
        </div>

        <ul>
          <li>Each guess must be a valid 5 letter word.</li>
          <li>
            The color of the tiles will change to show how close your guess was
            to the word.
          </li>
        </ul>

        <div className="Help-examples">
          <h4>Examples</h4>
          <div>
            <Row row={helpRows[0]} />
            <p>
              <b>R</b> is in the word and in the correct spot.
            </p>
          </div>
          <div>
            <Row row={helpRows[1]} />
            <p>
              <b>I</b> is in the word and in the wrong spot.
            </p>
          </div>
          <div>
            <Row row={helpRows[2]} />
            <p>
              <b>U</b> is not in the word in any spot.
            </p>
          </div>
        </div>

        <p>
          A new puzzle is <b>not</b> released daily at midnight. If you haven't
          already, check out my{" "}
          <a href="http://www.danielzych.com" target="_blank">
            personal website
          </a>{" "}
          to learn more about the developer who made this, Daniel Zych. You can
          also check out the GitHub repo{" "}
          <a href="https://github.com/danjzych/wordle" target="_blank">
            here
          </a>
          .
        </p>
      </div>
      <Link to="/" className="Help-x">
        <div>X</div>
      </Link>
    </div>
  );
}
export default Help;
