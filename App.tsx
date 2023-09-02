/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Login from './screens/Login';
import FormHours from './screens/FormularioHoras';
import FormNov from './screens/FormularioNovedades';
import FormPrincipal from './screens/FormularioPrincipal';
import FormView from './screens/FormularioVisualizacion';
import FormularioConsultaHoras from './screens/FormularioConsultaHoras';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="FormPrincipal" component={FormPrincipal} />
        <Stack.Screen name="FormHours" component={FormHours} />
        <Stack.Screen name="FormNov" component={FormNov} />
        <Stack.Screen name="FormView" component={FormView}/>
        <Stack.Screen name="FormularioConsultaHoras" component={FormularioConsultaHoras}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};


export default App;
