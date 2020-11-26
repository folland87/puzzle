import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { AvatarImg, AvatarFallback } from './styles';
/**
 * An avatar image.
 */
const Avatar = ({ src, name, ...rest }) => {
  const [error, setError] = useState(false);
  rest.fontSize = rest.size >= 128 ? 'hero' : rest.size >= 64 ? 'huge' : rest.size >= 32 ? 'large' : 'medium';
  console.log(error);
  return (
    (error | !src)
      ? (
        <AvatarFallback {...rest}>
          {(name) ? name.slice(0, 2).toUpperCase() : ''}
        </AvatarFallback>
      )
      : (<AvatarImg src={src} onError={() => setError(true)} {...rest} />)
  )
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
}

Avatar.defaultProps = {
  size: 32,
}
/* @component */
export default Avatar;
