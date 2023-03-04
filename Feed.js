import React, {Component} from "react"

import {
    View,
    Text,
    FlatList
} from "react-native"
import PostCard from "./PostCard"

export default class FeedScreen extends Component {
    constructor(props) {
        super(props) 
        
        this.state = {
            posts: []
        }
    }

    buscarPosts = () => {
        db.database().ref("/posts/").on("value", (dados) => {
            var posts = []

            if(dados.val()) {
                Object.keys(dados.val()).forEach(function(key) {
                    posts.push({
                        chave: key,
                        valor: dados.val()[key]
                    })
                })
            }

            //o segundo "posts" é da variável
            this.setState({posts: posts})
        })
    }

    renderItem = () => {
        return <PostCard/> 
    }

    render() {
        return (
            <View>
              <Text>Feed Shop</Text>

              <FlatList 
              data = {this.state.posts}
              renderItem = {this.renderItem}
              keyExtractor = {(item, indice) => {indice.toString()}} />
            </View>
        )
    }
}