import React from 'react'

const StaticText = ({firstText, secondText}) => {
    return (
        <>
            <p className="text-rotate">{firstText}</p>
            <p className="text-rotate">{secondText}</p>
        </>
    )
}

export default StaticText;
