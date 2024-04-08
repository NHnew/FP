import React, { useState, useEffect } from 'react';
import Headers from '../../components/Header/Headers';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const Details = () => {
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
                            <div id="carouselExampleSlidesOnly" className="mt-5 carousel slide" data-bs-ride="carousel">
                                <div className="h-[500px] rounded-3xl carousel-inner">
                                    <div className="carousel-item active text-white">
                                        <div className='carouselTitle bg-white rounded-3'>
                                            <h4 className='text-black font-bold'>x</h4>
                                        </div>
                                        <h3>x</h3>
                                        <div className="imgbox">
                                            <img src='' className="d-block w-100" alt="..." />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <p className='mt-[50px] mb-[80px] text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. A dicta quibusdam animi fuga itaque consectetur temporibus, consequuntur quas unde tenetur eum placeat? Quasi aliquam cum non laborum ab, nam fugit!
                                Reiciendis ab vel veniam quam earum expedita error pariatur eligendi voluptatem, doloremque neque. Itaque, modi labore suscipit quos distinctio laudantium aliquid sequi cumque obcaecati, rem sint fugiat a quo molestias.
                                Alias, quis! Eligendi, sapiente temporibus nulla culpa inventore, saepe quos dignissimos cupiditate nisi ducimus laborum praesentium ullam veritatis quisquam asperiores quidem excepturi amet quasi minus consequuntur dolore libero aspernatur corrupti.
                                Sapiente est perferendis aut similique, quidem laborum accusamus incidunt quam aliquam, porro praesentium, tenetur necessitatibus. Delectus nesciunt enim sunt quidem, ab deserunt, aperiam libero nemo eius modi pariatur, reiciendis commodi.
                                Ullam, animi dolorem libero eum unde, nobis fuga recusandae tenetur necessitatibus, non culpa labore similique autem provident cumque impedit maiores aperiam accusantium nihil voluptatem? Veniam fuga optio sunt corrupti a?
                                Voluptate accusamus consectetur iure impedit culpa ex maxime fugit minus iste, mollitia iusto dolorem ea quos aut sequi laboriosam esse molestiae aperiam enim quibusdam cum ullam! Optio, blanditiis id? Eligendi.
                                Laudantium fugiat exercitationem vero ut reprehenderit quae at? Vero magnam ipsum ullam ab harum placeat reiciendis dicta vitae, rerum at. Libero eligendi eius molestias tempora vero fuga totam ullam mollitia.
                                Ducimus harum architecto atque cumque vitae eum quos excepturi magni maiores quasi, nemo mollitia officia dolores, facere, qui saepe vero ex. Quod, praesentium odio velit totam explicabo illo ea beatae?
                                Excepturi quaerat porro veritatis. Similique sunt voluptatum omnis, accusantium, voluptates ut totam at quis, aspernatur odit eum sapiente. Dignissimos unde enim debitis aut animi, veniam reprehenderit earum consequatur. Velit, soluta.
                                Praesentium cumque laborum est. Facere asperiores aliquid alias eligendi corporis voluptatum obcaecati nemo facilis soluta nam ducimus, velit voluptatibus, eveniet cum sint, a nostrum fuga nihil corrupti. Accusantium, voluptatum corrupti!</p>
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

export default Details;