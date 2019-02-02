import React from 'react';
import { ScrollView, Text, StyleSheet, View } from 'react-native';
import { getBoards } from '../services/Api';

export default class ListScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            boards: []
        };
    }

    getBoards = () => this.state.boards.map(b => {
        return (
            <View key={b.id}>
                <Text>{b.title}</Text>
                <Text>{b.desc}</Text>
            </View>
        );
    })

    componentDidMount() {
        const boards = getBoards();
        this.setState({
            boards
        });
    }

    render() {
        const boards = this.getBoards();

        return (
            <ScrollView style={styles.container}>
                {boards}
            </ScrollView>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 15,
        backgroundColor: '#fff',
    }
});