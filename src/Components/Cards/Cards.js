import Card from '../Card/Card';
import {details} from '../Index/Index';

const Cards = () => {
    return(
        <div className='w-full mt-5 mb-8'>
          <div className='w-5/6 m-auto grid grid-cols-16 gap-5'>
          {details.map((item) => (
                <Card
                  {...item}
                  key={item.id}
                />
              ))}
          </div>
        </div>
    )
}

export default Cards;