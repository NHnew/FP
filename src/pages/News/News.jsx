import React, { useState, useEffect } from 'react';
import Headers from '../../components/Header/Headers';
import axios from 'axios';
import '../News/News.css';
import { useNavigate } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const News = () => {

    const [news, setNews] = useState([]);
    const [startDate, setStartDate] = useState(null);
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
                <div className="container pt-5">
                    <div className="row">
                        <div className="col-md-12">
                            <h2 className='text-white text-3xl font-bold py-4'>Xəbərlər</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 pb-4 flex">
                            <select className='categorySelecet w-full mr-4 rounded'>
                                <option selected>Bütün xəbərlər</option>
                                <option>Yerli</option>
                                <option>Xarici</option>
                                <option>Futboldan kənar</option>
                            </select>
                            <DatePicker
                                placeholderText='Tarix seçin'
                                className='custom-datepicker rounded'
                                showIcon
                                selected={startDate}
                                onChange={(date) => setStartDate(date)}
                                icon={
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="1em"
                                        height="1em"
                                        viewBox="0 0 48 48"
                                    >
                                        <mask id="ipSApplication0">
                                            <g fill="none" stroke="#fff" strokeLinejoin="round" strokeWidth="4">
                                                <path strokeLinecap="round" d="M40.04 22v20h-32V22"></path>
                                                <path
                                                    fill="#fff"
                                                    d="M5.842 13.777C4.312 17.737 7.263 22 11.51 22c3.314 0 6.019-2.686 6.019-6a6 6 0 0 0 6 6h1.018a6 6 0 0 0 6-6c0 3.314 2.706 6 6.02 6c4.248 0 7.201-4.265 5.67-8.228L39.234 6H8.845l-3.003 7.777Z"
                                                ></path>
                                            </g>
                                        </mask>
                                        <path
                                            fill="currentColor"
                                            d="M0 0h48v48H0z"
                                            mask="url(#ipSApplication0)"
                                        ></path>
                                    </svg>
                                }
                            />
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