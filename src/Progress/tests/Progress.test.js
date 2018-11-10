/**
 * Testing our Progress component
 */
import { ThemeProvider } from 'styled-components';
import { mount } from 'enzyme';
import React from 'react';
import theme from '../../theme';
import Progress from '../index';
import ProgressBar from '../ProgressBar';

const renderComponent = (props = {}) => mount(
  <Progress>
    {props.children}
  </Progress>
);

const renderComponentUsingTheme = (props = {}) => mount(
  <ThemeProvider theme={theme}>
    <Progress>
      {props.children}
    </Progress>
  </ThemeProvider>
);

describe('<Progress />', () => {
  it('should render an <Progress> tag without a theme', () => {
    const renderedComponent = renderComponent({
      children: <ProgressBar />,
    });
    expect(renderedComponent.find('ProgressUnstyled').length).toBe(1);
  });
  it('should render a <Progress> tag with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children: <ProgressBar />,
    });
    expect(renderedComponent.find('Progress').length).toBe(1);
  });
});
