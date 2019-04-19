import React from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';
import PropTypes from 'prop-types';

import { TodoForm } from '../components/TodoForm';
import { Header } from '../components/Header';

export const AddTodoScreen = (props) => {
    const { navigation } = props;
    const boardId = props.navigation.getParam('boardId');
    return (
        <View style={styles.container}>
            <ScrollView style={styles.container}>
                <TodoForm
                    navigation={navigation}
                    boardId={boardId}
                />
            </ScrollView>
        </View>
    );
};

AddTodoScreen.navigationOptions = () => {
    const title = 'New Todo';
    return {
        title,
        header: () => <Header title={title}></Header>,
    };
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

AddTodoScreen.propTypes = {
    navigation: PropTypes.object,
};
