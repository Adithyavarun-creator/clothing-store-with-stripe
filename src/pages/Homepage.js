import React from 'react'
import './Homepage.styles.scss'

import Directory from '../components/Directory'

//passing history from App.js content

const Homepage = () =>{
    return(
        <div className="homepage">
        <Directory />
        </div>
    )
    }

    export default Homepage