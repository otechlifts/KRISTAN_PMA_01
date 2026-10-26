
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Modal,
  Pressable,
  Alert,
  FlatList,
  ScrollView
} from 'react-native';
import Item from './src/components/Item';


export default function App() {
  const [item, setItem] = useState("");
  const [task, setTask] = useState([])
  const [modalVisible, setModalVisible] = useState(false);
  function handleAddItem() {
    console.log("Item", item);
    setTask([...task, item]);
    console.log(task);
  }
  function handleInputText(text) {
    setItem(text)
  }
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          onChangeText ={handleInputText}
            style={styles.input} placeholder = "xxxxxzadaj Task"/>
            <Button onPress={handleAddItem} title = "ADD" />
        <StatusBar style="auto" />
      </View>
      <View style={styles.udalosti}>

        <FlatList
          style={{flex: 1}}
          data={task}
          renderItem={({item}) => {
      return <Item title={item}/>;
    }}
    keyExtractor={(item, index) => index.toString()}
        />

      <Button
  title="Otvor Modal"
  onPress={() => setModalVisible(true)}
/>
      </View>
      </View>
    );
  }
const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 2,
  },
  inputContainer:{flex:1, backgroundColor: "#cfcbcb", alignItems: "center", justifyContent: "center", flexDirection: "row", justifyContent: "space-around"},
  input: {
    borderWidth: 3,
    borderRadius: 4,
    borderColor: "#0972fa",
  },
  udalosti: {
    flex: 5,
  },
  scrollView: {
    backgroundColor: 'pink',
  },
  centeredView: {
  flex: 1,
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#000000",
},
modalView: {
  margin: 20,
  backgroundColor: "white",
  padding: 35,
  alignItems: "center",
},
modalText: {
  marginBottom: 15,
  textAlign: "center",
  fontSize: 20,
},
button: {
  borderRadius: 20,
  padding: 10,
},
buttonClose: {
  backgroundColor: "#2196F3",
},
textStyle: {
  color: "white",
  fontWeight: "bold",
  textAlign: "center",
},
});
