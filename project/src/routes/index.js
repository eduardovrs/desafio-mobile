import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Welcome from '../pages/Welcome';
import SignIn from '../pages/Signin';
import Register from '../pages/Register';
import Profile from '../pages/Profile';

const Stack = createNativeStackNavigator();

export default function Routes() {
    return(
        <Stack.Navigator>
            <Stack.Screen name= "Welcome" component={Welcome} options={{ headerShown: false }}/>
            <Stack.Screen name= "SignIn" component={SignIn} options={{ headerShown: false }}/> 
            <Stack.Screen name= "Register" component={Register} options={{ headerShown: false }}/>
            <Stack.Screen name= "Profile" component={Profile} options={{ headerShown: false }}/>
        </Stack.Navigator>
    )
}