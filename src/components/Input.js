import React from "react";
import { StyleSheet } from "react-native";
import { TextInput } from "react-native-gesture-handler";

const Input = ({ onChangeText, value }) => (
    <TextInput onChangeText={onChangeText} value={value} style={styles.input} />
);

const styles = StyleSheet.create({
    input: {
        paddingLeft: 15,
        paddingBottom: 15
    }
});

export default Input;
