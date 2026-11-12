
import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

export default function App() {
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  const fetchBooks = async () => {
    try {
      const response = await fetch(
        'https://openlibrary.org/search.json?q=programming&limit=20'
      );

      if (!response.ok) {
        throw new Error('Failed to fetch books');
      }

      const data = await response.json();
      setBooks(data.docs);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>IT Book Library</Text>
        <Text style={styles.subtitle}>
          Explore Programming and Technology Books
        </Text>
      </View>

      <Text style={styles.sectionTitle}>
        Programming & IT Books
      </Text>

      {isLoading ? (
        <Text style={styles.message}>Loading books...</Text>
      ) : error ? (
        <Text style={styles.message}>{error}</Text>
      ) : (
        <FlatList
          data={books}
          keyExtractor={(item, index) =>
            item.key || index.toString()
          }
          renderItem={({ item }) => (
            <View style={styles.bookBox}>
              <Text style={styles.bookTitle}>
                {item.title}
              </Text>

              <Text style={styles.author}>
                Author: {item.author_name?.[0] || 'Unknown'}
              </Text>

              <Text style={styles.year}>
                Published: {item.first_publish_year || 'Unknown'}
              </Text>
            </View>
          )}
          ListEmptyComponent={
            <Text style={styles.message}>No books found.</Text>
          }
        />
      )}

      <Text style={styles.footer}>
        Powered by Open Library API
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5EFE6',
    paddingHorizontal: 20,
    paddingTop: 55,
  },
  header: {
    backgroundColor: '#795548',
    padding: 22,
    borderRadius: 15,
    marginBottom: 25,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  subtitle: {
    fontSize: 14,
    color: '#E8DCCB',
    marginTop: 5,
  },
  sectionTitle: {
    fontSize: 21,
    fontWeight: 'bold',
    color: '#3E3028',
    marginBottom: 15,
  },
  bookBox: {
    backgroundColor: '#E8DCCB',
    padding: 18,
    borderRadius: 12,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#D5C5B0',
    elevation: 2,
  },
  bookTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#795548',
    marginBottom: 8,
  },
  author: {
    fontSize: 14,
    color: '#3E3028',
    marginBottom: 5,
  },
  year: {
    fontSize: 14,
    color: '#3E3028',
  },
  message: {
    fontSize: 16,
    color: '#3E3028',
    textAlign: 'center',
    marginTop: 30,
  },
  footer: {
    textAlign: 'center',
    color: '#795548',
    fontSize: 12,
    paddingVertical: 15,
  },
});