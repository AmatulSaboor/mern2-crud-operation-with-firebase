import { Link, useParams, useNavigate} from 'react-router-dom';
import { db } from '../config/fb-config';
import { doc, getDoc, updateDoc } from "firebase/firestore"; 
import { useEffect, useState } from 'react';

let UpdateForm = () => {
    const { id } = useParams();
    const [book, setBook] = useState({bookname: '', authorname: ''});
    const navigate = useNavigate();
    const getDataById = async () => {
        const docSnap = await getDoc(doc(db, "Books", id));
        if (docSnap.exists()) {
            setBook(docSnap.data());
        } else console.log("No such document!");
    }
    const editBook = async () => {
        console.log('in edit book');
        console.log(book);
        try {
            const docRef = doc(db, "Books", id);
            await updateDoc(docRef, {bookname:book.bookname, authorname:book.authorname});
            navigate('/');
        } catch (error) {
            console.error("Error updating document:", error);
        }
        }
    useEffect(() => {
        if (id) getDataById();    
    }, [id])
    return(
        <>
            <p>Edit Form</p>
            <form>
                <input type="text" value = {book.bookname} placeholder="enter book name" onChange={e => setBook(prevState => ({ ...prevState, bookname: e.target.value }))} /> <br />
                <input type="text" value = {book.authorname} placeholder="enter author name" onChange={e => setBook(prevState => ({ ...prevState, authorname: e.target.value }))}/> <br />
                <input type='button' onClick={editBook} value='edit book' /> <br /><br />
            </form>
            <Link to='/'>Cancel</Link>
        </>
    )
}

export default UpdateForm;