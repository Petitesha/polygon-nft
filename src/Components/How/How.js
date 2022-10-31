import Wallet from '../../Assets/Images/wallet.svg';
import Create from '../../Assets/Images/Create.svg';
import Add from '../../Assets/Images/Add.svg';
import List from '../../Assets/Images/List.svg';
import Dotted from '../../Assets/Images/Dotted.svg';

const How = () => {
    return(
        <div className='w-5/6 m-auto pt-2 relative'>
            <p className='font-circular font-medium text-header-300 text-300 text-center mb-3'>How it Works</p>
            <div className='flex justify-between items-center'>
                <div className='w-3/12'>
                    <div className='w-12 h-12 bg-header-100 rounded-full mb-4'>
                        <img src={Wallet} alt='wallet' className='m-auto translate-y-1/2'/>
                    </div>
                    <h4 className='font-medium font-circular text-header-300 text-100 mb-2'>Set up your wallet</h4>
                    <p className='font-medium font-circular text-header-500 text-400'>Once you’ve set up your wallet of choice, connect it to Polygon by clicking the wallet icon in the top right corner.</p>
                </div>
                <div className='w-3/12'>
                    <div className='w-12 h-12 bg-header-100 rounded-full mb-4'>
                        <img src={Create} alt='create' className='m-auto translate-y-1/2' />
                    </div>
                    <h4 className='font-medium font-circular text-header-300 text-100 mb-2'>Create your collection</h4>
                    <p className='font-medium font-circular text-header-500 text-400'>Click My Collections and set up your collection. Add social links, a description, profile & banner images, and set a secondary sales fee.</p>
                </div>
                <div className='w-3/12'>
                    <div className='w-12 h-12 bg-header-100 rounded-full mb-4'>
                        <img src={Add} alt='add' className='m-auto translate-y-1/2' />
                    </div>
                    <h4 className='font-medium font-circular text-header-300 text-100 mb-2'>Add your NFT's</h4>
                    <p className='font-medium font-circular text-header-500 text-400'>Upload your work (image, video, audio, or 3D art), add a title and description, and customize your NFTs with properties, <span className='text-header-100'> read more...</span></p>
                </div>
                <div className='w-3/12'>
                    <div className='w-12 h-12 bg-header-100 rounded-full mb-4'>
                        <img src={List} alt='list' className='m-auto translate-y-1/2' />
                    </div>
                    <h4 className='font-medium font-circular text-header-300 text-100 mb-2'>List for sales</h4>
                    <p className='font-medium font-circular text-header-500 text-400'>Choose between auctions, fixed-price listings, and declining-price listings. You choose how you want to sell your NFTs, and <span className='text-header-100'> read more...</span></p>
                </div>
            </div>
            <div className='absolute bottom-2 left-14 w-9/12 h-53'>
                <img src={Dotted} alt='dotted' />
            </div>
        </div>
    )
}

export default How;