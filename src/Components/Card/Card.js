
import Menu from '../../Assets/Images/dot menu.svg';
import Etherum from '../../Assets/Images/etherum logo.svg';


const Card = ({id,img,name,title,amount}) => {
    return(
        <div className='w-[250px] border-[1px] border-header-300 rounded-tl rounded-br'>
           <div className='w-5/6 m-auto flex flex-col items-center justify-center my-3'>
                <div className='mb-3'>
                    <img src={img} alt='Flowery' />
                </div>
                <div className='w-full'>
                    <div className='flex items-center justify-between mb-2'>
                        <p className='text-header-300 text-100 font-bold font-circular'>{title}</p>
                        <img src={Menu} alt='menu' />
                    </div>
                    <p className='mb-2 font-circular text-header-300 text-400 font-normal'>{name}</p>
                    <div className='flex items-center justify-between mb-2'>
                        <p className='text-header-300 text-100 font-bold font-circular'>{amount}</p>
                        <img src={Etherum} alt='etherum' />
                    </div>
                </div>
           </div>
        </div>
    )
}

export default Card;