import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ShowList from '../src/components/ShowList';
import AddForm from './components/AddForm';
import EditForm from './components/EditForm';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<ShowList />} /> 
            <Route path='/addbook' element={<AddForm />} /> 
            <Route path='/:id/editbook' element={<EditForm />} /> 
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
