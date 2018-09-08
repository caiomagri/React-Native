import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

const TodoListItem = ({ todo, onPressTodo, onLongPressTodo }) => (
    <TouchableOpacity onPress={onPressTodo} onLongPress={onLongPressTodo}>
        <View
            style={[
                styles.line,
                todo.done ? styles.done_view : styles.not_done_view
            ]}
        >
            <Text
                style={[styles.lineText, todo.done ? styles.done_line : null]}
            >
                {todo.text}
            </Text>
        </View>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    line: {
        height: 60,
        borderBottomWidth: 1,
        borderBottomColor: "#bbb",
        alignItems: "center",
        flexDirection: "row"
    },
    lineText: {
        fontSize: 20,
        paddingLeft: 15,
        flex: 7,
        color: "white"
    },
    done_view: {
        backgroundColor: "green"
    },
    not_done_view: {
        backgroundColor: "red"
    },
    done_line: {
        textDecorationLine: "line-through"
    }
});

export default TodoListItem;
