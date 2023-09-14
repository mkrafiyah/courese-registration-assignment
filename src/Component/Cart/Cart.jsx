/* eslint-disable react/prop-types */
import './Cart.css'

const Cart = ({selectCourse}) => {
    console.log(selectCourse)
    return (
        <div>
            <h3>Credit Hour Remaining</h3>
            <hr />
            <h2>Course Name</h2>
            {
                selectCourse.map((course =>(
             <div key={course.id}>
           
            <li>{course.title}</li>
            
           
             </div>
                )))
            }
            <hr />
             <p>Total Credit Hour:{}</p>
            <hr />
            <p>Total Price:</p>
            
        </div>
    );
};

export default Cart;