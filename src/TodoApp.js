import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";
import { Provider } from "react-redux";
import TodoForm from "./components/TodoForm";
import { createStore } from "redux";
import todoListReducer from "./reducers";
import devToolsEnhancer from "remote-redux-devtools";

const store = createStore(todoListReducer, devToolsEnhancer());

export class TodoApp extends Component {
    render() {
        return (
            <Provider store={store}>
                <View style={styles.container}>
                    <TodoForm />
                </View>
            </Provider>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        paddingTop: 30
    }
});
export default TodoApp;
