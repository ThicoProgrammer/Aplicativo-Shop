import React, {Component} from "react"

import {
    View,
    Text,
    Image
} from "react-native"

export default class PostCard extends Component {
    render() {
      return (
            <View>
                <Image source={''}/>
                <Text>{this.props.post.description}</Text>
                <Text>{this.props.post.contact}</Text>
            </View>
        )
    }
}