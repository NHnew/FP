import React from 'react';
import Image1 from '../../assets/Image1.jpg';
import Image2 from '../../assets/Image2.jpg';
import Image3 from '../../assets/Image3.jpg';
import '../Main/Main.css';


const Main = () => {
    return (
        <>
            <main>
                <section>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
                                    <div className="rounded-3xl carousel-inner">
                                        <div className="carousel-item active text-white">
                                            <img src={Image1} className="d-block w-100" alt="..." />
                                        </div>
                                        <div className="carousel-item">
                                            <img src={Image2} className="d-block w-100" alt="..." />
                                        </div>
                                        <div className="carousel-item">
                                            <img src={Image3} className="d-block w-100" alt="..." />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <h2 className='text-white text-3xl'>Xəbərlər</h2>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                ???
                            </div>
                            <div className="col-md-6">
                                ???
                            </div>
                            <div className="col-md-6">
                                ???
                            </div>
                            <div className="col-md-6">
                                ???
                            </div>
                        </div>
                    </div>
                </section>
            </main >
        </>
    );
};

export default Main;