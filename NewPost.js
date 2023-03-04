import React, {Component} from "react"

import {
    View,
    Text,
    Image,
    TextInput,
    Button
} from "react-native"

import db from "firebase"

import ImagePicker from 'react-native-image-picker';


export default class NewPostScreen extends Component {
    constructor() {
        super()

        this.state = {
            image: '',
            description: '',
            contact: ''
        }
    }

    handleUploadMedia = () => {

        ImagePicker.showImagePicker({}, (response) => {

            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else {
                const source = { uri: response.uri };
                setSelectedMedia(source);
            }
        });
    };
      
    criarPost() {
        db.ref("/posts/" + Math.random().toString(10).slice(2)).set({
            image: this.state.image,
            description: this.state.description,
            contact: this.state.contact
        })
        this.props.navigation.navigate("Feed")
    }

    render() {
        return (
            <View>
                <Text>Tela de Criação</Text>

                <View>

                    <TouchableOpacity onPress={handleUploadMedia}>
                        <Text>Selecione uma imagem ou vídeo</Text>
                    </TouchableOpacity>

                    {selectedMedia && (
                        <Image source={selectedMedia} style={{ width: 200, height: 200 }} />
                    )}

                    <Text>Descrição</Text>

                    <TextInput multiline = {true} 
                    numberOfLines = {5} 
                    onChangeText = { (text) => {this.setState({description: text})}}/>

                    <TextInput placeholder={"Escreva o seu contato!"} onChangeText = { (text) => {this.setState({contact: text})}}/>

                    <Button title = "Enviar" onPress = {() => {this.criarPost()}}/>

                </View>

            </View>
        )
    }
}