import { ThemeProvider } from 'styled-components';
import { mount } from 'enzyme';
import React from 'react';
import theme from '../../theme';
import Summary from '../index';

const children = (<h1>Test</h1>);

const renderComponent = (props = {}) => mount(
  <Summary {...props} />
);

const renderComponentUsingTheme = (props = {}) => mount(
  <ThemeProvider theme={theme}>
    <Summary {...props} />
  </ThemeProvider>
);

describe('<Summary />', () => {
  it('should render an <Summary> tag without a theme', () => {
    const renderedComponent = renderComponent({
      children,
    });
    expect(renderedComponent.find('summary').length).toBe(1);
  });
  it('should have children without a theme', () => {
    const renderedComponent = renderComponent({
      children,
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
  it('should render a <summary> tag with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
    });
    expect(renderedComponent.find('summary').length).toBe(1);
  });
  it('should have children with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
});
