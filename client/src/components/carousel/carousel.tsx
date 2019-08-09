import * as React from 'react';
import sm from './spidermanFFH.jpg';
import ww from './wonderwoman.jpg';
import bm from './batmanDKR.jpg';
import './style.css';

const Carousel: React.FC = () => {
    return(
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={sm} className="d-block w-100 c-image" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src={bm}  className="d-block w-100 c-image" alt="..." />
                </div>
                <div className="carousel-item">
                        <img src={ww}  className="d-block w-100 c-image" alt="..." />
                </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
        </div>
    ) ;
};

export default Carousel;
