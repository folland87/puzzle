import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { AvatarImg, AvatarFallback } from './styles';
/**
 * An avatar image.
 */
const Avatar = ({ src, name, ...rest }) => {
  const [error, setError] = useState(false);
  let fontSize;
  if (rest.size >= 128) {
    fontSize = 'hero';
  } else if (rest.size >= 64) {
    fontSize = 'huge';
  } else if (rest.size >= 32) {
    fontSize = 'large';
  } else {
    fontSize = 'medium';
  }
  return (
    (error || !src)
      ? (
        <AvatarFallback fontSize={fontSize} {...rest}>
          {(name) ? name.slice(0, 2).toUpperCase() : ''}
        </AvatarFallback>
      )
      : (<AvatarImg src={src} onError={() => setError(true)} {...rest} />)
  );
};

Avatar.propTypes = {
  /**
   * The source url of the avatar image
   */
  src: PropTypes.string,
  /**
   * A string that is sliced to generage letters to show
   * if no image is provided or image failed loading
   */
  name: PropTypes.string,
  /**
   * styled-system size generated width=height=props.size
   */
  size: PropTypes.number,
  /**
   * to set a squared avatar
   */
  square: PropTypes.bool,
};

Avatar.defaultProps = {
  size: 32,
};

export default Avatar;
