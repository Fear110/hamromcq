import './App.css';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import QuestionBankPage from './pages/QuestionBankPage';
import HallPage from './pages/HallPage';
import ExamPage from './pages/ExamPage';
import ContactUsPage from './pages/ContactUsPage';

function App() {
  return (
    <div className="main">
      <Navbar />
      <div className="pages-container">
        <Routes>
          <Route
            exact
            path="/"
            element={<HomePage />}
          />
          <Route
            exact
            path="/question-bank"
            element={<QuestionBankPage />}
          />
          <Route
            exact
            path="/halls"
            element={<HallPage />}
          />
          <Route
            exact
            path="/exam"
            element={<ExamPage />}
          />
          <Route
            exact
            path="/contact-us"
            element={<ContactUsPage />}
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
