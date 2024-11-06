import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign, Feather, Ionicons } from '@expo/vector-icons'
import Home from '../screens/Home'


const Tabs = createBottomTabNavigator()

const EmptyComponent = () => <></>

interface IconProps {
  color: string
  focused?: boolean
}

const BottomTabs = () => {
  return (
    <Tabs.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: 72,
        },
        tabBarItemStyle: {
          // paddingBottom: 2
        },
        tabBarLabelStyle: {
          marginBottom: 8
        }
      }}
        sceneContainerStyle= {{
          // backgroundColor: 'red',
          flex: 1
      }}>
      <Tabs.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color }: IconProps) => <Feather name="home" size={22} color={color} />
        }}
      />
      <Tabs.Screen
        name="Career"
        component={EmptyComponent}
        options={{
          tabBarIcon: ({ color }: IconProps) => <AntDesign name="earth" size={22} color={color} />
        }}

      />

      <Tabs.Screen
        name="Create Job"
        component={EmptyComponent}
        options={{
          tabBarIcon: ({ color }: IconProps) => <Feather name="plus-square" size={22} color={color} />
        }}

      />

      <Tabs.Screen
        name="Search"
        component={EmptyComponent}
        options={{
          tabBarIcon: ({ color }: IconProps) => <Feather name="search" size={22} color={color} />
        }}

      />

      <Tabs.Screen
        name="Account"
        component={EmptyComponent}
        options={{
          tabBarIcon: ({ color }: IconProps) => <Ionicons name="person-outline" size={22} color={color} />
        }}

      />

    </Tabs.Navigator>
  )
}

export default BottomTabs