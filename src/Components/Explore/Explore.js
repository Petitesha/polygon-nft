// import Art from '../../Assets/Images/Art.png';
// import Sports from '../../Assets/Images/Sports.png';
// import Music from '../../Assets/Images/Music.png';
// import Video from '../../Assets/Images/Video.png';
// import More from '../../Assets/Images/More.png';

const Explore = () => {
    return(
        <div className="w-5/6 m-auto py-9">
            <h4 className='font-circular font-medium text-header-300 text-300 text-center mb-2'>Explore Marketplace</h4>
            <div className=' flex justify-between items-center'>
                <div className='w-52 h-32 bg-Art bg-no-repeat bg-cover flex justify-center items-center rounded-br-lg hover:blur-[1px]'>
                    <h3 className="text-header-400 text-300 ">Art</h3>
                </div>
                <div className='w-52 h-32 bg-Sports bg-no-repeat bg-cover flex justify-center items-center rounded-br-lg hover:blur-[1px]'>
                    <h3 className="text-header-400 text-300">Sports</h3>
                </div>
                <div className='w-52 h-32 bg-Music bg-no-repeat bg-cover flex justify-center items-center rounded-br-lg hover:blur-[1px]'>
                    <h3 className="text-header-400 text-300">Music</h3>
                </div>
                <div className='w-52 h-32 bg-Videos bg-no-repeat bg-cover flex justify-center items-center rounded-br-lg hover:blur-[1px]'>
                    <h3 className="text-header-400 text-300">Videos</h3>
                </div>
                <div className='w-52 h-32 bg-More bg-no-repeat bg-cover flex justify-center items-center rounded-br-lg hover:blur-[1px]'>
                    <h3 className="text-header-400 text-300">More</h3>
                </div>
            </div>
        </div>
    )
}
export default Explore;