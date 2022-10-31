import HeroImg from '../../Assets/Images/Hero-img.png';
import Button from '../Button/Button';
import Arrow from '../../Assets/Images/Arrow.svg';

const Hero = () => {
    return(
        <div className='pt-9 mb-5'>
            <div className='w-5/6 m-auto flex justify-between '>
                <div>
                    <div className='w-3/5 mb-3'>
                        <h3 className='text-200 text-header-300 font-bold font-circular'>Create, Discover & Collect Rare Digital Arts And NFT’s</h3>
                    </div>
                    <div className='w-9/12 text-100 mb-5 text-header-500 font-circular'>
                        <p>Non fungible Tokens are digital art assets that represents in real world as foun in music, arts, in-games assets and videos digitally stored in blockchain.</p>
                    </div>
                    <div className='w-3/6 flex justify-between items-center my-4'>
                        <Button />
                        <div className='flex '>
                            <span className='mr-5 text-header-100 font-medium'>Explore More </span>
                            <img src={Arrow} alt='arrow' />
                        </div>
                    </div>
                </div>
                <div className='w-7/12 h-5/12'>
                    <img src={HeroImg} alt='hero-img' className='w-full h-full'/>
                </div>
            </div>
        </div>
    )
}
export default Hero;