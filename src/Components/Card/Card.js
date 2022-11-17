
import Menu from '../../Assets/Images/dot menu.svg';
import Etherum from '../../Assets/Images/etherum logo.svg';


const Card = ({id,img,name,title,amount}) => {
    return(
        <div className='w-[261px] border-[1px] border-header-300'>
           <div className='w-5/6 m-auto flex flex-col items-center justify-center my-3'>
                <div className='mb-3'>
                    <img src={img} alt='Flowery' />
                </div>
                <div className='w-full'>
                    <div className='flex items-center justify-between mb-2'>
                        <p>{title}</p>
                        <img src={Menu} alt='menu' />
                    </div>
                    <p className='mb-2'>{name}</p>
                    <div className='flex items-center justify-between mb-2'>
                        <p>{amount}</p>
                        <img src={Etherum} alt='etherum' />
                    </div>
                </div>
           </div>
        </div>
    )
}

export default Card;