import {useState} from 'react';
import {db} from '../config/fb-config'
import {collection, addDoc} from 'firebase/firestore'
import {Link, useNavigate} from 'react-router-dom';

let AddForm = () => {
    const [bookName, setBookName] = useState('');
    const [authorName, setAuthorName] = useState('');
    const reset = () => {
      setBookName('')
      setAuthorName('')
    }
    const navigate = useNavigate();
    const addBook = async e => {
        e.preventDefault();
        try {
            await addDoc(collection(db, "Books"), {
              bookname: bookName,
              authorname: authorName,
            });
            reset();
            navigate('/');
          } catch (e) {
            console.error("Error adding document: ", e);
          }
    }
    return(
        <>
            <p>Form</p>
            <form>
                <input type="text" value = {bookName} placeholder="enter book name" onChange={e => setBookName(e.target.value)}/> <br />
                <input type="text" value = {authorName} placeholder="enter author name" onChange={e => setAuthorName(e.target.value)}/> <br />
                <input type='button' onClick={addBook} value='add book' /> <br /><br />
            </form>
            <Link to='/'>Show Book's List</Link>
        </>
    )
}

export default AddForm;