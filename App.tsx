import React from 'react';
import {SafeAreaView, StatusBar, useColorScheme} from 'react-native';
import {ThemeProvider} from 'styled-components/native';
import {theme} from './src/themes';
import {Text, Card} from './src/components';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaView>
      <ThemeProvider theme={theme}>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <Card
          bg={'primary.100'}
          height="full"
          alignItems="center"
          justifyContent="center">
          <Text fontSize={'xl'} color="text.500" fontWeight="bold">
            Test
          </Text>
        </Card>
      </ThemeProvider>
    </SafeAreaView>
  );
}

export default App;
