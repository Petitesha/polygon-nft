// import Art from '../../Assets/Images/Art.png';
// import Sports from '../../Assets/Images/Sports.png';
// import Music from '../../Assets/Images/Music.png';
// import Video from '../../Assets/Images/Video.png';
// import More from '../../Assets/Images/More.png';

const Explore = () => {
    return(
        <div className="w-5/6 mt-7">
            <h4 className='font-circular font-medium text-header-300 text-300 text-center mb-2'>Explore Marketplace</h4>
            <div className='flex justify-between items-cente'>
                <div className='w-2/12 h-2.5 bg-Art bg-no-repeat bg-cover'>
                    <h3>Art</h3>
                </div>
                <div className='w-2/12 h-2.5 bg-Sports bg-no-repeat bg-cover'>
                    <h3>Sports</h3>
                </div>
                <div className='w-2/12 h-2.5 bg-Music bg-no-repeat bg-cover'>
                    <h3>Music</h3>
                </div>
                <div className='w-2/12 h-2.5 bg-Videos bg-no-repeat bg-cover'>
                    <h3>Videos</h3>
                </div>
                <div className='w-2/12 h-2.5 bg-More bg-no-repeat bg-cover'>
                    <h3>More</h3>
                </div>
            </div>
        </div>
    )
}
export default Explore;