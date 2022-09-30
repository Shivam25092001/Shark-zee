import LandingPage from './pages/LandingPage'
import SignUpInv from './pages/SignUpInv';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import NotFound from './pages/NotFound';
import LogIn from './pages/LogIn';
import SignUpStr from './pages/SignUpStr';
import StartupDashboard from './pages/StartupDashboard'
import InvestorDashboard from './pages/InvestorDashboard'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/signup-inv" element={<SignUpInv />} />
          <Route path="/signup-str" element={<SignUpStr />} />
          <Route path="/startup-dashboard" element={<StartupDashboard />} />
          <Route path="/investor-dashboard" element={<InvestorDashboard />} />
          <Route path="/login" element={<LogIn />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
