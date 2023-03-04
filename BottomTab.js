import React, {Component} from "react"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"

import {
    View,
    Text
} from "react-native"

import FeedScreen from "../screens/Feed"
import NewPostScreen from "../screens/NewPost"
import SearchScreen from "../screens/Search"

const Tab = createBottomTabNavigator()

export default class BottomTabNavigator extends Component {
    render() {
        return (
            <Tab.Navigator>
                <Tab.Screen component = {FeedScreen} name = "Feed" />
                <Tab.Screen component = {SearchScreen} name = "Search" />
                <Tab.Screen component = {NewPostScreen} name = "NewPost" />
            </Tab.Navigator>
        )
    }
}