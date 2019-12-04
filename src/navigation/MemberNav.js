import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import ToDo from '../screens/ToDo'

const MemberNav = createStackNavigator({
    ToDo : {
        screen: ToDo,
        navigationOptions:{
            header: null
        }
    }
})

export default createAppContainer(MemberNav)