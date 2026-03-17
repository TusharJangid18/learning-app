import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  TextInput,
  ActivityIndicator,
} from 'react-native';
import { fetchCourses } from '../api/mockApi';

export default function CourseListScreen({ navigation }) {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetchCourses()
      .then((data) => setCourses(data))
      .catch(() => setError('Failed to load courses'))
      .finally(() => setLoading(false));
  }, []);

  // SEARCH (title + description)
  const filteredCourses = courses.filter(
    (c) =>
      c.title.toLowerCase().includes(search.toLowerCase()) ||
      c.description.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) return <ActivityIndicator size="large" />;
  if (error) return <Text>{error}</Text>;
  if (filteredCourses.length === 0) return <Text>No courses found</Text>;

  return (
    <View style={{ padding: 10 }}>
      <TextInput
        placeholder="Search courses..."
        value={search}
        onChangeText={setSearch}
        style={{
          borderWidth: 1,
          padding: 10,
          marginBottom: 10,
          borderRadius: 5,
        }}
      />

      <FlatList
        data={filteredCourses}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={{
              padding: 10,
              borderWidth: 1,
              marginBottom: 10,
              borderRadius: 5,
            }}
            onPress={() => navigation.navigate('Lessons', { course: item })}
          >
            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
              {item.title}
            </Text>

            <Text>{item.description}</Text>

            <Text style={{ marginTop: 5 }}>
              Lessons: {item.lessons.length}
            </Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
