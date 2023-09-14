import '../styles/Auth.css'

import { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faGoogle } from '@fortawesome/free-brands-svg-icons'

const Auth = () => {

    const [hoveredGoogleBtn, setHoverGBtn] = useState(false);
    const [hoveredFacebookBtn, setHoverFBtn] = useState(false);

    return (
        /* Root */
        <div className='auth h-screen flex items-center overflow-hidden'>

            {/* Image Container */}
            <div className='w-1/2 h-full overflow-hidden fade-in'>
                {/* Image */}
                <img
                    alt='Food'
                    src='/images/auth_bg.jpg'
                    className='w-full h-full object-cover'
                />
            </div>

            {/* Info Container  */}
            <div className='w-1/2 h-screen slide-up border-black border-l-2 text-lg flex-row justify-center items-center'>

                <div className='flex justify-center items-center h-full'>

                    {/* Credentials Form */}
                    <form className='w-3/4 max-w-xl h-1/2 
                    flex flex-col justify-center items-left'>

                        {/* Wrapper */}
                        <div className='flex items-center justify-left'>

                            {/* Brand */}
                            <h1 className='brand-title text-4xl font-bold my-12 flex justify-left items-left'>
                                Spice & Nice
                            </h1>

                            {/* Logo */}
                            <img src='/images/spicenice.png' alt='test' className='brand-logo' />
                        </div>


                        {/* Title */}
                        <h2 className='text-3xl font-extrabold my-8'>Log in with</h2>

                        <button className="text-2xl tracking-wide bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-full h-14"
                            onMouseEnter={() => setHoverGBtn(true)}
                            onMouseLeave={() => setHoverGBtn(false)}
                        >

                            {hoveredGoogleBtn ? <>
                                <FontAwesomeIcon icon={faGoogle} bounce className="mr-0.5 text-google-red" />
                            </> : <>
                                <FontAwesomeIcon icon={faGoogle} className="mr-0.5 text-google-red" />
                            </>}

                            oogle
                        </button>

                        <br />

                        <button className="text-2xl h-14 tracking-wide bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full"
                            onMouseEnter={() => setHoverFBtn(true)}
                            onMouseLeave={() => setHoverFBtn(false)}
                        >

                            {hoveredFacebookBtn ? <>
                                <FontAwesomeIcon icon={faFacebookF} beat className="mr-0.5 text-facebook-blue" />
                            </> : <>
                                <FontAwesomeIcon icon={faFacebookF} className="mr-0.5 text-facebook-blue" />
                            </>}

                            acebook
                        </button>

                        <h3 className='h-1/4 flex items-center justify-center'>
                            Don't have an account?

                            <span className='.relative mx-2 hover:cursor-pointer border-b-2 hover:border-orange-600 border-purple-700'>
                                Join now
                            </span>
                        </h3>

                        {/* Your form content goes here */}
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Auth