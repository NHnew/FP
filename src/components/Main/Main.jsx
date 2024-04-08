import React, { useState, useEffect } from 'react';
import Image1 from '../../assets/Image1.jpg';
import Image3 from '../../assets/Image3.jpg';
import '../Main/Main.css';
import axios from 'axios';


const Main = () => {

    const [news, setNews] = useState([]);

    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoibmExM2kiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9lbWFpbGFkZHJlc3MiOiJuYTEzaUBnbWFpbC5jb20iLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6Ijk4NDI5Zjc5LTBmZDYtNDg5ZC1hMWEwLWQxMTZlNmI3ODUxZSIsIm5iZiI6MTcxMjQ4NzI1OSwiZXhwIjoxNzQ0MDIzMjU5LCJpc3MiOiJ3d3cubXlhcGkuY29tIiwiYXVkIjoid3d3LmJpbG1lbW5lLmNvbSJ9.1NWvPKu1hBg08kG0MQyqdftH4r-1gGtBpPrgYyaquhI";


    const postNews = async (newsData) => {
        try {
            const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/News/Create`,
                newsData,
                {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    };

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

        const initialNews = [
            {
                "title": "Title 1",
                "description": "Description 1",
                "primaryImageUrl": "url1",
                "imageUrls": ["url1"],
                "tagIds": ["tag1"]
            },
            {
                "title": "Title 2",
                "description": "Description 2",
                "primaryImageUrl": "url2",
                "imageUrls": ["url2"],
                "tagIds": ["tag2"]
            }
        ];

        initialNews.forEach(newsItem => postNews(newsItem));
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
                                    <button className='newsBtn'>Daha çox</button>
                                </div>
                            </div>
                        </div>
                        <div className="row row-cols-md-4 row-cols-2">
                            {news.map((item, index) => (
                                <div key={index} className="col-md-3">
                                    <div className="box">
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