import Hero from '../Hero/Hero';
import Sales from '../Sales/Sales';
import Sponsors from '../Sponsors/Sponsors';
import How from '../How/How';
import Explore from '../Explore/Explore';
import Cards from '../Cards/Cards';
import Collectors from '../Collectors/Collectors';
import Trending from '../Trending/Trending';

const Main = () => {
    return(
        <div className='bg-header-200'>
            <Hero />
            <Sales />
            <Sponsors />
            <How />
            <Explore />
            <Cards />
            <Collectors />
            <Trending />
        </div>
    )
}
export default Main;