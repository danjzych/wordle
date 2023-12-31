import { useContext } from "react";
import playingContext from "../../contexts/playingContext";
import "./Alerts.css";

function Alerts({ alerts }) {
  // const [isVisible, setIsVisible] = useState(true);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setIsVisible(false);
  //   }, 1500);

  //   return () => clearTimeout(timer);
  // }, [alerts]);

  const { isPlaying } = useContext(playingContext);

  return (
    <div className="Alerts">
      {alerts.map((a, i) => (
        <h3 className={`Alerts-Alert`} key={i}>
          {a.message}
        </h3>
      ))}
    </div>
  );
}

export default Alerts;
