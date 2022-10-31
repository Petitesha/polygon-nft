import Metamask from '../../Assets/Images/metamask.svg';
import Coinbase from '../../Assets/Images/coinbase.svg';
import Opensea from '../../Assets/Images/opensea.svg';
import Binance from '../../Assets/Images/binance.svg';

const Sponsors = () => {
    return (
        <div className='my-6'>
            <p className="font-circular font-bold text-header-300 text-100 text-center">Supported By</p>
            <div className="flex justify-between items-center w-4/5 m-auto pb-6 pt-3">
               <img src={Metamask} alt='Metamask' />
               <img src={Coinbase} alt='Coinbase' />
               <img src={Opensea} alt='Opensea' />
               <img src={Binance} alt='Binance' />
            </div>
        </div>
    )
}

export default Sponsors;