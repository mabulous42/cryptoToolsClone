import React from 'react'

function HomePage() {
    return (
        <>
            <div className='body'>
                <div className='decentralized-outer-div py-5'>
                    <div className='decentralized py-3 d-flex'>
                        <div className='w-50 decentralized-content-div'>
                            <h4>Decentralized on Chain Protocol</h4>
                            <div>
                                Chain provides industry-leading Web3 and Blockchain a safe protocol and process encrypted by a superb encryption server.
                                Your information never leaves our sever or be visible to anyone It’s an end to end encryption with no human interaction
                            </div>
                            <div className='d-flex align-items-center'>
                                <p>Connect wallet then proceed to make your selection </p>
                                <button className='rounded-pill'>Connect Wallet</button>
                            </div>
                        </div>
                        <div className='w-50'>
                            <div className='decentralized-image-div'>
                                <img src={require('./images/cta-img-with-bg.png')} alt="" className='w-100' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomePage