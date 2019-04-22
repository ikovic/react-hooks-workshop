import React from 'react';
import { render, fireEvent } from 'react-testing-library';

import UseState from '../UseState';

describe('#UseState', () => {
  it('should handle input change', () => {
    const { getByTestId } = render(<UseState />);

    const input = getByTestId('testInput');

    expect(input.value).toBeFalsy();

    fireEvent.change(input, { target: { value: 'test' } });

    expect(input.value).toEqual('test');
  });
});
