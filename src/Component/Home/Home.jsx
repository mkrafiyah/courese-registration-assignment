import { useEffect, useState } from 'react';
import './Home.css'

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
           <div>
           {/* <div className="card-body">
            <img className='card-img' src="https://i.ibb.co/LCdRhBW/Rectangle-2-6.png" alt="" />
            <h3>Introduction to C Programming</h3>
            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
            <div className='card-info'>
                <p>Price : 25000</p>
                <p>Credit : 2hr</p>
            </div>
            <button className='card-btn' type="button">Select</button>
            </div> */}
            {
                allData.map((datum=>{
                    <div className="card-body">
            <img className='card-img' src="https://i.ibb.co/LCdRhBW/Rectangle-2-6.png" alt="" />
            <h3>Introduction to C Programming</h3>
            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
            <div className='card-info'>
                <p>Price : 25000</p>
                <p>Credit : 2hr</p>
            </div>
            <button className='card-btn' type="button">Select</button>
            </div>
                }))
            }
           </div>
            {/* cart section */}

            <div className='cart'>
                <h3>cart</h3>
            </div>
           
        </div>
        </>
    );
};

export default Home;