import React from 'react';

const Quality = ({name, color}) => {

const getBadgeClass = (color) => {
    let classes = "badge m-2 bg-";
    classes += color;
    return classes;
}
    return ( 
        <span className={getBadgeClass(color)}>{name}</span>
     );
}
 
export default Quality;