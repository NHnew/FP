import React from 'react';
import Image1 from '../../assets/Image1.jpg';
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
                                    <div className="h-[500px] rounded-3xl carousel-inner">
                                        <div className="carousel-item active text-white">
                                            <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus eligendi enim, sequi porro.</h3>
                                            <div className="imgbox">
                                                <img src={Image1} className="d-block w-100" alt="..." />
                                            </div>
                                        </div>
                                        <div className="carousel-item">
                                            <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus eligendi enim, sequi porro.</h3>
                                            <div className="imgbox">
                                                <img src={Image1} className="d-block w-100" alt="..." />
                                            </div>
                                        </div>
                                        <div className="carousel-item">
                                            <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus eligendi enim, sequi porro.</h3>
                                            <div className="imgbox">
                                                <img src={Image3} className="d-block w-100" alt="..." />
                                            </div>
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
                                <h2 className='text-white text-3xl font-bold py-4'>Xəbərlər</h2>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="box">
                                    <div className="textbox">
                                        <p>Futbol haqqında xəbərlərə burdan rahatlıqla baxa bilərsiniz</p>
                                    </div>
                                    <div className="imgbox">
                                        <img src={Image1} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="box">
                                    <div className="textbox">
                                        <p>Futbol haqqında xəbərlərə burdan rahatlıqla baxa bilərsiniz</p>
                                    </div>
                                    <div className="imgbox">
                                        <img src={Image1} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="box">
                                    <div className="textbox">
                                        <p>Futbol haqqında xəbərlərə burdan rahatlıqla baxa bilərsiniz</p>
                                    </div>
                                    <div className="imgbox">
                                        <img src={Image1} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="box">
                                    <div className="textbox">
                                        <p>Futbol haqqında xəbərlərə burdan rahatlıqla baxa bilərsiniz</p>
                                    </div>
                                    <div className="imgbox">
                                        <img src={Image1} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main >
        </>
    );
};

export default Main;