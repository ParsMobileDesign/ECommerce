import React from 'react'
import {withRouter} from 'react-router-dom'
import './menu-item.style.scss'

const MenuItem = ({ title, imageUrl, size, key,linkUrl,history,match }) => {
    return <div className={`${size} menu-item`} key={key} onClick={()=>history.push(`${match.url}${linkUrl}`)}>
        <div className='background-image' style={{ backgroundImage: `url(${imageUrl})` }} />
        <div className="content">
            <p className="title">{title.toUpperCase()}</p>
            <h2 className="subtitle">Shop Now</h2>
        </div>
    </div>
}
export default withRouter(MenuItem);