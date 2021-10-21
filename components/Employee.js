import React, { Component } from 'react';
import { ScrollView, View, Text, TouchableOpacity , StyleSheet, SafeAreaView, StatusBar, Button} from "react-native";
import AddEmployeeModal from "./AddEmployee";

class EmployeeScreen extends Component {

  state = {
    isAddEmployeeModalOpen: false
  }
  
  toggleAddEmployeeModal = () => {
    this.setState({ isAddEmployeeModalOpen: !this.state.isAddEmployeeModalOpen });
  }

  render() {
    const { isAddEmployeeModalOpen} = this.state ;
    return(
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ScrollView>
          <View style={styles.container}>
            <TouchableOpacity
              style={{...styles.button}}
              onPress={this.toggleAddEmployeeModal}>
              <Text style={styles.buttonText}>Add Employee</Text>
            </TouchableOpacity>
          </View>

          {isAddEmployeeModalOpen ? <AddEmployeeModal
            isOpen={isAddEmployeeModalOpen}
            closeModal={this.toggleAddEmployeeModal}
            addEmployee={this.addEmployee}
            /> : null}
        </ScrollView>
      </View>
    )
  }

}

const styles = StyleSheet.create({
    container_2: {
      flex: 1,
      paddingTop: StatusBar.currentHeight,
    },
    container: {
      marginTop: 10,
      flexDirection: "row",
      alignItems: "center"
    },
    button: {
      borderRadius: 2,
      padding: 10,
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
  })
  
export default EmployeeScreen;