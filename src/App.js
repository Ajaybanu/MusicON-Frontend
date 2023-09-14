import { BrowserRouter,Routes,Route} from 'react-router-dom'
import './App.css'
import './App.css';
import UserRoute from './routes/User';

function App() {
  return (
    <div>
    <BrowserRouter>
    <Routes>
      <Route path={'/*'} element={<UserRoute/>}/>
      </Routes>
    </BrowserRouter>
    
    </div>
  );
}

export default App;
