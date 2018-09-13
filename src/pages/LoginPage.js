import React from "react";
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    Button,
    ActivityIndicator,
    Alert
} from "react-native";
import firebase from "firebase";
import FormRow from "../components/FormRow";
import fireBaseConfig from "../config/config";

import { connect } from "react-redux";
import { tryLogin } from "../actions";

class LoginPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mail: "",
            password: "",
            isLoading: false,
            message: ""
        };
    }
    componentDidMount() {
        firebase.initializeApp(fireBaseConfig);
    }

    onChangeHandler(field, value) {
        this.setState({
            [field]: value
        });
    }

    tryLogin() {
        this.setState({
            isLoading: true,
            message: ""
        });
        const { mail: email, password } = this.state;

        this.props
            .tryLogin({ email, password })
            .then(() => {
                this.setState({ message: "Sucesso !" });
                this.props.navigation.replace("main");
            })
            .catch(err => {});
    }

    getMessageByErrorCode(erroCode) {
        switch (erroCode) {
            case "auth/wrong-password":
                return "Senha Incorreta !";
            case "auth/user-not-found":
                return "Usuário não encontrado !";
            default:
                return "Erro desconhecido !";
        }
    }

    renderButton() {
        if (this.state.isLoading) {
            return <ActivityIndicator />;
        }
        return <Button title="Entrar" onPress={() => this.tryLogin()} />;
    }
    renderMessage() {
        const { message } = this.state;

        if (!message) {
            return null;
        }

        return (
            <View style={styles.errorMessage}>
                <Text>{message}</Text>
            </View>
        );
    }
    render() {
        return (
            <View style={styles.container}>
                <FormRow first>
                    <TextInput
                        style={styles.input}
                        placeholder="user@mail.com"
                        value={this.state.mail}
                        onChangeText={value =>
                            this.onChangeHandler("mail", value)
                        }
                    />
                </FormRow>
                <FormRow last>
                    <TextInput
                        style={styles.input}
                        placeholder="***********"
                        secureTextEntry
                        value={this.state.password}
                        onChangeText={value =>
                            this.onChangeHandler("password", value)
                        }
                    />
                </FormRow>

                {this.renderButton()}
                {this.renderMessage()}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        paddingLeft: 10,
        paddingRight: 10
    },
    input: {
        paddingLeft: 5,
        paddingRight: 5,
        paddingBottom: 10,
        justifyContent: "center"
    },
    errorMessage: {
        alignItems: "center"
    }
});

export default connect(
    null,
    {
        tryLogin
    }
)(LoginPage);
