import Logo from '../../assets/fportal.webp';
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import '../Form/Form.css';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import handleException from './../../util/exceptionHandler';

const SignUp = () => {

    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const navigate = useNavigate();

    const clearForm = () => {
        setPassword('');
        setConfirmPassword('');
    };

    const signUpUsers = async (e) => {
        e.preventDefault();
        if (name && surname && userName && password && confirmPassword) {
            try {
                const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/Authentication/Register`, { name, surname, userName, email, password, confirmPassword });
                console.log('response', response.data);
                navigate('/home');
                alert("Qeydiyyat ugurla basa catdi!");
            } catch (error) {
                alert(handleException(error?.response?.data?.messages));
                console.log(error);
            };
        }
        clearForm();
    };

    return (
        <div className='sign flex w-full min-h-screen bg-black'>
            <div className='register flex justify-center items-center w-1/2 text-white px-5'>
                <div>
                    <img className='logo w-48' src={Logo} alt="" />
                    <h1 className='signtitle text-4xl font-bold mt-10 mb-8'>Futbol dünyasına <span className='samecolor text-fuchsia-600'>keçid et!</span></h1>
                    <form onSubmit={signUpUsers} className='max-w-[410px]'>
                        <div className='mb-4 flex'>
                            <div className='w-1/2 mr-2'>
                                <input onChange={(e) => setName(e.target.value)} value={name} className="w-full px-3 py-2 bg-zinc-900 rounded-3xl" type="text" placeholder="ad" required />
                            </div>
                            <div className='w-1/2'>
                                <input onChange={(e) => setSurname(e.target.value)} value={surname} className="w-full px-3 py-2 bg-zinc-900 rounded-3xl" type="text" placeholder="soyad" required />
                            </div>
                        </div>
                        <div className="mb-4 d-flex">
                            <input onChange={(e) => setUserName(e.target.value)} value={userName} className='w-full px-3 py-2 bg-zinc-900 rounded-3xl' type="text" placeholder='istifadəçi adı' required />
                        </div>
                        <div className='mb-4'>
                            <input onChange={(e) => setEmail(e.target.value)} value={email} className='w-full px-3 py-2 bg-zinc-900 rounded-3xl' type="email" placeholder='email' required />
                        </div>
                        <div className='mb-4'>
                            <input onChange={(e) => setPassword(e.target.value)} value={password} className='w-full px-3 py-2 bg-zinc-900 rounded-3xl' type="password" placeholder='şifrə' required />
                        </div>
                        <div>
                            <input onChange={(e) => setConfirmPassword(e.target.value)} value={confirmPassword} className='w-full px-3 py-2 bg-zinc-900 rounded-3xl' type="password" placeholder='şifrənin təkrarı' required />
                        </div>

                        <div className='mt-4 flex items-center justify-between'>
                            <button type="submit" className='loginbtn bg-white text-black px-3 py-2 font-bold rounded-3xl'>Qeydiyyat</button>
                        </div>
                    </form>
                    <div className='signfooter max-w-[410px] mt-7 border-t-2 border-gray-300'>
                        <div className='flex justify-center'>
                            <div className='otherway bg-black -mt-3 px-3'>Digər üsullar</div>
                        </div>
                        <div className='flex justify-between mt-4'>
                            <div className='googlebtn w-1/2 flex items-center justify-center bg-zinc-900 mr-2 px-7 py-2 rounded-3xl '>
                                <FcGoogle />
                                <button className='ml-2 text-slate-400'>Google</button>
                            </div>
                            <div className='applebtn w-1/2 ml-2 flex items-center justify-center bg-zinc-900 px-7 py-2 rounded-3xl'>
                                <FaApple />
                                <button className='ml-2 text-slate-400'>Apple</button>
                            </div>
                        </div>
                        <div>
                            <p className='endtext text-sm mt-5'>
                                <span className='mr-1'>Hesabın yoxdur?</span>
                                <Link to='/login' className='samecolor text-fuchsia-600 cursor-pointer'>Giriş et!</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='imgbox w-1/2'></div>
        </div>

    );
};

export default SignUp;


