import Hero from '../Hero/Hero';
import Sales from '../Sales/Sales';
import Sponsors from '../Sponsors/Sponsors';
import How from '../How/How';
import Explore from '../Explore/Explore';

const Main = () => {
    return(
        <div className='bg-header-200'>
            <Hero />
            <Sales />
            <Sponsors />
            <How />
            <Explore />
        </div>
    )
}
export default Main;