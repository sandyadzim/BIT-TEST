import { createAppContainer, createSwitchNavigator } from 'react-navigation'

import ToDo from './MemberNav'

const RootNavigator = createSwitchNavigator({
    ToDo : ToDo
},
{
    initialRouteName: 'ToDo'
}
)

export default createAppContainer(RootNavigator)