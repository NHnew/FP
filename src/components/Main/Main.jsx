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
                                <div id="carouselExampleSlidesOnly" className=" mt-5 carousel slide" data-bs-ride="carousel">
                                    <div className="h-[500px] rounded-3xl carousel-inner">
                                        <div className="carousel-item active text-white">
                                            <div className='carouselTitle bg-white rounded-3'>
                                                <h4 className='text-black'>ÇEMPİONLAR LİQASI</h4>
                                            </div>
                                            <h3>Lorem ipsum dolor consectetur nicatnabi.</h3>
                                            <div className="imgbox">
                                                <img src={Image1} className="d-block w-100" alt="..." />
                                            </div>
                                        </div>
                                        <div className="carousel-item">
                                            <div className='carouselTitle bg-white rounded-3'>
                                                <h4 className='text-black'>ÇEMPİONLAR LİQASI</h4>
                                            </div>
                                            <h3>Lorem ipsum dolor consectetur nicatnabi.</h3>
                                            <div className="imgbox">
                                                <img src={Image1} className="d-block w-100" alt="..." />
                                            </div>
                                        </div>
                                        <div className="carousel-item">
                                            <div className='carouselTitle bg-white rounded-3'>
                                                <h4 className='text-black'>ÇEMPİONLAR LİQASI</h4>
                                            </div>
                                            <h3>Lorem ipsum dolor consectetur nicatnabi.</h3>
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
                        <div className="row row-cols-md-4 row-cols-2">
                            <div className="col-md-3">
                                <div className="box">
                                    <div className="textbox">
                                        <div className='descriptionTitle bg-white rounded-3'>
                                            <h4 className='text-black'>ÖLKƏ FUTBOLU</h4>
                                        </div>
                                        <p>{("Futbol haqqında xəbərlərə burdan rahatlıqla baxa bilərsiniz").substring(0, 32)}...</p>
                                    </div>
                                    <div className="imgbox">
                                        <img src={Image1} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="box">
                                    <div className="textbox">
                                        <div className='descriptionTitle bg-white rounded-3'>
                                            <h4 className='text-black'>ÖLKƏ FUTBOLU</h4>
                                        </div>
                                        <p>{("Futbol haqqında xəbərlərə burdan rahatlıqla baxa bilərsiniz").substring(0, 32)}...</p>
                                    </div>
                                    <div className="imgbox">
                                        <img src={Image1} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="box">
                                    <div className="textbox">
                                        <div className='descriptionTitle bg-white rounded-3'>
                                            <h4 className='text-black'>ÖLKƏ FUTBOLU</h4>
                                        </div>
                                        <p>{("Futbol haqqında xəbərlərə burdan rahatlıqla baxa bilərsiniz").substring(0, 32)}...</p>
                                    </div>
                                    <div className="imgbox">
                                        <img src={Image1} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="box">
                                    <div className="textbox">
                                        <div className='descriptionTitle bg-white rounded-3'>
                                            <h4 className='text-black'>ÖLKƏ FUTBOLU</h4>
                                        </div>
                                        <p>{("Futbol haqqında xəbərlərə burdan rahatlıqla baxa bilərsiniz").substring(0, 32)}...</p>
                                    </div>
                                    <div className="imgbox">
                                        <img src={Image1} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="box">
                                    <div className="textbox">
                                        <div className='descriptionTitle bg-white rounded-3'>
                                            <h4 className='text-black'>ÖLKƏ FUTBOLU</h4>
                                        </div>
                                        <p>{("Futbol haqqında xəbərlərə burdan rahatlıqla baxa bilərsiniz").substring(0, 32)}...</p>
                                    </div>
                                    <div className="imgbox">
                                        <img src={Image1} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="box">
                                    <div className="textbox">
                                        <div className='descriptionTitle bg-white rounded-3'>
                                            <h4 className='text-black'>ÖLKƏ FUTBOLU</h4>
                                        </div>
                                        <p>{("Futbol haqqında xəbərlərə burdan rahatlıqla baxa bilərsiniz").substring(0, 32)}...</p>
                                    </div>
                                    <div className="imgbox">
                                        <img src={Image1} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="box">
                                    <div className="textbox">
                                        <div className='descriptionTitle bg-white rounded-3'>
                                            <h4 className='text-black'>ÖLKƏ FUTBOLU</h4>
                                        </div>
                                        <p>{("Futbol haqqında xəbərlərə burdan rahatlıqla baxa bilərsiniz").substring(0, 32)}...</p>
                                    </div>
                                    <div className="imgbox">
                                        <img src={Image1} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="box">
                                    <div className="textbox">
                                        <div className='descriptionTitle bg-white rounded-3'>
                                            <h4 className='text-black'>ÖLKƏ FUTBOLU</h4>
                                        </div>
                                        <p>{("Futbol haqqında xəbərlərə burdan rahatlıqla baxa bilərsiniz").substring(0, 32)}...</p>
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