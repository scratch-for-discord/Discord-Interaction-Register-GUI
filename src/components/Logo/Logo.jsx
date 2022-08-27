import './Logo.css';



export const Logo = () => {
    return (

        <div className= "grid justify-items-center pt-20 pb-14">
            
            <h1 className= "text-6xl text-white font-bold text-left">
            <a href="https://scratch-for-discord.com" className="pointer animate-pulse text-orange">
            S4D
          </a> Interaction GUI
            </h1>
            
            <p className= "pt-7 text-white text-left pl-6 text-xl">
                Welcome to the S4D Interaction GUI.<br/> A new way to interact with your application through an web interface.
            </p>
            

        </div>



    )
}

export default Logo;

