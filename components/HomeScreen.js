import React, { Component } from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';
import DateRangePicker from "react-native-daterange-picker";
import moment from "moment";

class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate1: null,
      endDate1: null,
      displayedDate: moment(),
    };
  }

  setDates = (dates) => {
    this.setState({
      ...dates,
    });
  };
  render() {
    const { startDate1, endDate1, displayedDate } = this.state;
    return(
      <View style={{...styles.container, flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Home Screen</Text>
        <DateRangePicker
          onChange={this.setDates}
          endDate1={endDate1}
          startDate1={startDate1}
          displayedDate={displayedDate}
          range
        >
          <Text>Click me!</Text>
        </DateRangePicker>
      </View>
    )
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});


export default HomeScreen;