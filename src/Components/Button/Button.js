import Wallet from '../../Assets/Images/wallet.svg';


const Button = () => {
    return(
        <div className='border-header-100 '>
            <button className='flex items-center bg-header-100 py-3.5 px-6 rounded-tl-lg rounded-br-lg '>
                <span className='text-header-400 mr-2 font-circular font-medium'>Connect Wallet</span>
                <img src={Wallet} alt="wallet" />
            </button>  
        </div>
    )
}

export default Button;