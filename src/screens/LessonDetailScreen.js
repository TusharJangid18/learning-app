import React from 'react';
import { View, Text } from 'react-native';

export default function LessonDetailScreen({ route }) {
  const { lesson } = route.params;

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 22, fontWeight: 'bold' }}>
        {lesson.title}
      </Text>

      <Text style={{ marginTop: 10 }}>{lesson.content}</Text>
    </View>
  );
}