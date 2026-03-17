
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CourseListScreen from '../screens/CourseListScreen';
import LessonListScreen from '../screens/LessonListScreen';
import LessonDetailScreen from '../screens/LessonDetailScreen';

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Courses" component={CourseListScreen} />
      <Stack.Screen name="Lessons" component={LessonListScreen} />
      <Stack.Screen name="LessonDetail" component={LessonDetailScreen} />
    </Stack.Navigator>
  );
}
