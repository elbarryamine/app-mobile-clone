import React from 'react';
import {AppProviders} from './provider';
// import Navigation from './navigation';
// import {TabNavigation} from '@components/navigation';
import {ProgressSlider} from '@components/slider';

export default function App() {
  return (
    <AppProviders>
      {/* <TabNavigation /> */}
      <ProgressSlider />
    </AppProviders>
  );
}
