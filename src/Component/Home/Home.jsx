/* eslint-disable react/jsx-key */
import { useEffect, useState } from 'react';
import './Home.css'
import Cart from '../Cart/Cart';

const Home = () => {
    const [allData, setAllData] = useState([]);
    useEffect(()=>{
        fetch('./data.json')
        .then(res=> res.json())
        .then(data => setAllData(data))
    },[]);
    console.log(allData)
    return (
        <>
        <h1 className="course-title">Course Registration</h1> 
        <div className="body">
           <div className='card-container'>
           {allData.map((card=>(
             <div className="card-body">
             <img className='card-img' src={card.image} alt="" />
              <h3>{card.title}</h3>
              <p>{card.description}</p>
              <div className='card-info'>
                  <p>Price : {card.price}</p>
                  <p>Credit : {card.credit}</p>
              </div>
              <button className='card-btn' type="button">Select</button>
              </div>
           )))}
           
           </div>
            {/* cart section */}

            <div className='cart'>
                <Cart></Cart>
            </div>
           
        </div>
        </>
    );
};

export default Home;