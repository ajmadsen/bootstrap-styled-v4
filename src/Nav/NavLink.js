import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import mapToCssModules from 'map-to-css-modules';
import A from '../A';

export const defaultProps = {
  tag: A,
};
export const propTypes = {
  /**
   * @ignore
   */
  className: PropTypes.string,
  /** Use that property to pass a ref callback to the native button component. */
  ref: PropTypes.func,
  /** Toggles disabled CSS style. */
  disabled: PropTypes.bool,
  /** Toggles active CSS style. */
  active: PropTypes.bool,
  /** Call specified function when on click event is triggered. */
  onClick: PropTypes.func,
  /** Replace the default component tag reference by the one specified. */
  href: PropTypes.any,
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
class NavLink extends React.Component { // eslint-disable-line react/prefer-stateless-function
  static propTypes = propTypes;

  static defaultProps = defaultProps;

  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick(e) {
    if (this.props.disabled) {
      e.preventDefault();
      return;
    }

    if (this.props.href === '#') {
      e.preventDefault();
    }

    if (this.props.onClick) {
      this.props.onClick(e);
    }
  }

  render() {
    const {
      className,
      cssModule,
      active,
      tag: Tag,
      ref,
      ...attributes
    } = this.props;

    const classes = mapToCssModules(classNames(
      className,
      'nav-link',
      {
        disabled: attributes.disabled,
        active,
      }
    ), cssModule);

    return (
      <Tag {...attributes} ref={ref} onClick={this.onClick} className={classes} />
    );
  }
}

NavLink.defaultProps = defaultProps;
NavLink.propTypes = propTypes;

export default NavLink;
