import React from 'react'
import logo from './logo.png'
let Header = () => {
    return (
        <>

            <div className="row">
                <div className="col-12 col-md-12">
                    <header>
                        <img src={logo} alt="logo" width="60px" className='ms-3'/>
                        <span className='ms-1'>S keep</span>
                    </header>
                </div>
            </div>

        </>
    )
}
export default Header;
