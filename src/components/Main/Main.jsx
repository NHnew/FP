import React, { useState, useEffect } from 'react';
import Image1 from '../../assets/Image1.jpg';
import Image3 from '../../assets/Image3.jpg';
import '../Main/Main.css';
import axios from 'axios';


const Main = () => {

    const [news, setNews] = useState([]);
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoibmljYXQiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9lbWFpbGFkZHJlc3MiOiJuaWNhdEBnbWFpbC5jb20iLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6IjcwYWZiN2RmLWZiZGMtNGM5YS04OWI3LTdiYmFkNjU1YmVmMiIsIm5iZiI6MTcxMjMyMjk5OCwiZXhwIjoxNzEyMzI2NTk4LCJpc3MiOiJ3d3cubXlhcGkuY29tIiwiYXVkIjoid3d3LmJpbG1lbW5lLmNvbSJ9.9TW8KhEazEbTU7qZLnnvGFLWzBOPSz4nY7yMvJ2CJzI";


    const getNews = async () => {
        try {
            const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/News/Read?pageNumber=1&pageSize=10`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            setNews(response.data.data);
            console.log(response.data.data);
        } catch (error) {
            console.error('Error fetching news:', error);
        }
    };


    useEffect(() => {
        getNews();
    }, []);


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
                            {news.map((item, index) => (
                                <div key={index} className="col-md-3">
                                    <div className="box">
                                        <div className="textbox">
                                            <div className='descriptionTitle bg-white rounded-3'>
                                                <h4 className='text-black'>{item.title}</h4>
                                            </div>
                                            <p>{(`${item.description}`).substring(0, 32)}...</p>
                                        </div>
                                        <div className="imgbox">
                                            <img src={item.primaryImage} alt="" />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main >
        </>
    );
};

export default Main;