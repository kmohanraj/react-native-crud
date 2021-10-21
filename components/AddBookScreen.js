import React, { Component } from "react";
import { Button, View, Text } from "react-native";

class AddBookScreen extends Component {
  static navigationOptions = {
    title: 'Add Book',
  };

  render() {
    return(
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Add Book</Text>
        <Button
        title="Add Book"
        onPress={() => this.props.navigation.push('AddBook')}
        />
        <Button
        title="Go to Books"
        onPress={() => this.props.navigation.push('Book')}
        />
      </View> 
    )
  }
}

export default AddBookScreen;