import firebase from "firebase";

export const USER_LOGIN_SUCCESS = "USER_LOGIN_SUCCESS";
const userLoginSuccess = user => ({
    type: USER_LOGIN_SUCCESS,
    user
});

export const USER_LOGOUT = "USER_LOGOUT";
const userLogout = () => ({
    type: USER_LOGOUT
});

export const tryLogin = ({ email, password }) => dispatch => {
    return firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(user => {
            const action = userLoginSuccess(user);
            dispatch(action);
        });
    // .catch(error => {
    //     if (error.code === "auth/user-not-found") {
    //         Alert.alert(
    //             "Usuário não encontrado",
    //             "Deseja criar um cadastro com as informações inseridas ?",
    //             [
    //                 {
    //                     text: "Não",
    //                     onPress: params =>
    //                         console.log(
    //                             "Usuário não quer se cadastrar"
    //                         ),
    //                     style: "cancel"
    //                 },
    //                 {
    //                     text: "Sim",
    //                     onPress: params => {
    //                         firebase
    //                             .auth()
    //                             .createUserWithEmailAndPassword(
    //                                 mail,
    //                                 password
    //                             )
    //                             .then(loginUserSuccess)
    //                             .catch(loginUserFailed);
    //                     }
    //                 }
    //             ],
    //             { cancelable: false }
    //         );
    //         return "";
    //     }
    //     loginUserSuccess(error);
    // })
    // .then(() => this.setState({ isLoading: false }));
};
