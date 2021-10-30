import React from 'react'

const SocialIcons = ({link, source, alt, classImg}) => {
    return (
      <>
        <li className="icons">
          <a href={link}>
            <img src={source} alt={alt} className={classImg} />
          </a>
        </li>
      </>
    );
  };
  
export default SocialIcons
