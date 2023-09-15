/* eslint-disable react/prop-types */
import './Cart.css'

const Cart = ({selectCourse, totalCredit, remainingCredit, totalPrice}) => {  
    return (
        <div>
            <h3 className='cart-title'>Credit Hour Remaining {remainingCredit}hr</h3>
            <hr />
            <h4 className='course-title'>Course Name</h4>
            {
                selectCourse.map((course =>(
             <div key={course.id}>

           <li>{course.id + 1}. {course.title}</li> 
             </div>
                )))
            }
            <hr />
             <p className='credit-info'>Total Credit Hour:{totalCredit}hr</p>
            <hr />
            <p className='price-info'>Total Price:{totalPrice} USD</p>
            
        </div>
    );
};

export default Cart;