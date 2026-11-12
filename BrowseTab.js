import React, { useContext } from 'react';

import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Pressable
} from 'react-native';

// Import shared Context
import { LibraryContext } from './LibraryContext';

// Sample book data
const books = [
  {
    id: '1',
    title: 'The Little Prince',
    author: 'Antoine de Saint-Exupery'
  },
  {
    id: '2',
    title: 'Pride and Prejudice',
    author: 'Jane Austen'
  },
  {
    id: '3',
    title: 'Alice in Wonderland',
    author: 'Lewis Carroll'
  },
  {
    id: '4',
    title: 'Sherlock Holmes',
    author: 'Arthur Conan Doyle'
  }
];

export default function BrowseTab() {

  // Access shared data and functions
  const {
    updateLibrary,
    isLoading,
    error
  } = useContext(LibraryContext);

  return (
    <View style={styles.container}>

      {/* Screen heading */}
      <Text style={styles.heading}>
        Available Books
      </Text>

      {/* Loading message */}
      {isLoading && (
        <Text style={styles.message}>
          Updating your library...
        </Text>
      )}

      {/* Error message */}
      {error !== '' && (
        <Text style={styles.error}>
          {error}
        </Text>
      )}

      {/* Display available books */}
      <FlatList
        data={books}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (

          <View style={styles.bookCard}>

            <Text style={styles.bookTitle}>
              {item.title}
            </Text>

            <Text style={styles.author}>
              Author: {item.author}
            </Text>

            {/* Save Book button */}
            <Pressable
              style={styles.bookButton}
              onPress={() => updateLibrary(item, 'Saved')}
              disabled={isLoading}
            >
              <Text style={styles.buttonText}>
                SAVE BOOK
              </Text>
            </Pressable>

            {/* Borrow Book button */}
            <Pressable
              style={styles.bookButton}
              onPress={() => updateLibrary(item, 'Borrowed')}
              disabled={isLoading}
            >
              <Text style={styles.buttonText}>
                BORROW BOOK
              </Text>
            </Pressable>

          </View>
        )}
      />

    </View>
  );
}

// Screen styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F1E8',
    padding: 16,
  },

  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#315C45',
    marginBottom: 16,
  },

  bookCard: {
    backgroundColor: '#FFFFFF',
    padding: 16,
    marginBottom: 12,
    borderRadius: 12,
  },

  bookTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#222222',
  },

  author: {
    fontSize: 14,
    color: '#555555',
    marginBottom: 4,
  },

  bookButton: {
    backgroundColor: '#E8DCC8',
    padding: 12,
    borderRadius: 8,
    marginTop: 5,
    alignItems: 'center',
  },

  buttonText: {
    color: '#5C4635',
    fontWeight: 'bold',
  },

  message: {
    color: '#8054A6',
    marginBottom: 10,
  },

  error: {
    color: 'red',
    marginBottom: 10,
  },
});