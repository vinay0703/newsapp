import React from 'react'
import loading from './loading.gif'

const Spinner = ()=>{
        return (
            <div className="container my -3 text-center">
                <img src={loading} alt="loading" />
            </div>
        )
}

export default Spinner
