/* eslint-disable react/jsx-key */
import { useEffect, useState } from 'react';
import './Home.css'
import Cart from '../Cart/Cart';

const Home = () => {
    const [allData, setAllData] = useState([]);
    const [selectCourse, setSelectCourse] = useState([]);
    useEffect(()=>{
        fetch('./data.json')
        .then(res=> res.json())
        .then(data => setAllData(data))
    },[]);
    const handleSelectCourse = (card) =>{
        let creditHour = card.credit;
        
    
        console.log(creditHour)
        const isExists = selectCourse.find((item)=>item.id == card.id);
        if(isExists){
           return alert('already taken')
        }else{
            selectCourse.forEach((item) =>{
                creditHour = parseInt(creditHour.slice(0, 1)) + item.credit
            })
            setSelectCourse([...selectCourse, card])
        }
        
    }
    console.log(allData)
    return (
        <div className='body'>
        <h1 className="course-title">Course Registration</h1> 
        <div className="main-body">
           <div className='card-container'>
           {allData.map((card=>(
             <div key={card.id} className="card-body">
             <img className='card-img' src={card.image} alt="" />
              <h3>{card.title}</h3>
              <p>{card.description}</p>
              <div className='card-info'>
                  <p>Price : {card.price}</p>
                  <p>Credit : {card.credit}</p>
              </div>
              <button onClick={()=> handleSelectCourse(card)} className='card-btn' type="button">Select</button>
              </div>
           )))}
           
           </div>
            {/* cart section */}

            <div className='cart'>
                <Cart selectCourse={selectCourse}></Cart>
            </div>
           
        </div>
        </div>
    );
};

export default Home;