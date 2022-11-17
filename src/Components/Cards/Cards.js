import Card from '../Card/Card';
import details from '../Index/Index';

const Cards = () => {
    return(
        <div>
           {details.map((item) => (
                <Card
                  {...item}
                  key={item.id}
                />
              ))}
        </div>
    )
}

export default Cards;