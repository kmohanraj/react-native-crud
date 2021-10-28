import React, { Component } from 'react';
import { ScrollView, View, Text, TouchableOpacity , StyleSheet, SafeAreaView, StatusBar, Button} from "react-native";
import AddCustomerModal from "./CreateOrder";
import { Card } from 'react-native-elements';
import axios from 'axios';
import  Icon  from "react-native-vector-icons/FontAwesome";


class CustomerScreen extends Component {

  state = {
    loading: false,
    errorMessage: "",
    isAddCustomerModalOpen: false,
    customers: []
  }

  componentDidMount() {
    this.getCustomers()
    .then(response => {
      console.log("---------------")
      console.log(response)
    })
  }
  

  getCustomers = () => {
    this.setState({ errorMessage: "", loading: true})
    axios.get('http://192.168.225.128:3001/api/v1/customers')
    .then(response => this.setState({
      customers: response.data,
      loading: false
    }))
  }

  toggleAddCustomerModal = () => {
    this.setState({ isAddCustomerModalOpen: !this.state.isAddCustomerModalOpen });
  }

  render() {
    const { customers, errorMessage,loading, isAddCustomerModalOpen} = this.state ;
    return(
      // <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      //   <ScrollView>
      //     <View style={styles.container}>
      //       <TouchableOpacity
      //         style={{...styles.button}}
      //         onPress={this.toggleAddCustomerModal}>
      //         <Text style={styles.buttonText}>Add Customer</Text>
      //       </TouchableOpacity>
      //     </View>

      //     {isAddCustomerModalOpen ? <AddCustomerModal
      //       isOpen={isAddCustomerModalOpen}
      //       closeModal={this.toggleAddCustomerModal}
      //       addCustomer={this.addCustomer}
      //       /> : null}
      //   </ScrollView>
      // </View>

      <ScrollView>
        <View style={styles.container}>
          <TouchableOpacity
            style={{...styles.button}}
            onPress={this.toggleAddCustomerModal}>
            <Text style={styles.buttonText}><Icon name="plus" /></Text>
          </TouchableOpacity>
        </View>
        {customers.map((data, index) => 
        <View key={data.id} style={styles.cardStyle}>
          <Card>
            <Text>{data.firstName}</Text>
          </Card>
        </View>
        )}

        {loading ? <Text>Please wait ...</Text> : errorMessage ? <Text>{errorMessage}</Text>: null}
        {isAddCustomerModalOpen ? <AddCustomerModal
            isOpen={isAddCustomerModalOpen}
            closeModal={this.toggleAddCustomerModal}
            addCustomer={this.addCustomer}
            /> : null}
      </ScrollView>
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
      alignItems: "center",
      marginRight: 15,
      alignSelf: 'flex-end'
    },
    button: {
      borderRadius: 2,
      padding: 10,
      marginLeft: 10,
      alignItems: 'center',
      alignSelf: 'flex-end',
      backgroundColor: "blue",
    },
    buttonText: {
      color: 'white',
      paddingVertical: 6,
      paddingHorizontal: 10,
      fontSize: 16,
    },
    cardStyle: {
      paddingBottom: 10
    }
  })
  
export default CustomerScreen;