import { Route, Routes } from "react-router-dom";
import { AlertHistory } from "./route/";

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<AlertHistory />} />
      </Routes>
    </>
  );
}

export default App;
