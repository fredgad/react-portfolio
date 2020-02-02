import React from 'react' 
import './Navigation.scss'

export const Navigation = () => {
    return (
        <div id="nav" className="props.navClass">    
            <div className="props.hideCircleClass">
                <div className="props.circleClass"></div>
            </div>   
        {/* v-for="(item, i) in props.navArr" */}
        <div className="props.navbarClass">
            <div  key="i" className="item.lineClass">
                    <div
                    to="to"
                    active-class="active" 
                    data-r="rName" 
                    data-e="eName" 
                    className="L">
                    {/* {eName} */}
                    </div>     
                </div>
            </div>

            <div id="navButton" click="navEvent">
                <div className="top"></div>
                <div className="mid"></div>
                <div className="bot"></div> 
            </div>
        </div> 
    )
}