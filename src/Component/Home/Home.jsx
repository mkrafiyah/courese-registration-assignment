/* eslint-disable react/jsx-key */
import { useEffect, useState } from 'react';
import './Home.css'
import Cart from '../Cart/Cart';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaBookOpen } from 'react-icons/fa';
import { FaDollarSign } from 'react-icons/fa';

const Home = () => {
    const [allData, setAllData] = useState([]);
    const [selectCourse, setSelectCourse] = useState([]);
    const [totalCredit, setTotalCredit] = useState(0);
    const [remainingCredit, setRemainingCredit] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);
    useEffect(()=>{
        fetch('./data.json')
        .then(res=> res.json())
        .then(data => setAllData(data))
    },[]);
    const givenCredit = 20;
    const handleSelectCourse = (card) =>{
        const isExists = selectCourse.find((item)=>item.id == card.id);
        let creditHour = card.credit;
        let price = card.price;
        
        if(isExists){
           return alert('already taken')
        }else{
            selectCourse.forEach((hour) =>{
                price = price + hour.price
                creditHour = creditHour + hour.credit;

            })
            const remainingCredit = givenCredit - creditHour;
            if(creditHour > 20){
                toast("you reached the limit of credit!");
            }else{
                setTotalCredit(creditHour);
                setRemainingCredit(remainingCredit);
                setSelectCourse([...selectCourse, card]);
                setTotalPrice(price);
            }
            
        }
        
    }
    
    return (
        <div className='body'>
        <h1 className="course-title">Course Registration</h1> 
        <div className="main-body">
           <div className='card-container'>
           {allData.map((card=>(
             <div key={card.id} className="card-body">
             <img className='card-img' src={card.image} alt="" />
              <h3 className='card-title'>{card.title}</h3>
              <p  className='description'>{card.description}</p>
              <div className='card-info'>
                <div className='dollar-icon'>
                    
                <p><FaDollarSign></FaDollarSign></p>
                <p className='price-credit-card'>Price : {card.price}</p>
                </div>
                  
                  
                  <div className='bookmark-icon'>
                    <p><FaBookOpen></FaBookOpen></p>
                  <p className='price-credit-card'> Credit : {card.credit}hr</p>
                  </div>
                  
              </div>
              <button onClick={()=> handleSelectCourse(card)} className='card-btn' type="button">Select</button>
              
              </div>
           )))}
           
           </div>
            {/* cart section */}

            <div className='cart'>
                <Cart selectCourse={selectCourse} totalCredit ={totalCredit} remainingCredit = {remainingCredit} totalPrice ={totalPrice}></Cart>
            </div>
            
           
        </div>
        <ToastContainer />
        </div>
    );
};

export default Home;