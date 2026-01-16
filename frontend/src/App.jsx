import { BrowserRouter, Routes, Route } from "react-router";
import TypingTutor from "./TypingTutor";

const MainTab = () => {
  return (
    <Routes>
      <Route path="/" element={TypingTutor} />
    </Routes>
  );
};

function App() {
  return (
    <>
      <BrowserRouter>
        <MainTab />
      </BrowserRouter>
    </>
  );
}

export default App;
