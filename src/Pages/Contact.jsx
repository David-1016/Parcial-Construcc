
const Contact = () => {
    return (
        <>
            <div className="bg-[url('./assets/images/Recurso2.png')] bg-cover bg-no-repeat
min-h-screen flex justify-center">



                <div className="flex">



                    <div className="container mx-auto px-4 bg-white">
                        <div className=" pt-8">
                            <h1 className="uppercase text-2xl font-simibold text-purple tracking-[0.3em]">HELLO & WELCOME</h1>
                            <p className="text-gray-400">Lorem ipsum dolor sit,<br />
                                amet consectetur adipisicing elit
                                sit enim </p>

                        </div>

                        <form className="flex items-center gap-4 bg-white rounded-md overflow-hidden py-4 px-4 ">
                            <input className="w-full text-gray-400 " type="text" placeholder="User Name" />
                        </form>
                        <br />
                        <form className="flex items-center gap-4 bg-white rounded-md overflow-hidden py-4 px-4 ">
                            <input className="w-full text-gray-400   border-gray-600" type="text" placeholder="Password" />
                        </form>

                        <button className="uppercase justify-center  bg-purple-950 text-white">Sign in</button>
                        <br />
                        <br />
                        
                        <div className="flex justify-evenly">
                            <h2 className="text-gray-500">Do you have an account/</h2>
                            <h2 className="text-purple-800">Sign up now!</h2>
                        </div>
                        <br />
                        <p className="text-gray-200 text-center">-------------------or-----------------</p>

                        <br /><br /><br />
                        <p className="text-gray-200 text-center">Continue with social media</p>

                    </div>


                    <div className="container mx-auto px-4 bg-transparent">
                        <h1 className="pt-50 uppercase text-2xl font-simibold text-white tracking-[0.3em]">Welcome to yout bussines</h1>

                    </div>



                </div>





            </div>
        </>

    )
}
export default Contact;