import React from 'react';
import { HistoryRouter as Router } from 'redux-first-history/rr6';
import { history } from '../../store/root';
export const CustomRouter: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <Router history={history}>
      {children}
    </Router>
  );
};
