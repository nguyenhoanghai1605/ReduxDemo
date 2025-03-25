
import UserScreen from './User/UserScreen';
import MainScreens from './Main/MainScreens';
import ThongTinChiDaoDieuHanhScreens from './ThongTinChiDaoDieuHanh/ThongTinChiDaoDieuHanhScreens';

import { createAppContainer, createStackNavigator } from 'react-navigation'; 
const RootStack = createStackNavigator(
  {
    UserScreen: {
      screen: UserScreen,
    },
    MainScreens: {
      screen: MainScreens,
    },
    ThongTinChiDaoDieuHanhScreens: {
      screen: ThongTinChiDaoDieuHanhScreens,
    }
  },
  {
    initialRouteName: 'ThongTinChiDaoDieuHanhScreens',
  }
);
const App = createAppContainer(RootStack);
export default App;