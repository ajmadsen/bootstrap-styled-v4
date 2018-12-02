/**
 * FigCaption component
 */


import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import styled from 'styled-components';
import omit from 'lodash.omit';
import bsTheme from 'bootstrap-styled/lib/theme';

class FigCaptionUnstyled extends React.Component { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    /* eslint-disable react/no-unused-prop-types */
    children: PropTypes.node,
    className: PropTypes.string,
    right: PropTypes.bool,
    theme: PropTypes.object,
    /* eslint-enable react/no-unused-prop-types */
  };

  static defaultProps = {
    theme: bsTheme,
  };

  render() {
    const {
      className,
      children,
      right,
      ...rest
    } = omit(this.props, ['theme']);

    const classes = cn('figure-caption', className,
      right ? 'text-right' : null
    );
    return (
      <figcaption
        className={classes}
        {...rest}
      >
        {children}
      </figcaption>
    );
  }

}

const FigCaption = styled(FigCaptionUnstyled)`
  ${(props) => `
    &.figure-caption {
      font-size: ${props.theme['$figure-caption-font-size']};
      color: ${props.theme['$figure-caption-color']};
    }
  `}
`;

/** @component */
export default FigCaption;

