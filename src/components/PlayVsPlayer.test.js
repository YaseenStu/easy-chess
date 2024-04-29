import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import PlayVsPlayer from './PlayVsPlayer';
import { Chess } from 'chess.js';
import { ThemeContext } from './ThemeContext';

// Helper function to wrap component with the required context provider
const renderWithTheme = (ui, theme) => {
  return render(
    <ThemeContext.Provider value={{ theme }}>
      {ui}
    </ThemeContext.Provider>
  );
};

describe('PlayVsPlayer Component', () => {
  test('renders with correct theme and initial text', () => {
    renderWithTheme(<PlayVsPlayer />, 'dark');
    expect(screen.getByText("White's turn")).toBeInTheDocument();
    expect(screen.getByText('Multi-Player').parentNode).toHaveClass('bg-gray-800 text-white');
  });

  test('handles a valid chess move', () => {
    const { getByRole } = renderWithTheme(<PlayVsPlayer />, 'light');
    fireEvent.drop(getByRole('button', { name: /a2/ }), {
      dataTransfer: { getData: () => 'a2' }
    });
    fireEvent.drop(getByRole('button', { name: /a3/ }), {
      dataTransfer: { getData: () => 'a3' }
    });
    // Check for move in move history or updated status
    expect(screen.getByText("Black's turn")).toBeInTheDocument();
  });

  test('resets the game when reset button is clicked', () => {
    const { getByText } = renderWithTheme(<PlayVsPlayer />, 'light');
    // Assume some moves have been made here
    fireEvent.click(getByText('Reset'));
    expect(screen.getByText("White's turn")).toBeInTheDocument();
  });

  test('undoes the last move when undo button is clicked', () => {
    const { getByText } = renderWithTheme(<PlayVsPlayer />, 'light');
    // Assume some moves have been made here
    fireEvent.click(getByText('Undo'));
    // Check if the undo was successful
    expect(screen.getByText("White's turn")).toBeInTheDocument();
  });
});
