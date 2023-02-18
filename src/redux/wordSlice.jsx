import { createSlice } from "@reduxjs/toolkit";
import wordse from "../data"

export const formul=(array)=>{
    let currentIndex= array.length
    let randomIndex

    while(currentIndex !== 0){
        randomIndex=Math.floor(Math.random() * currentIndex)
        currentIndex--

        [array[currentIndex], array[randomIndex]] = [
          array[randomIndex],
          array[currentIndex],
        ];
    }
return array
}

export const wordSlice = createSlice({
  name: "language",
  initialState: {
    word: formul(wordse),
    lang: ["turkishWord", "englishWord"],
    selectedLang: "",
    inputText: "",
    correctWord: 0,
    wrongWord: 0,
    wordIndex: 0,
    time: 60,
    start: false,
  },
  reducers: {
    setDecreaseTime: (state) => {
      state.time--;
    },
    setSelectedLang: (state, action) => {
      const langFind = state.lang.find((item) => item === action.payload);
      state.selectedLang = langFind;
    },
    setGameStart: (state) => {
      state.start = true;
    },
    setInputText: (state, action) => {
      const text = action.payload.trim();
      if (text) {
        state.inputText = action.payload;
      } else {
        state.inputText = "";
      }
    },
    setKeyPress: (state) => {
      const currentText = state.word[state.wordIndex];

      if (
        state.inputText.trim() === currentText.turkishWord ||
        state.inputText.trim() === currentText.englishWord
      ) {
        state.correctWord++;
        currentText.status = "correct";
        console.log(state.inputText)
      } else {
        state.wrongWord++;
        currentText.status = "wrong";
      }
      state.wordIndex++;
      state.inputText = "";
    },
    setReplay: (state) => {
      console.log("setReplay");
      state.inputText = "";
      state.correctWord = 0;
      state.wrongWord = 0;
      state.time = 60;
      state.word = formul(state.word);
      state.wordIndex = 0;
      state.start = false;
    },
  },
});

export const {
  setSelectedLang,
  setInputText,
  setKeyPress,
  setReplay,
  setDecreaseTime,
  setGameStart,
} = wordSlice.actions;

export default wordSlice.reducer;