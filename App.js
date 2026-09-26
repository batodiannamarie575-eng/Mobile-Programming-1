import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Alert,
} from 'react-native';

export default function App() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  // Add a new school task
  const addTask = () => {
    if (task.trim() === '') {
      Alert.alert('Empty Task', 'Please enter a school task.');
      return;
    }

    const newTask = {
      id: Date.now().toString(),
      title: task.trim(),
      completed: false,
    };

    setTasks([...tasks, newTask]);
    setTask('');
  };

  // Mark task as completed
  const toggleTask = (id) => {
    setTasks(
      tasks.map((item) =>
        item.id === id
          ? { ...item, completed: !item.completed }
          : item
      )
    );
  };

  // Delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter((item) => item.id !== id));
  };

  // Display each task
  const renderTask = ({ item }) => (
    <View style={styles.taskCard}>
      <TouchableOpacity
        style={styles.taskContent}
        onPress={() => toggleTask(item.id)}
      >
        <View
          style={[
            styles.checkbox,
            item.completed && styles.checkboxCompleted,
          ]}
        >
          {item.completed && <Text style={styles.check}>✓</Text>}
        </View>

        <Text
          style={[
            styles.taskText,
            item.completed && styles.completedText,
          ]}
        >
          {item.title}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.deleteButton}
        onPress={() => deleteTask(item.id)}
      >
        <Text style={styles.deleteText}>Delete</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>My School Works</Text>
        <Text style={styles.subtitle}>
          Keep track of your assignments and activities
        </Text>
      </View>

      {/* Add Task Section */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter a school task..."
          placeholderTextColor="#999"
          value={task}
          onChangeText={setTask}
          onSubmitEditing={addTask}
        />

        <TouchableOpacity
          style={styles.addButton}
          onPress={addTask}
        >
          <Text style={styles.addButtonText}>+ Add</Text>
        </TouchableOpacity>
      </View>

      {/* Task Counter */}
      <View style={styles.counterContainer}>
        <Text style={styles.counterText}>
          {tasks.length} {tasks.length === 1 ? 'Task' : 'Tasks'}
        </Text>
      </View>

      {/* Task List */}
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={renderTask}
        contentContainerStyle={
          tasks.length === 0
            ? styles.emptyContainer
            : styles.listContainer
        }
        ListEmptyComponent={
          <View style={styles.emptyBox}>
            <Text style={styles.emptyIcon}>📚</Text>
            <Text style={styles.emptyTitle}>
              No school works yet
            </Text>
            <Text style={styles.emptyText}>
              Add your assignments, projects, quizzes, or other
              school activities.
            </Text>
          </View>
        }
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F3FF',
  },

  header: {
    backgroundColor: '#6C4AB6',
    paddingHorizontal: 24,
    paddingTop: 30,
    paddingBottom: 28,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },

  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },

  subtitle: {
    fontSize: 14,
    color: '#E8E0FF',
    marginTop: 6,
  },

  inputContainer: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingTop: 20,
    gap: 10,
  },

  input: {
    flex: 1,
    height: 52,
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    paddingHorizontal: 16,
    fontSize: 15,
    borderWidth: 1,
    borderColor: '#DDD4F3',
    color: '#333333',
  },

  addButton: {
    height: 52,
    paddingHorizontal: 18,
    backgroundColor: '#6C4AB6',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },

  addButtonText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: 'bold',
  },

  counterContainer: {
    paddingHorizontal: 22,
    paddingTop: 20,
    paddingBottom: 10,
  },

  counterText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#4B3A70',
  },

  listContainer: {
    paddingHorizontal: 20,
    paddingBottom: 30,
  },

  taskCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 15,
    marginBottom: 12,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#E3DDF1',
    elevation: 2,
  },

  taskContent: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },

  checkbox: {
    width: 25,
    height: 25,
    borderRadius: 7,
    borderWidth: 2,
    borderColor: '#6C4AB6',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },

  checkboxCompleted: {
    backgroundColor: '#6C4AB6',
  },

  check: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },

  taskText: {
    flex: 1,
    fontSize: 16,
    color: '#333333',
  },

  completedText: {
    textDecorationLine: 'line-through',
    color: '#999999',
  },

  deleteButton: {
    backgroundColor: '#FFE8E8',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
    marginLeft: 10,
  },

  deleteText: {
    color: '#D9534F',
    fontSize: 13,
    fontWeight: 'bold',
  },

  emptyContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    paddingHorizontal: 30,
  },

  emptyBox: {
    alignItems: 'center',
    padding: 25,
  },

  emptyIcon: {
    fontSize: 55,
    marginBottom: 15,
  },

  emptyTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#4B3A70',
    marginBottom: 8,
  },

  emptyText: {
    fontSize: 14,
    color: '#777777',
    textAlign: 'center',
    lineHeight: 21,
  },
});