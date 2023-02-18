import React from 'react'
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import Swal from 'sweetalert2';
import { MdOutlineRestartAlt } from "react-icons/md";
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { setReplay, setSelectedLang } from '../redux/wordSlice';

const Select = styled.select`
  width: 100px;
  height: 35px;
  color: gray;
  padding-left: 5px;
  font-size: 14px;
  border: none;
  margin-right: 1rem;

  option {
    color: black;
    display: flex;
    white-space: pre;
    min-height: 20px;
    padding: 0px 2px 1px;
  }
`;
const Baslik = styled.h1`
  color: #35b8ad;
  font-weight: bold;
  font-size: 2rem;
`;
const TimerWrapper = styled.div`
  /* position: absolute; */
  width: 10px;
  /* top: 27%;
  left: 17%; */
  /* transform: translate(-50%, -50%); */
`;




const Header = () => {
  const dispatch = useDispatch();
const time = useSelector((state) => state.language.time);
const start = useSelector((state) => state.language.start);
const wrongWord = useSelector((state) => state.language.wrongWord);
const correctWord = useSelector((state) => state.language.correctWord);
const selectedLang = useSelector((state) => state.language.selectedLang);

const renderTime=({remainingTime})=>{
   if (remainingTime === 0) {
     Swal.fire({
       text: `${correctWord > 30 ? "Tebrikler!" : "Tekrar Dene!"}`,
       title: `✅ ${correctWord} 🚫 ${wrongWord}`,
     }).then((confirmButton) => {
       if (confirmButton.value) {
         dispatch(setReplay());
       }
     });
   } else {
     return (
       <div>
         {remainingTime} <br />
         <span className="text-slate-800"> saniye</span>
       </div>
     );
   }
}
  const handleChange = (e) => {
    console.log(e.target.value);
    dispatch(setSelectedLang(e.target.value));
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
          key={time}
          isPlaying={start === true ? true : false}
          duration={time}
          colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
          colorsTime={[7, 5, 2, 0]}
          size={100}
          unit="vw"
          strokeWidth={8}
        >
          {renderTime}
        </CountdownCircleTimer>
      </div>
      <div className="w-4/12 ">
        <nav className="nav font-semibold text-lg">
          <Baslik>Ne Kadar Hızlısın?</Baslik>
        </nav>
      </div>
      <div className="w-4/12 flex justify-end">
        <Select name="Lang" onChange={handleChange}>
          <option value="turkishWord" disabled={selectedLang === "turkishWord"}>
            Türkçe
          </option>
          <option value="englishWord" disabled={selectedLang === "englishWord"}>
            İngilizce
          </option>
        </Select>

        <button onClick={() => dispatch(setReplay())}>
          <MdOutlineRestartAlt size={40} className="animas" />
        </button>
      </div>
    </header>
  );
}

export default Header