import { Text, StyleSheet, Pressable } from "react-native";
import { useState } from "react";

export default function Item({ title, onDelete }) {
  const [hotovo, setHotovo] = useState(false);
  return (
    <Pressable
      onPress={() => setHotovo(!hotovo)}
      onLongPress={onDelete}>
      <Text style={[
        styles.taskItem,
        { backgroundColor: hotovo ? "green" : "#e96500" }
      ]}>
        {title}
      </Text>
    </Pressable>
  );
}
const styles = StyleSheet.create({
  taskItem: {
    margin: 5,
    borderRadius: 8,
    padding: 5,
    fontSize: 16,
  },
});
