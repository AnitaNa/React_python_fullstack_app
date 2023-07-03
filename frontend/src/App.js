
import {
  HashRouter as Router,
  Routes,
  Route,
} from "react-router-dom";import './App.css';
import Header from './components/header'
import NotesListPage from './pages/notes-list-page';
import SingleNote from "./pages/single-note";
import './App.css';

function App() {
  return (
    <Router>
      <div className="container dark">
        <div className='app'>
      <Header />
      <Routes>
       <Route path='/' exact Component={NotesListPage} />
       <Route path='/note/:id' Component={SingleNote} />
      </Routes>
      </div>
      </div>
    </Router>
  );
}

export default App;
