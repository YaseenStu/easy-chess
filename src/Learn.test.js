import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Learn from './Learn';
import { ThemeContext } from './components/ThemeContext';

describe('Learn', () => {
  it('renders the Learn component with correct data', () => {
    const { getByText, getByAltText } = render(
      <ThemeContext.Provider value={{ theme: 'light' }}>
        <Learn />
      </ThemeContext.Provider>
    );

    // Check if the title is rendered correctly
    expect(getByText('Learn Chess')).toBeInTheDocument();

    // Check if the three sections are rendered correctly
    expect(getByText('Chess Basics')).toBeInTheDocument();
    expect(getByText('Tactics')).toBeInTheDocument();
    expect(getByText('Opening Strategies')).toBeInTheDocument();

    // Check if the images are rendered correctly
    expect(getByAltText('Chess basics')).toHaveAttribute('src', ChessBasicImage);
    expect(getByAltText('Chess tactics')).toHaveAttribute('src', ChessTacticsImage);
    expect(getByAltText('Chess openings')).toHaveAttribute('src', ChessOpeningsImage);
  });

  it('navigates to the correct route when clicking on a section', () => {
    const navigate = jest.fn();
    const { getByText } = render(
      <ThemeContext.Provider value={{ theme: 'light' }}>
        <Learn navigate={navigate} />
      </ThemeContext.Provider>
    );

    // Simulate a click on the "Chess Basics" section
    fireEvent.click(getByText('Chess Basics'));

    // Check if the navigate function was called with the correct argument
    expect(navigate).toHaveBeenCalledWith('/chess-basics');
  });
});
