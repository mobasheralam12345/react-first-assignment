import PropTypes from 'prop-types';

const Bookmark = ({bookmark}) => {

    const {course_reg_name} = bookmark ;
    return (           
            <div>
                    <ol>
                        <li>{course_reg_name}</li>
                    </ol>
            </div>
    );
};
Bookmark.propTypes = {
    bookmark:PropTypes.object,
    course_reg_name: PropTypes.func
}

export default Bookmark;