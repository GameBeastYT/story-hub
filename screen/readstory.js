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
  Alert,
  FlatList,
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import firebase from 'firebase';
import db from '../config';

export default class Read extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
      last: null,
    };
  }
  fetchdata = async () => {
    const query = await db
      .collection('story')
      .startAfter(this.state.last)
      .limit(4)
      .get();
    query.docs.map((doc) => {
      this.setState({ data: [...this.state.data, doc.data()] });
    });
  };
  componentDidMount = async () => {
    const query = await db.collection('story').limit(4).get();
    query.docs.map((doc) => {
      this.setState({ data: [...this.state.data, doc.data()], last: doc });
      console.log('hi' + doc);
    });
    console.log(this.state.data);
  };
  render() {
    console.log(this.state.data);
    return (
      <FlatList
        data={this.state.data}
        renderItem={({ item }) => (
          <View>
            <Text style={{ fontSize: 20 }}>
              {'title  :' + item.title}
            </Text>
            <Text style={{ color: 'red', fontSize: 18 }}>
              {'author :' + item.author}
            </Text>
            <Text style={{ color: 'blue', fontSize: 18 }}>
              {'story :' + item.story}
            </Text>
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
        onEndReached={this.fetchdata}
        onEndReachedThreshold={0.4}
      />
    );
  }
}
