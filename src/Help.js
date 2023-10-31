import { Link } from "react-router-dom";
import "./Help.css";

function Help() {
  return (
    <div className="Help">
      <div className="Help-inner">
        <h1>How to Play</h1>

        <h3>Guess the Wordle in 6 Tries</h3>

        <ul>
          <li>Each guess must be a valid 5 letter word.</li>
          <li>
            The color of the tiles will change to show how close your guess was
            to the word.
          </li>
        </ul>

        <div className="Header-examples">
          <h5>Examples</h5>
          {/* weary tiles */}
          <p>
            <b>W</b> is in the word and in the correct spot.
          </p>
          <p>
            <b>I</b> is in the word and in the wrong spot.
          </p>
          <p>
            <b>U</b> is not in the word in any spot.
          </p>
        </div>

        <p>
          A new puzzle is <b>not</b> released daily at midnight. If you haven't
          already, check out my personal website to learn more about the
          developer who made this, Daniel Zych. You can also check out the
          GitHub repo here.
        </p>
      </div>
      <Link to="/" className="Header-x">
        <div>X</div>
      </Link>
    </div>
  );
}
export default Help;
