import { BrowserRouter, Routes, Route } from "react-router";
import TypingTutor from "./TypingTutor";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/Thataan" element={TypingTutor} />
          <Route path="/" element={TypingTutor} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
