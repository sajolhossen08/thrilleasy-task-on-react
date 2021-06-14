import React from 'react';
import RiverRafting from '../../images/Image/raftingpic.jpg';
import Rating from '../../images/icon/rating-icon.png';
import Time from '../../images/icon/time-icon.png';
import Location from '../../images/icon/location-icon.png';
import Transport from '../../images/icon/transport-icon.png';
import Meal from '../../images/icon/meal-icon.png';
import CashBack from '../../images/icon/cash-back-icon.png';
import Guide from '../../images/icon/guide-icon.png';


const Home = () => {
    return (
        <>
            <div className="row d-flex container mt-1">
                <div className="col-md-6">
                    <img className="img-fluid rounded" width="100%" src={RiverRafting} alt="River Rafting" />
                </div>
                <div className="col-md-6 w-100">
                    <h3>River Rafting on Indus River</h3>
                    <div className="row d-flex m-1">
                    <div><img src={Rating} alt="" width="155vw"/></div>
                    <div><img src={Time} alt="" width="125vw"/></div>
                    <div><img src={Location} alt="" width="90vw"/></div>
                    </div>
                    <p>Starting from: <del>INR 199,000</del></p>
                    <h2>INR 13800</h2>
                    <h5>per Adult</h5>
                    <button className="w-75 btn btn-warning" type="submit">Book Now</button>
                    <div className="d-flex ">
                    <div><img src={Transport} alt="" width="55vw"/></div>
                    <div><img src={Meal} alt="" width="55vw"/></div>
                    <div><img src={CashBack} alt="" width="78vw"/></div>
                    <div><img src={Guide} alt="" width="60vw"/></div>
                    </div>
                </div>
            </div>
            <div className="text m-2">
                <h3>&#9661; Thrilling Leh Ladakh Tour with Pangong Lake Highlights</h3>
                <h5 style={{fontWeight:'400'}}>&#9654; Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, quia.</h5>
                <h5 style={{fontWeight:'400'}}>&#9654; Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, quia.</h5>
                <h5 style={{fontWeight:'400'}}>&#9654; Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, quia.</h5>
                <h5 style={{fontWeight:'400'}}>&#9654; Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, quia.</h5>
                <h5 style={{fontWeight:'400'}}>&#9654; Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, quia.</h5>
            </div>
        </>
    );
};

export default Home;