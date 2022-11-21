import Menu from '../../Assets/Images/dot menu.svg';
import Etherum from '../../Assets/Images/etherum logo.svg';


const Creators = ({img}) => {
    return(
        <div>
            <div>
                <div className='w-[265px] p-1.5 border-[1px] border-header-100 rounded-tl rounded-br'>
                    <div className='p-1 border-[1px] border-header-100 rounded-tl rounded-br flex items-center'>
                        <div className='mr-3'>
                            <img src={img} alt='menu' />
                        </div>
                        <div className='flex items-center justify-between w-5/6'>
                            <div>
                                <p className='text-header-300 text-100 font-bold font-circular'>OlajideBabs</p>
                                <div className='flex items-center'>
                                    <img className='mr-3' src={Etherum} alt='Etherum' />
                                    <p>55.035.00</p>
                                </div>
                            </div>
                            <div>
                                <img src={Menu} alt='menu' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Creators;