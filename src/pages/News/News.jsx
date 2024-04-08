import React, { useState, useEffect } from 'react';
import Headers from '../../components/Header/Headers';
import axios from 'axios';
import '../News/News.css';
import { useNavigate } from 'react-router-dom';

const News = () => {

    const [news, setNews] = useState([]);
    const navigate = useNavigate();

    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoibmExM2kiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9lbWFpbGFkZHJlc3MiOiJuYTEzaUBnbWFpbC5jb20iLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6Ijk4NDI5Zjc5LTBmZDYtNDg5ZC1hMWEwLWQxMTZlNmI3ODUxZSIsIm5iZiI6MTcxMjQ4NzI1OSwiZXhwIjoxNzQ0MDIzMjU5LCJpc3MiOiJ3d3cubXlhcGkuY29tIiwiYXVkIjoid3d3LmJpbG1lbW5lLmNvbSJ9.1NWvPKu1hBg08kG0MQyqdftH4r-1gGtBpPrgYyaquhI";

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

    const clickNews = () => {
        navigate('/details');
    };

    useEffect(() => {
        getNews();
    }, []);

    return (
        <>
            <Headers />
            <section className='pageSection'>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h2 className='text-white text-3xl font-bold py-4'>Xəbərlər</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <input className='mb-5 px-2' type="text" placeholder='filter' />
                        </div>
                    </div>
                    <div className="row row-cols-md-4 row-cols-2">
                        {news.map((item, index) => (
                            <div key={index} className="col-md-3">
                                <div onClick={clickNews} className="box">
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
        </>
    );
};

export default News;