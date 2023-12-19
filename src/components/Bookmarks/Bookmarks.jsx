import Bookmark from "../Bookmark/Bookmark";
import PropTypes from 'prop-types';

const Bookmarks = ({Prop_bookmarks,Prop_credit , Prop_newPrice }) => {
    
    return (
        <div >
            <div className="w-96 max-h-96  mt-6 p-2 bg-gray-200" >
                <h2 className="text-xl">Total Credit Hour : {Prop_credit} hour</h2>
                <h2 className="text-xl">Total Price : {Prop_newPrice} USD</h2>
                
                <div className='bg-red-400 p-2 m-4 rounded-xl'>
                    <h2 className="Text-2xl font-bold bg-purple-200">Course Name :</h2>                
                    {
                        Prop_bookmarks.map(bookmark => <Bookmark  bookmark={bookmark} key={bookmark.id}></Bookmark>)
                    }
               </div>
            </div>
        </div>
    );
};

Bookmarks.propTypes = {
    Prop_bookmarks:PropTypes.object,
    Prop_credit: PropTypes.func,
    Prop_newPrice: PropTypes.func
}

export default Bookmarks;