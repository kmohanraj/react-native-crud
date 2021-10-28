import React, { Component } from 'react';
import { Modal, View, Text, TextInput, StyleSheet,TouchableOpacity, Alert } from 'react-native';
import DateRangePicker from 'react-native-daterange-picker';
import axios from 'axios';


class AddCustomerModal extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: "",
      salary: "",
      age: "",
      endDate: null,
      startDate: null,
      loading: false,
      errorMessage: ""
    };
  }

  setDates = (dates) => {
    this.setState({
      ...dates,
    });
  };

  handleChange = (value, state) => {
    this.setState({ [state]: value})
  }

  renderAlert(text, message) {
    Alert.alert(text, message, [{
      text: 'OK',
    }], { cancelable: false});
  }

  createCustomer = () => {
    console.log("======================");
    const { name, experience, startDate, endDate, displayedDate, skills, salary } = this.state;
    this.setState({ errorMessage: "", loading: true })
    const data = {
      firstName: "Mohan",
      lastName: "k"
    }
    if(name && experience) {
      axios.post('http://192.168.225.128:3001/api/v1/customers', data)
      .then(response => { 
        console.log(response.status)
        this.renderAlert('Success', 'Order created successfully')
        this.props.closeModal();
      })
      .catch(error => {
        console.log(error)
        this.renderAlert('Failed', error)
      });
    }
  }

  render() {
    const { isOpen, closeModal } = this.props;
    const { loading, errorMessage } = this.state;
    return(
      <Modal
        visible={isOpen}
        onRequestClose={closeModal}
        animationType="slide"
      >
        <View style={styles.container}>
          <Text style={styles.title}>Add Customer</Text>
          <TextInput
            style={styles.textBox}
            onChange={(text) => this.handleChange(text, "name")}
            placeholder="Full Name" />
          
          <TextInput
            style={styles.textBox}
            onChange={(text) => this.handleChange(text, "experience")}
            placeholder="Experience" />
          <TextInput 
            style={styles.textBox}
            onChange={(text) => this.handleChange(text, "skills")}
            placeholder="Skills" />
          <TextInput
            keyboardType="numeric"
            style={styles.textBox}
            onChange={(text) => this.handleChange(text, "salary")}
            placeholder="Salary" />
          <TextInput
            keyboardType="numeric"
            style={styles.textBox}
            onChange={(text) => this.handleChange(text, "salary")}
            placeholder="Salary" />

          {loading ? <Text
            style={styles.message}>please Wait...</Text> : errorMessage ? <Text
                  style={styles.message}>{errorMessage}</Text> : null}

          <View style={styles.buttonContainer}>
            <TouchableOpacity
              onPress={this.createCustomer}
              style={{...styles.button}}>
              <Text style={styles.buttonText}>Create</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={closeModal}
              style={{...styles.button, marginLeft: 10, backgroundColor: "tomato"}}>
                <Text style={styles.buttonText}>Cancel</Text>
              </TouchableOpacity>
          </View>
        </View>
      </Modal>
    )
  }

}

const styles = StyleSheet.create ({
  container: {
    padding: 15
  },
  buttonContainer: {
    marginTop: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
    marginBottom: 20
  },
  button: {
    borderRadius: 5,
    marginVertical: 20,
    alignSelf: 'flex-start',
    backgroundColor: "gray"
  },
  buttonText: {
    color: "white",
    paddingVertical: 6,
    paddingHorizontal: 10,
    fontSize: 16
  },
  textBox: {
    borderWidth: 1,
    borderRadius: 6,
    borderColor: "rgba(0,0,0,0.3)",
    marginBottom: 15,
    fontSize: 18,
    padding: 10
  },
  message: {
    color: "tomato",
    fontSize: 17
  }
})

export default AddCustomerModal;