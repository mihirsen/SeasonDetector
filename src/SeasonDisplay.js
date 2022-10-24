import React from "react";
import './SeasonDisplay.css';

const SeasonConfig ={
    Summer: {
        text : 'lets hit the beach!',
        iconName : 'sun'
    },
    Winter: {
        text : 'Brrr, It is Cold!!!',
        iconName: 'snowflake'
    }
};

const getSeason = (lat , month) => {
     
    if (month > 2 && month < 9){
       return lat > 0 ? 'Summer' : 'Winter';
    }
    else{

        return lat > 0 ? 'Winter' : 'Summer';
    }
}

const SeasonDisplay = (props) => {
    const Season = getSeason(props.lat , new Date().getMonth());
    const {text,iconName} = SeasonConfig[Season];
    return (<div className={`Season-display ${Season}`}> 
        <i className={`icon-left massive ${iconName} icon`}/>
        <h1>{text}</h1>
        <i className={`icon-right massive ${iconName} icon`}/>
        </div>
        );
};

export default SeasonDisplay;