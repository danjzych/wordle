import { useEffect, useState } from "react";
import "./Alerts.css";

function Alerts({ alerts }) {
  // const [isVisible, setIsVisible] = useState(true);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setIsVisible(false);
  //   }, 1500);

  //   return () => clearTimeout(timer);
  // }, [alerts]);

  //TODO: add classes for errors
  return (
    <div
      className="Alerts"
      // style={{ visibility: isVisible ? "visible" : "hidden" }}
    >
      {alerts.map((a) => (
        <h3 className={`Alerts-Alert Alerts-${a.type}`}>{a.message}</h3>
      ))}
    </div>
  );
}

export default Alerts;
