import React from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import Swal from "sweetalert2";
const Header = () => {
  const renderTime = ({ remainingTime }) => {
    if (remainingTime === 0) {
      Swal.fire({
        text: "Tebrikler",
        title: "Doğru Yanlis Sayisi",
      }).then((confirmButton) => {
        if (confirmButton.value) {
          // dispatchEvent
        }
      });
    } else {
      return (
        <div>
          {remainingTime} <br />
          <span className="text-slate-800">saniye</span>
        </div>
      );
    }
  };
  return (
    <header
      className="mx-auto container sticky top-0 bg-white shadow-md flex items-center text-center justify-center px-8 py-02"
      style={{
        background:
          "radial-gradient(circle, rgba(231,175,204,1) 8%, rgba(184,47,107,1) 15%, rgba(158,186,230,1) 81%, rgba(148,187,233,1) 91%)",
      }}
    >
      <div className="w-4/12 text-center flex flex-wrap items-center">
        <CountdownCircleTimer
          key={60}
          isPlaying={true === true ? true : false}
          duration={60}
          colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
          colorsTime={[7, 5, 2, 0]}
          size={100}
          unit="vw"
          strokeWidth={8}
        >
          {renderTime}
        </CountdownCircleTimer>
      </div>
    </header>
  );
};
export default Header;
