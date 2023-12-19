
import { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';
import PropTypes from 'prop-types';

const Blogs = ({handleCourses,handleSelectorButton}) => {

    const [blogs,setBlogs] = useState([]);

useEffect( ()=>{
    fetch('blogs.json')
    .then(res => res.json())
    .then(data =>setBlogs(data))
},[]);

    return (
        <div className="max-w-2/3">
             <div className="mt-6 grid grid-cols-3 gap-2 ">
          
          {
              blogs.map(blog => <Blog  key={blog.id} blog={blog}
                  handleCourses={handleCourses} 
                  handleSelectorButton={handleSelectorButton}  
              ></Blog>)
          }
      </div>
        </div>
       
    );
};

Blogs.propTypes = {
    handleCourses:PropTypes.object,
    handleSelectorButton: PropTypes.func
}
export default Blogs;