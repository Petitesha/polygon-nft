import Creators from '../Creators/Creators';
import {creatorImg} from '../Index/Index';

const Collectors = () => {
    return(
        <div className='w-full'>
            <h3 className='font-medium text-300 text-header-300 font-circular text-center'>Top Creators/Collections</h3>
            <div className='w-5/6 m-auto grid grid-cols-16 gap-5'>
            {creatorImg.map((item) => (
                    <Creators
                    {...item}
                    key={item.id}
                    />
                ))}
            </div>
        </div>
    )
}

export default Collectors;