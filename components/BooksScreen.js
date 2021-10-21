import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';


class BooksScreen extends Component {
    static navigationOptions = {
        title: 'Book List',
    };

    render() {
        return(
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Text>Book List </Text>
                <Button 
                 title="Book Details"
                 onPress={() => this.props.navigation.navigate('BookDetails')}
                 />
                 <Button
                 title="Add Book"
                 onPress={() => this.props.navigation.navigate('AddBook')}
                 />
            </View>
        )
    }
}

export default BooksScreen;