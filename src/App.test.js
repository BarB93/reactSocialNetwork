import React from 'react'
import ReactDOM from 'react-dom';
import SamuraiApp from "./App";

test('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<SamuraiApp />, div)
  ReactDOM.unmountComponentAtNode(div)

 /* render(<SamuraiApp />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();*/
});
