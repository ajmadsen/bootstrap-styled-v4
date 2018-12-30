/**
 * ListGroup component
 */


import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

const handleDisabledOnClick = (e) => {
  e.preventDefault();
};
export const defaultProps = {
  tag: 'li',
};
export const propTypes = {
  /**
   * @ignore
   */
  className: PropTypes.string,
  /** . */
  action: PropTypes.bool,
  active: PropTypes.bool,
  disabled: PropTypes.bool,
  /** Color variables. Can be: */
  color: PropTypes.oneOf([
    'success',
    'info',
    'warning',
    'danger',
    '',
  ]),
  /**
   * Replace the default component tag by the one specified. Can be:
   */
  tag: PropTypes.any,
  /**
   * Replace or remove a className from the component.
   * See example <a href="https://www.npmjs.com/package/map-to-css-modules" target="_blank">here</a>.
   */
  cssModule: PropTypes.object,
};
class ListGroupItem extends React.Component { // eslint-disable-line react/prefer-stateless-function
  static propTypes = propTypes;

  static defaultProps = defaultProps;

  render() {
    const {
      className,
      tag: Tag,
      active,
      disabled,
      action,
      color,
      ...attributes
    } = this.props;

    const classes = cn(
      className,
      active ? 'active' : false,
      disabled ? 'disabled' : false,
      action ? 'list-group-item-action' : false,
      color ? `list-group-item-${color}` : false,
      'list-group-item'
    );

    // Prevent click event when disabled.
    if (disabled) {
      attributes.onClick = handleDisabledOnClick;
    }
    return (
      <Tag {...attributes} className={classes} />
    );
  }
}

ListGroupItem.defaultProps = defaultProps;
ListGroupItem.propTypes = propTypes;

export default ListGroupItem;
