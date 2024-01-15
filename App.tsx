import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import ScreenStacks from './src/screens';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';

const queryClient = new QueryClient();

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <QueryClientProvider client={queryClient}>
        <ScreenStacks />
      </QueryClientProvider>
    </NavigationContainer>
  );
}

export default App;
