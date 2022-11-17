import Wallet from '../../Assets/Images/wallet.svg';


const Button = () => {
    return(
        <div>
            <div className='border-[2px] border-header-100  rounded-tl-lg rounded-br-lg mt-[20px]'>
                <button className='flex items-center bg-header-100 py-3.5 px-6 rounded-tl-lg rounded-br-lg ml-[5px] mb-[5px]'>
                    <span className='text-header-400 mr-2 font-circular font-medium'>Connect Wallet</span>
                    <img src={Wallet} alt="wallet" />
                </button>  
            </div>
        </div>
    )
}

export default Button;