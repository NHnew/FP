import React, { useState, useEffect } from 'react';
import Image1 from '../../assets/Image1.jpg';
import Image3 from '../../assets/Image3.jpg';
import '../Main/Main.css';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';


const Main = () => {

    const [news, setNews] = useState([]);
    const navigate = useNavigate();

    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoicmVzYWQiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9lbWFpbGFkZHJlc3MiOiJyc2RAZ21haWwuY29tIiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvbmFtZWlkZW50aWZpZXIiOiJiNWRiMDVlMy03MWY5LTRhNDAtYmM5NS1lNDQ4OTA3ZWNkNDAiLCJuYmYiOjE3MTQ3MzMwMzcsImV4cCI6MTc0NjI2OTAzNywiaXNzIjoid3d3Lm15YXBpLmNvbSIsImF1ZCI6Ind3dy5iaWxtZW1uZS5jb20ifQ.O6AQQHBcdE7rO-jJ9NUhd806w3aXsRR49OirbnLwnbo";


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
            console.error(error);
        }
    };


    useEffect(() => {
        getNews();
    }, []);


    const clickNews = (id) => {
        navigate(`/details/${id}`);
    };


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
                                                <h4 className='text-black font-bold'>ÇEMPİONLAR LİQASI</h4>
                                            </div>
                                            <h3>Lorem ipsum dolor consectetur nicatnabi.</h3>
                                            <div className="imgbox">
                                                <img src={Image1} className="d-block w-100" alt="..." />
                                            </div>
                                        </div>
                                        <div className="carousel-item">
                                            <div className='carouselTitle bg-white rounded-3'>
                                                <h4 className='text-black font-bold'>ÇEMPİONLAR LİQASI</h4>
                                            </div>
                                            <h3>Lorem ipsum dolor consectetur nicatnabi.</h3>
                                            <div className="imgbox">
                                                <img src={Image1} className="d-block w-100" alt="..." />
                                            </div>
                                        </div>
                                        <div className="carousel-item">
                                            <div className='carouselTitle bg-white rounded-3'>
                                                <h4 className='text-black font-bold'>ÇEMPİONLAR LİQASI</h4>
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
                            <div className="col-md-12 flex items-center justify-between">
                                <div>
                                    <h2 className='text-white text-3xl font-bold py-4'>Xəbərlər</h2>
                                </div>
                                <div>
                                    <Link to='/news'>
                                        <button className='newsBtn'>Daha çox</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="row row-cols-md-4 row-cols-2">
                            {news.map((item, index) => (
                                <div key={index} className="col-md-3">
                                    <div onClick={() => clickNews(item.id)} className="box">
                                        <div className="textbox">
                                            <div className='descriptionTitle bg-white rounded-3'>
                                                <h4 className='text-black font-bold'>{item.title}</h4>
                                            </div>
                                            <p>{item.description.substring(0, 32)}...</p>
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
                <section>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <h2 className='text-white text-3xl font-bold py-4'>Transfer</h2>
                            </div>
                        </div>
                    </div>
                </section>
            </main >
        </>
    );
};

export default Main;