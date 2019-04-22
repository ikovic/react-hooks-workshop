import React from 'react';
import { render, fireEvent } from 'react-testing-library';

import UseRef from '../UseRef';

describe('#UseRef', () => {
  it('should handle input change', () => {
    const { getByTestId, queryAllByTestId } = render(<UseRef />);

    const analyticsButton = getByTestId('analyticsButton');
    const clicksButton = getByTestId('clickButton');

    let analyticsEntries = queryAllByTestId('analyticsFragment');

    expect(analyticsEntries.length).toEqual(0);

    fireEvent.click(analyticsButton);
    analyticsEntries = queryAllByTestId('analyticsFragment');
    expect(analyticsEntries.length).toEqual(1);
    expect(analyticsEntries[analyticsEntries.length - 1].innerHTML.includes('0 clicks at')).toBeTruthy();

    fireEvent.click(clicksButton);
    fireEvent.click(clicksButton);
    fireEvent.click(clicksButton);

    fireEvent.click(analyticsButton);
    analyticsEntries = queryAllByTestId('analyticsFragment');
    expect(analyticsEntries.length).toEqual(2);
    expect(analyticsEntries[analyticsEntries.length - 1].innerHTML.includes('3 clicks at')).toBeTruthy();
  });
});
