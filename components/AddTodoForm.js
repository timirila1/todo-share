import React from 'react';
import {
    TextInput,
    View,
    Button,
    StyleSheet,
    Text
} from 'react-native';
import { addTodo } from '../services/Api';
import { colors } from '../services/consts';

export class AddTodoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            desc: ''
        }
    }

    submitForm = async () => {
        const { navigation, boardId } = this.props;
        const data = {
            board_id: boardId,
            ...this.state
        };
        try {
            await addTodo(data);
            navigation.goBack();
        } catch (e) {
            console.error(e);
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.fieldset}>
                    <Text style={styles.label}>Title</Text>
                    <TextInput
                        style={styles.input}
                        value={this.state.title}
                        onChangeText={title => this.setState({ title })}
                        maxLength={40}
                    />
                </View>
                <View style={styles.fieldset}>
                    <Text style={styles.label}>Description</Text>
                    <TextInput
                        style={styles.input}
                        multiline={true}
                        numberOfLines={4}
                        value={this.state.desc}
                        onChangeText={desc => this.setState({ desc })}
                    />
                </View>
                <Button
                    title={'Add'}
                    onPress={this.submitForm}
                />
            </View>
        );
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        paddingLeft: 40,
    },
    fieldset: {
        marginBottom: 20
    },
    input: {
        paddingTop: 10,
        paddingRight: 10,
        paddingBottom: 10,
        borderBottomColor: colors.main,
        borderBottomWidth: 1,
        fontSize: 24,
    },
    label: {
        color: colors.textDark,
    }
});
