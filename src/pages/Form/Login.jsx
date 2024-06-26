import Logo from '../../assets/fportal.webp';
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import '../Form/Form.css';
import axios from 'axios';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';



const Login = () => {

    const navigate = useNavigate();
    const [userNameOrEmail, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);


    const loginUsers = async (e) => {
        e.preventDefault();
        if (userNameOrEmail || password) {
            try {
                setIsLoading(true);
                const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/Authentication/Login`, { userNameOrEmail, password });
                console.log('response', response.data);
                navigate('/home');
            } catch (error) {
                alert("istifadeci tapilmadi!");
            } finally {
                setIsLoading(false);
            }
        }
    };



    return (
        <div className='sign flex w-full min-h-screen bg-black'>
            <div className='register flex justify-center items-center w-1/2 text-white px-5'>
                <div>
                    <img className='logo w-48' src={Logo} alt="" />
                    <h1 className='signtitle text-4xl font-bold mt-12 mb-10'>Futbol dünyasına <span className='samecolor text-fuchsia-600'>keçid et!</span></h1>
                    <form onSubmit={loginUsers} className='max-w-[410px]'>
                        <div>
                            <div className='mb-4'>
                                <input disabled={isLoading} className='w-full px-3 py-2 bg-zinc-900 rounded-3xl' type="email or username" placeholder='istifadəçi adı və ya email' value={userNameOrEmail} onChange={(e) => setEmail(e.target.value)} required />
                            </div>
                            <div>
                                <input disabled={isLoading} className='w-full px-3 py-2 bg-zinc-900 rounded-3xl' type="password" placeholder='şifrə' value={password} onChange={(e) => setPassword(e.target.value)} required />
                            </div>
                        </div>
                        <div className='mt-4 flex items-center justify-between'>
                            <button type="submit" className={`loginbtn bg-white text-black px-3 py-2 font-bold rounded-3xl ${isLoading ? 'disabled' : ''}`} disabled={isLoading}>Giriş et</button>
                            <span className='samecolor parolforget text-fuchsia-600 text-sm cursor-pointer'>Şifrəni unutdun?</span>
                        </div>
                    </form>
                    <div className='signfooter max-w-[410px] mt-10 border-t-2 border-gray-300'>
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
                            <p className='endtext text-sm mt-3'>
                                <span className='mr-1'>Hesabın yoxdur?</span>
                                <Link to='/sign-up' className='samecolor text-fuchsia-600 cursor-pointer'>Qeydiyyatdan keç!</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='imagebox w-1/2'></div>
        </div>
    );
};

export default Login;
