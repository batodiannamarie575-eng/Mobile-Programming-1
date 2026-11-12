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

export default function MyLibraryTab() {

  // Access shared library data
  const {
    myBooks,
    removeBook,
    isLoading,
    error
  } = useContext(LibraryContext);

  return (
    <View style={styles.container}>

      {/* Screen heading */}
      <Text style={styles.heading}>
        My Library
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

      {/* Show message if library is empty */}
      {myBooks.length === 0 ? (

        <Text style={styles.emptyMessage}>
          No books saved yet.
        </Text>

      ) : (

        // Display saved and borrowed books
        <FlatList
          data={myBooks}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (

            <View style={styles.bookCard}>

              <Text style={styles.bookTitle}>
                {item.title}
              </Text>

              <Text style={styles.author}>
                Author: {item.author}
              </Text>

              {/* Display book status */}
              <Text style={styles.status}>
                Status: {item.status}
              </Text>

              {/* Remove Book button */}
              <Pressable
                style={styles.removeButton}
                onPress={() => removeBook(item.id)}
              >
                <Text style={styles.removeText}>
                  REMOVE BOOK
                </Text>
              </Pressable>

            </View>
          )}
        />

      )}

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
    backgroundColor: '#E8DCC8',
    padding: 16,
    marginBottom: 12,
    borderRadius: 12,
  },

  bookTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333333',
  },

  author: {
    fontSize: 14,
    color: '#555555',
    marginTop: 4,
  },

  status: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#8054A6',
    marginTop: 8,
  },

  removeButton: {
    backgroundColor: '#8054A6',
    padding: 12,
    borderRadius: 8,
    marginTop: 10,
    alignItems: 'center',
  },

  removeText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },

  emptyMessage: {
    fontSize: 16,
    color: '#777777',
    textAlign: 'center',
    marginTop: 30,
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