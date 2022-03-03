import React from 'react';
import {AppProviders} from './provider';
import Navigation from './navigation';

export default function App() {
  return (
    <AppProviders>
      <Navigation />
    </AppProviders>
  );
}
