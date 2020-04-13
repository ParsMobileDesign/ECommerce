import React from 'react'
import {Link} from 'react-router-dom'
import Directory from '../../components/directory/directory.component'
import './homePage.style.scss'

const HomePage = (props) => {
    console.log(props);
    return <div className="homepage">
        <Directory />
        
    </div>;
}
export default HomePage;