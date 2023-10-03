import WorkPayCal from './WorkPayCal';
import './App.css';
import { Route, Routes,BrowserRouter} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <h1>Testing</h1>
      <Routes>
        <Route path="/:testValue" element={<WorkPayCal/>}/>
      </Routes>
    </div>
    </BrowserRouter>

  );
}

export default App;
