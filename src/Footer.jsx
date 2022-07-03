import React from 'react'

const Footer = () => {
    let year = new Date ().getFullYear();
  return (
    <>
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-4 col-md-2">
                    <footer>
                    <p className="text-center ms-5">© {year}</p>
                    </footer>
                </div>
            </div>
        </div>
    </>
  )
}

export default Footer