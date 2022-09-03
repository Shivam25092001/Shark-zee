import LandingPage from './pages/LandingPage'
import SignUp from './pages/SignUp';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import NotFound from './pages/NotFound';
import LogIn from './pages/LogIn';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<LogIn />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
