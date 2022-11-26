
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Ballonblock from './components/Ballonblock';

function App() {
  return (
    <>
       <BrowserRouter>
      <Routes>
        <Route path="/" element={<Ballonblock />} />
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
