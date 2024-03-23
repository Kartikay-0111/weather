import React from 'react'
import 'w3-css/w3.css';

export default function Card(props) {
    if (!props.content) {
        return <div>No content available</div>;
    }

    return (
        <div>
            <div className="w3-center w3-xxlarge city"><img style={{height:"30x"}}  src="location.png" alt="icon" />{props.city}</div>
            <div className="w3-center png">
                <img style={{ height: "150px" }} src={props.icon} alt="image" />
                <div className="w3-xxxlarge temp">{Math.floor(props.content.main.temp)}&deg;c</div>
                <div className='w3-round-xlarge w3-red'>
                    <div className="w3-padding w3-center w3-row ">
                        <div className='w3-third' ><img style={{ height: "25px" }} src="humidity.png" alt="" /><p>Humidity</p><p>{props.content.main.humidity} &nbsp;%</p> </div>
                        <div className='w3-third' ><img style={{ height: "25px" }} src="wind.png" alt="" /><p>Wind Speed</p><p>{props.content.wind.speed} km/hr</p> </div>
                        <div className='w3-third' ><img style={{ height: "25px" }} src="pressure.png" alt="" /><p>Pressure</p><p>{props.content.main.pressure}&nbsp;mb</p> </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
