
import './App.css'
import Header from './components/Header/Header'
import Blogs from './components/Blogs/Blogs'
import { useState } from 'react'
import Bookmarks from './components/Bookmarks/Bookmarks';

function App() {

  const [bookmarks, setBookmarks] = useState([]);
  const [new_credit, setCredit] = useState(0);
  const [new_Price, setNewPrice] = useState(0);
  
  const handleCourses = new_blog => {
    const newBookmarks = [...bookmarks,new_blog];
    setBookmarks(newBookmarks);
  }
  const handleSelectorButton = (id,c,price) =>{

    //For Credit
    const totalCredit = new_credit + c;
    setCredit(totalCredit);

    //For remaining Bookmarks
    const remainingBookmarks = bookmarks.filter( bookmark => bookmark.id !== id);
    setBookmarks(remainingBookmarks);

    //For Total Price
    const totalPrice = new_Price + price;
    setNewPrice(totalPrice);
    }
  
  return (
    <>
      <Header></Header>
      <div className=' md:flex max-w-7xl gap-4'>
         <Blogs handleCourses={handleCourses} handleSelectorButton={handleSelectorButton}></Blogs>
         <Bookmarks Prop_bookmarks={bookmarks} Prop_credit={new_credit} Prop_newPrice = {new_Price} ></Bookmarks>

      </div>
    </>
  )
}

export default App
