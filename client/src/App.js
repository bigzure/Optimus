// import logo from './logo.svg';
import "./App.css";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/">
          <Route index={true} element={<p>1</p>} />
          <Route index={false} path=":teamId" element={<p>2</p>} />
          <Route index={false} path="new" element={<p>3</p>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
