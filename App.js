import { createStackNavigator} from 'react-navigation'
import PeoplePage from './src/pages/PeoplePage'
import PeopleDetailPage from './src/pages/PeopleDetailPage'
import { capitalizeFirstLetter } from './src/util'


export default createStackNavigator({
  'Main': {
    screen: PeoplePage
  },
  'PeopleDetail': {
    screen: PeopleDetailPage,
    navigationOptions: ({ navigation }) => {
      const peopleName = navigation.state.params.people.name.first
      return({
        title: capitalizeFirstLetter(peopleName),
        headerTitleStyle: {
          fontSize: 30,
          color: 'white'
        }
      });
    }
  }
}, {
  navigationOptions: {
    title: 'Pessoas',
    headerTintColor: 'white',
    headerStyle:{
      backgroundColor: '#6ca2f7',
      borderBottomWidth: 1,
      borderBottomColor: '#6ca2f7'
    },
    headerTitleStyle: {
      fontSize: 30,
      color: 'white',
      alignSelf: 'center'
    }
  }
});