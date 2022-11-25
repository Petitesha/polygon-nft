import Avatar from '../../Assets/Images/avatar.png';

const Trending = () => {
    return(
        <div className="mt-10 w-full ">
            <div className='w-5/6 m-auto'>
                <div>
                    <h3 className="font-medium text-300 text-header-300 font-circular text-center">Hot & Trending</h3>
                    <p className='w-3/4 m-auto text-100 text-header-500 font-normal font-circular text-center pb-5'>Start with the least complex and most secure stage to buy and trade progressed workmanships and NFT’s. Be a part of the most popular premium arts.</p>
                </div>
                <div className="bg-header-100 ">
                    <div className="p-10">
                        <div className="w-50 h-50 bg-Hot bg-no-repeat ">
                            <div className='flex justify-between items-center'>
                                <div>
                                    <img className='rotate-90' src={Avatar} alt='Avatar' />
                                </div>
                                <div>
                                    <p>Time Remaining</p>
                                    <p>12h:45mins:38secs</p>
                                </div>
                            </div>
                            <div>
                                <div>
                                    <p>2.89ETH</p>
                                </div>
                                <div>
                                    <p>Place Bid</p>
                                </div>
                            </div>
                        </div>
                        <div></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Trending;