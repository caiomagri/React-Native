import { createStackNavigator } from "react-navigation";
import LoginPage from "./pages/LoginPage";
import SeriesPage from "./pages/SeriesPage";

export default createStackNavigator(
    {
        Login: {
            screen: LoginPage,
            navigationOptions: {
                title: "Bem Vindo"
            }
        },
        Main: {
            screen: SeriesPage
        }
    },
    {
        navigationOptions: {
            title: "Series!",
            headerTintColor: "white",
            headerStyle: {
                backgroundColor: "#6ca2f7",
                borderBottomWidth: 1,
                borderBottomColor: "#C5C5C5"
            },
            headerTitleStyle: {
                color: "white",
                fontSize: 30
            }
        }
    }
);
