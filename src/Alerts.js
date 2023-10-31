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

  return (
    <div className="Alerts">
      {alerts.map((a, i) => (
        <h3 className={`Alerts-Alert Alerts-${a.type}`} key={i}>
          {a.message}
        </h3>
      ))}
    </div>
  );
}

export default Alerts;
