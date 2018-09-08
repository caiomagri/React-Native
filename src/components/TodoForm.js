import React, { Component } from "react";
import { StyleSheet, View, Button } from "react-native";
import { connect } from "react-redux";
import Input from "./Input";
import { addTodo, setTodoText, updateTodo } from "../actions";

class TodoForm extends Component {
    onChangeText(text) {
        this.props.dispatchSetTodoText(text);
    }
    onPress() {
        const { todo } = this.props;
        if (todo.id) {
            this.props.dispatchUpdateTodo(todo);
        } else {
            const { text } = todo;
            this.props.dispatchAddTodo(text);
        }
    }
    render() {
        const { text, id } = this.props.todo;
        return (
            <View style={styles.formContainer}>
                <View style={styles.inputContainer}>
                    <Input
                        onChangeText={text => this.onChangeText(text)}
                        value={text}
                    />
                </View>
                <View style={styles.buttonContainer}>
                    <Button
                        title={id ? "UPDATE" : "ADD"}
                        onPress={() => this.onPress()}
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    formContainer: {
        flexDirection: "row"
    },
    inputContainer: {
        flex: 4
    },
    buttonContainer: {
        flex: 1
    }
});

const mapDispatchToProps = {
    dispatchAddTodo: addTodo,
    dispatchSetTodoText: setTodoText,
    dispatchUpdateTodo: updateTodo
};

const mapStateToProps = state => {
    return {
        todo: state.editingTodo
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoForm);
