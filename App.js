import React, { Component } from "react";
import { ScrollView, View, Text, TouchableOpacity , StyleSheet, SafeAreaView, StatusBar, Button} from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import AddBookScreen from "./components/AddBookScreen";
import BooksScreen from "./components/BooksScreen";
// import AddEmployeeModal from "./components/AddEmployee";
// import Header from "@mindinventory/rn-top-navbar";
import { NavigationContainer} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from "./components/HomeScreen";
import CustomerScreen from "./components/Customer";
import  Icon  from "react-native-vector-icons/FontAwesome";

class App extends Component {
  render() {
    const Tab = createBottomTabNavigator();
    return (
      <SafeAreaView style={styles.container_2}>
        <StatusBar
          barStyle="dark-content"
          animated={true}
          backgroundColor="#FF6347" />

        <NavigationContainer>
          <Tab.Navigator style={styles.tabStyle}>
            <Tab.Screen
              name="Home"
              component={HomeScreen}
              options={{
                tabBarIcon: ({color, size}) => (
                  <Icon name="home" color={color} size={size} />
                )
              }}/>
            <Tab.Screen 
              activeColor="red"
              name="Customers" 
              component={CustomerScreen}
              options={{
                tabBarIcon: ({color, size}) => (
                  <Icon name="user" color={color} size={size} />
                )
              }}/>
            <Tab.Screen 
              name="Settings"
              component={HomeScreen}
              options={{
                tabBarIcon: ({color, size}) => (
                  <Icon name="cog" color={color} size={size} />
                )
              }} />
          </Tab.Navigator>
        </NavigationContainer>

      </SafeAreaView>
      
    );
  }
}

const styles = StyleSheet.create({
  container_2: {
    flex: 1,
    // paddingTop: StatusBar.currentHeight,
  },
  container: {
    marginTop: 10,
    flexDirection: "row",
    alignItems: "center"
  },
  button: {
    borderRadius: 2,
    padding: 10,
    width: 100,
    marginLeft: 10,
    alignItems: 'center',
    backgroundColor: "blue",
  },
  buttonText: {
    color: 'white',
    paddingVertical: 6,
    paddingHorizontal: 10,
    fontSize: 16,
  },
  tabStyle: {
    fontSize: 16,
    borderColor: 'red'
  }
})


export default App;
