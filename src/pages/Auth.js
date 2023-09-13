import '../styles/Auth.css'

const Auth = () => {
    return (
        /* Root */
        <div className='auth h-screen flex items-center overflow-hidden'>

            {/* Image Container */}
            <div className='w-1/2 h-full overflow-hidden slide-down'>
                {/* Image */}
                <img
                    alt='Food'
                    src='/images/auth_bg.jpg'
                    className='w-full h-full object-cover'
                />
            </div>

            {/* Info Container  */}
            <div className='w-1/2 h-screen slide-up border-black border-l-4
            
            '>

                <div className='
                h-2/4
                border-red border-4
                '>
                    {/* Info */}
                    <h1 className=''>Recipes</h1>

                    {/* Credentials Form */}
                    <form className='flex-col'>

                        <h2>Log in</h2>

                        <button>Log in with Google</button>

                        <button>Log in with Facebook</button>

                        <h3>Don't have an account? <span>Join now</span></h3>

                        {/* Your form content goes here */}
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Auth