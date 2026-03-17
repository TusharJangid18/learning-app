import React, { useState } from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';

export default function LessonListScreen({ route, navigation }) {
  const { course } = route.params;
  const [completed, setCompleted] = useState({});

  if (!course.lessons || course.lessons.length === 0) {
    return <Text style={{ padding: 20 }}>No lessons available</Text>;
  }

  const toggleComplete = (id) => {
    setCompleted((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <FlatList
      data={course.lessons}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity
          style={{
            padding: 10,
            borderWidth: 1,
            margin: 10,
            borderRadius: 5,
          }}
          onPress={() =>
            navigation.navigate('LessonDetail', { lesson: item })
          }
          onLongPress={() => toggleComplete(item.id)}
        >
          <Text style={{ fontSize: 16, fontWeight: 'bold' }}>
            {item.title}
          </Text>

          <Text>{item.description}</Text>

          {completed[item.id] && (
            <Text style={{ color: 'green' }}>✓ Completed</Text>
          )}
        </TouchableOpacity>
      )}
    />
  );
}