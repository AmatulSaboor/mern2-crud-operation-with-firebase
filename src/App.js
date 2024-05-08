import './App.css';
import { useEffect, useState } from "react";
import { db } from '../src/config/fb-config'
import { collection, getDocs } from "firebase/firestore"; 
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ShowList from '../src/components/ShowList';
import AddForm from './components/AddForm';
function App() {

  const [booksList, setBooksList] = useState([]);
  const getData =  async () => {
    const querySnapshot = await getDocs(collection(db, "Books"));
    console.log(querySnapshot)
    setBooksList(querySnapshot.docs);
  }
  useEffect(() => {
    getData();
  }, [])
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<ShowList booksList={booksList} setBooksList={setBooksList}/>} /> 
            <Route path='/addbook' element={<AddForm booksList={booksList} setBooksList={setBooksList}/>} /> 
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
