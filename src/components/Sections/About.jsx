import './About.css';
import { BsSlashSquareFill } from 'react-icons/bs';
import { AiOutlineSafety } from 'react-icons/ai';
import { MdOutlineContactSupport } from 'react-icons/md';



export const About = () => {
    return (

        <section className="h-auto mt-24  bg-notblack">

            <div className="px-2">
                <div className="flex items-center -mx-2 ">
                    <div className="w-1/3 px-2">
                        <div className="h-80 mt-10 rounded-lg ">
                            <div className="flex flex-col justify-center items-center  rounded-md">
                                <BsSlashSquareFill className=" text-10xl text-orange" />
                                <div className="text-white pl-4">
                                    <h2 className="font-bold text-xl pb-4 pt-2 text-left">Easy to use!</h2>

                                    <p className="text-base">With the help of our simple UI you will be able to acquire your goal in a short period of time.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-1/3 px-2">
                        <div className="h-80 mt-10 rounded-lg ">
                            <div className="flex flex-col justify-center items-center  rounded-md">
                                <AiOutlineSafety className=" text-10xl text-orange" />
                                <div className="text-white pl-4">
                                    <h2 className="font-bold text-xl pb-4 pt-2 text-left">Safety is on us!</h2>

                                    <p className="text-base">Your data is safe with us, it being stored in our database.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-1/3 px-2">
                        <div className="h-80 mt-10 rounded-lg ">
                            <div className="flex flex-col justify-center items-center  rounded-md">
                                <MdOutlineContactSupport className=" text-10xl text-orange" />
                                <div className="pl-4 text-white">
                                    <h2 className="font-bold text-xl pb-4 pt-2 text-left">Fast support!</h2>

                                    <p className=" text-base">Need help? no problem join our <a href="https://discord.gg/b5JzYXpVXC" className="pointer text-link underline underline-offset-2">Discord Server</a> to get them solved as soon as possible.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>


    )
}

export default About;

