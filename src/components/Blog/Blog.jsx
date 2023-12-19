import PropTypes from 'prop-types';
import { FaBookOpen } from "react-icons/fa";
const Blog = ({ blog, handleCourses,handleSelectorButton }) => {

    const { id, img, course_reg_name, credit, price, details } = blog;

    return (
        <div >

                <div className="rounded-lg bg-base-100 shadow-xl mb-5 pb-5">
                    <figure><img className='' src={img} /></figure>
                    <div className="">
                        <h2 className=" text-2xl">{course_reg_name}</h2>
                        <p>{details}</p>
                        <div className='justify-center'>
                        <div className='flex gap-2 justify-center'>
                            <p>Price : $<span>{price}</span></p>   
                            <span onClick={()=>handleCourses(blog)} className='mt-1'><FaBookOpen /></span>
                            <span>Credit :{credit}</span>
                        </div>
                        </div>
                        <div className=" ">
                            <button onClick={()=>handleSelectorButton(id,credit,price)} className="btn  bg-green-500 px-10 text-lg">Select</button>
                        </div>
                    </div>
                </div>

        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object,
    handleCourses: PropTypes.func,
    handleSelectorButton: PropTypes.func
}
export default Blog;