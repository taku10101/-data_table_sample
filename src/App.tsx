import { Route, Routes } from "react-router-dom";
import {
  AlertHistory,
  FileOutput,
  Home,
  InventoryTrend,
  InventoryTrend2,
  KanbanReset,
  Takeout,
} from "./route/";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/output" element={<FileOutput />} />
        <Route path="/trend" element={<InventoryTrend />} />
        <Route path="/trend2/" element={<InventoryTrend2 />} />
        <Route path="/trend/:id" element={<InventoryTrend />} />
        <Route path="/alert" element={<AlertHistory />} />
        <Route path="/takeout" element={<Takeout />} />
        <Route path="/reset" element={<KanbanReset />} />
        <Route path="*" element={<div>404</div>} />
      </Routes>
    </>
  );
}

export default App;
