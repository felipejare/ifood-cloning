import { StatusBar } from 'expo-status-bar';
import { Fragment } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Routes from './src/routes';

export default function App() {
  return (
    <Fragment>
      <StatusBar style="auto" />
      <Routes />
    </Fragment>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

// começar e terminar pedidos ofertas e resolver erro do backend
