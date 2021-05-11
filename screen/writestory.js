import React from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  Image,
  TextInput,
  KeyboardAvoidingView,
  ToastAndroid,
  Alert
} from 'react-native';
import firebase from 'firebase';
import db from '../config';

export default class Write extends React.Component {
  constructor() {
    super();
    this.state = { author: '', title: '', story: '' };
  }

  submitstory=()=>{
    db.collection("story").doc(this.state.author).set({
      title:this.state.title,
      author:this.state.author,
      story:this.state.story
      
    })
    db.collection('story').doc(this.state.author).get()
    .then((doc)=>{
     console.log(doc.data())
    })
    ToastAndroid.show("your story has been submited successfully", ToastAndroid.LONG, ToastAndroid.CENTER)
  }
  render() {
   // console.log(this.state.story);
    //console.log(this.state.title);
   // console.log(this.state.author)
    return (
      <KeyboardAvoidingView 
      behavior='padding' enabled
      >
        <TouchableOpacity style={{ backgroundColor: 'red', height: 50 }}
        >
          <Text
            style={{
              fontSize: 28,
              fontWeight: 'bold',
              textAlign: 'center',
              textShadowColor: 'grey',
              color: 'white',
            }}
            >
            Story Hub
          </Text>
        </TouchableOpacity>
        <TextInput
          style={{
            borderColor: 'black',
            borderWidth: 2,
            marginTop: 20,
            width: 300,
            height: 30,
            alignSelf: 'center',
          }}
          placeholder="StoryTitle"
          value={this.state.title}
          onChangeText={text =>this.setState({title:text})}
        />
        <TextInput
          style={{
            borderColor: 'black',
            borderWidth: 2,
            marginTop: 20,
            width: 300,
            height: 30,
            alignSelf: 'center',
          }}
          placeholder="Author"
          value={this.state.author}
          onChangeText={(text) => this.setState({ author: text })}
        />
        <TextInput
          style={{
            borderColor: 'black',
            borderWidth: 2,
            marginTop: 20,
            width: 300,
            height: 280,
            alignSelf: 'center',
          }}
          multiline
          placeholder="write your story"
          value={this.state.story}
          onChangeText={(text) => this.setState({ story: text })}
        />
        <TouchableOpacity
          style={{
            backgroundColor: 'orange',
            alignContent: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            width: 150,
            height: 20,
            borderRadius: 20,
            alignSelf: 'center',
            marginTop: 20,
          }}
          onPress={this.submitstory}
          >
          submit
        </TouchableOpacity>
      </KeyboardAvoidingView>
    );
  }
}
