import { doc, deleteDoc } from "firebase/firestore";
import {db} from '../config/fb-config'
import {Link } from 'react-router-dom';
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore"; 

let ShowList = () => {
    const [booksList, setBooksList] = useState([]);
  const getData =  async () => {
    const querySnapshot = await getDocs(collection(db, "Books"));
    setBooksList(querySnapshot.docs);
  }
  useEffect(() => {
    getData();
  }, [])
    const handleDelete = async (id) => {
        await deleteDoc(doc(db, "Books", id))
        .then(() => {
            setBooksList(booksList.filter(i => i.id !== id))
        })
        .catch(e => console.log(e));}
    return(
        <>
            <Link to='addbook'>Add New Book</Link>
            This is book's list
            <table style={{border:"1px solid white"}}>
                <thead><tr>
                    <th>Book Name</th>
                    <th>Author Name</th>
                    <th>delete</th>
                    <th>edit</th></tr>
                </thead>
                <tbody>
                {booksList && booksList.map((item, k) => {
                return(
                    <tr key={k}>
                        <td>{item.data().bookname}</td>
                        <td>{item.data().authorname}</td>
                        <td><button onClick={() => handleDelete(item.id)}>delete</button></td>
                        <td><Link to={`/${item.id}/editbook`}>edit</Link></td>
                    </tr>
                )
                })}
                </tbody>
            </table>
        </>
    )
} 

export default ShowList;