import React from 'react';
// import ReactDOM from 'react-dom';
import App from './App';
import PlayersList from './components/PlayersList';
import { render } from "@testing-library/react";

// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });

test('renders App without crashing', () => {
  render(<App />);
});

test('title displays on the page', () => {
  const { getByText } = render(<App />);
  const title = getByText(/women's world cup players/i);
  // expect(title).toBeInTheDocument();
});

test('players displays on the page', () => {
  const { queryByText } = render(<PlayersList />);
  const players = queryByText(/player/i);
  // expect(players).toBeInTheDocument();
});
