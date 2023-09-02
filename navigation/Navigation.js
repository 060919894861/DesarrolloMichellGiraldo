import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Login from '../screens/Login';
import FormularioHoras from '../screens/FormularioHoras';
import FormularioNovedades from '../screens/FormularioNovedades';
import FormularioVisualizacion from '../screens/FormularioVisualizacion';

const Stack = createStackNavigator();

const MyStack = () => {
return (
<NavigationContainer>
    <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="FormHours" component={FormularioHoras} />
        <Stack.Screen name="FormNov" component={FormularioNovedades} />
        <Stack.Screen name="FormView" component={FormularioVisualizacion} />
    </Stack.Navigator>
</NavigationContainer>
)
};

export default MyStack;