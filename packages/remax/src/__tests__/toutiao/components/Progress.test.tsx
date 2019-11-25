import * as React from 'react';
import TestRenderer from 'react-test-renderer';
import Progress from '../../../adapters/toutiao/components/Progress';

describe('Progress', () => {
  it('render correctly', () => {
    const testRenderer = TestRenderer.create(<Progress />);

    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});
