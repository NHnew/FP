import React, { useState, useEffect } from 'react';
import Headers from '../../components/Header/Headers';
import axios from 'axios';
import '../Details/Details.css';
import { useNavigate, useParams } from 'react-router-dom';
import { MdOutlineComment } from "react-icons/md";
import { FiSend } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";
import { FaRegComment } from "react-icons/fa6";




const Details = () => {
    const { newsId } = useParams();
    const [currentNews, setCurrentNews] = useState(null);
    const [comments, setComments] = useState([]);
    const [news, setNews] = useState([]);
    const [comment, setComment] = useState('');
    const [commentReply, setCommentReply] = useState('');
    const [showInputReply, setShowInputReply] = useState(false);
    const navigate = useNavigate();

    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiWXVzaWYiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9lbWFpbGFkZHJlc3MiOiJ5dXNpZi5oYXNhbm92MTdAZ21haWwuY29tIiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvbmFtZWlkZW50aWZpZXIiOiJmYmMzMTQ0ZS05NjQwLTQyYWYtODcyNS0xMWYxNmM1ODY5NWUiLCJuYmYiOjE3MTQ4MTg5NjgsImV4cCI6MTc0NjM1NDk2OCwiaXNzIjoid3d3Lm15YXBpLmNvbSIsImF1ZCI6Ind3dy5iaWxtZW1uZS5jb20ifQ.5noBhvUt75BEBfyLW6YDgKK4eyxPo2evfa0OX2yJFyg";

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

    const postNewsById = async () => {
        try {
            const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/News/ReadById`, { id: newsId }, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            setCurrentNews(response.data.data);
            console.log(response.data.data);
        } catch (error) {
            console.error(error);
        }
    };
    const readComments = async () => {
        axios.post(`${import.meta.env.VITE_BASE_URL}/Comment/ReadByNews`, { id: newsId }, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }).then(r => setComments(r.data.data))
            .catch(e => console.log(e));
    };
    const createCommented = async () => {
        axios.post(`${import.meta.env.VITE_BASE_URL}/Comment/Create`, { newsId, content: comment, parentId: null, userId: "dasda" }, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }).then(async r => {
            await readComments();
        }).catch(e => console.log(e));
    };

    const clickNews = (id) => {
        navigate(`/details/${id}`);
    };

    useEffect(() => {
        getNews();
        readComments();
    }, []);

    useEffect(() => {
        postNewsById();
    }
        , [newsId]);

    const addComment = async () => {
        comment === '' ? null : await createCommented();
        setComment('');
    };

    const addCommentReply = async () => {
        setCommentReply('');
    };

    const openCommentBox = () => {

    };


    return (
        <>
            <Headers />
            <section className='pageSection'>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className='newsDetailsHeader w-full h-[500px] mt-5'>
                                <div className="imgbox">
                                    <img src={currentNews?.primaryImage} alt="" />
                                </div>
                                <div className='bg-white rounded-3'>
                                    <h4 className='newsDetailsTitle text-black bg-white rounded-3 font-bold'>{currentNews?.title}</h4>
                                </div>
                                <h3 className='newsDetailsDesc'>{currentNews?.description}</h3>
                            </div>
                            <p className='mt-[50px] text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. A dicta quibusdam animi fuga itaque consectetur temporibus, consequuntur quas unde tenetur eum placeat? Quasi aliquam cum non laborum ab, nam fugit!
                                Reiciendis ab vel veniam quam earum expedita error pariatur eligendi voluptatem, doloremque neque. Itaque, modi labore suscipit quos distinctio laudantium aliquid sequi cumque obcaecati, rem sint fugiat a quo molestias.
                                Alias, quis! Eligendi, sapiente temporibus nulla culpa inventore, saepe quos dignissimos cupiditate nisi ducimus laborum praesentium ullam veritatis quisquam asperiores quidem excepturi amet quasi minus consequuntur dolore libero aspernatur corrupti.
                                Sapiente est perferendis aut similique, quidem laborum accusamus incidunt quam aliquam, porro praesentium, tenetur necessitatibus. Delectus nesciunt enim sunt quidem, ab deserunt, aperiam libero nemo eius modi pariatur, reiciendis commodi.
                                Ullam, animi dolorem libero eum unde, nobis fuga recusandae tenetur necessitatibus, non culpa labore similique autem provident cumque impedit maiores aperiam accusantium nihil voluptatem? Veniam fuga optio sunt corrupti a?
                                Voluptate accusamus consectetur iure impedit culpa ex maxime fugit minus iste, mollitia iusto dolorem ea quos aut sequi laboriosam esse molestiae aperiam enim quibusdam cum ullam! Optio, blanditiis id? Eligendi.
                                Laudantium fugiat exercitationem vero ut reprehenderit quae at? Vero magnam ipsum ullam ab harum placeat reiciendis dicta vitae, rerum at. Libero eligendi eius molestias tempora vero fuga totam ullam mollitia.
                                Ducimus harum architecto atque cumque vitae eum quos excepturi magni maiores quasi, nemo mollitia officia dolores, facere, qui saepe vero ex. Quod, praesentium odio velit totam explicabo illo ea beatae?
                                Excepturi quaerat porro veritatis. Similique sunt voluptatum omnis, accusantium, voluptates ut totam at quis, aspernatur odit eum sapiente. Dignissimos unde enim debitis aut animi, veniam reprehenderit earum consequatur. Velit, soluta.
                                Praesentium cumque laborum est. Facere asperiores aliquid alias eligendi corporis voluptatum obcaecati nemo facilis soluta nam ducimus, velit voluptatibus, eveniet cum sint, a nostrum fuga nihil corrupti. Accusantium, voluptatum corrupti!</p>
                            <div className='w-full flex items-center justify-between'>
                                <div className='flex items-center text-white'>
                                    <FaRegHeart className='cursor-pointer' />
                                    <FaRegComment onClick={openCommentBox} className='cursor-pointer mx-2' />
                                    <FiSend className='cursor-pointer' />
                                </div>
                                <div className='mt-3 text-gray-500 flex w-full justify-end'>05/04/2024</div>
                            </div>
                            <div className='flex items-center mt-5 mb-[10px] h-[80px]'>
                                <div className='flex w-full commentBox'>
                                    <div className='commentProfile w-[35px] h-[35px] bg-gray-100 rounded-full'></div>
                                    <div className='w-full'>
                                        <input
                                            className='commentInput w-full px-2 ml-2 w-96 bg-transparent'
                                            placeholder='şərh əlavə edin...'
                                            type="text"
                                            value={comment}
                                            onChange={(e) => setComment(e.target.value)}
                                        />
                                        {
                                            <div className='w-full flex justify-end'>
                                                <div
                                                    className='flex items-center justify-center font-bold bg-white text-black w-24 cursor-pointer rounded-3 py-1 mt-2'
                                                    onClick={addComment}
                                                >
                                                    Əlavə edin
                                                </div>
                                            </div>
                                        }
                                    </div>
                                </div>
                            </div>
                            <div className='w-full max-h-96 overflow-y-auto p-2 mt-4'>
                                {
                                    comments.map((c) => (
                                        <div key={c.id} className='text-white mb-5'>
                                            <div className='flex items-center'>
                                                <img class=" mr-2 inline-block h-6 w-6 rounded-full ring-2 ring-white" src={c?.user?.profileImageUrl} alt="" />
                                                {c.content}
                                                <MdOutlineComment
                                                    onClick={() => setShowInputReply(showInputReply === c.id ? null : c.id)}
                                                    className='ml-3 cursor-pointer'
                                                    style={{ fontSize: '12px' }}
                                                />
                                            </div>
                                            {showInputReply === c.id && (
                                                <div>
                                                    <input
                                                        className='commentInput w-4/5 mt-3 px-2 ml-2 w-96 bg-transparent'
                                                        placeholder='şərh əlavə edin...'
                                                        type="text"
                                                        value={commentReply}
                                                        onChange={(e) => setCommentReply(e.target.value)}
                                                    />
                                                    <div className='flex w-4/5 justify-end'>
                                                        <div
                                                            className='flex items-center justify-center font-bold bg-white text-black w-24 cursor-pointer rounded-3 py-1 mt-2'
                                                            onClick={addCommentReply}
                                                        >
                                                            Əlavə edin
                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                            <div>
                                                {c.subComments.map(sb => (
                                                    <div className="pl-[40px] my-5" key={sb.id}>
                                                        <img class=" mr-2 inline-block h-6 w-6 rounded-full ring-2 ring-white" src={sb?.user?.profileImageUrl} alt="" />
                                                        {sb.content}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                    <section>
                        <h2 className='text-white text-3xl font-bold py-4'>Digər xəbərlər</h2>
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
                    </section>
                </div>
            </section >
        </>
    );
};

export default Details;
