import React, { createContext, useState } from 'react';

// Create shared Context
export const LibraryContext = createContext();

// Provider shares data with all screens
export function LibraryProvider({ children }) {

  // Store saved and borrowed books
  const [myBooks, setMyBooks] = useState([]);

  // Loading and error states
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  // Add or update a book
  const updateLibrary = async (book, status) => {
    setIsLoading(true);
    setError('');

    try {
      // Check book information
      if (!book || !book.id || !book.title) {
        throw new Error('Invalid book information');
      }

      // Simulate saving a book
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Update the shared book list
      setMyBooks(previousBooks => {
        const existingBook = previousBooks.find(
          item => item.id === book.id
        );

        // Update status if book already exists
        if (existingBook) {
          return previousBooks.map(item =>
            item.id === book.id
              ? { ...item, status }
              : item
          );
        }

        // Add new book
        return [...previousBooks, { ...book, status }];
      });

    } catch (err) {
      setError(err.message || 'Unable to update library.');
    } finally {
      setIsLoading(false);
    }
  };

  // Remove a book from the library
  const removeBook = (id) => {
    setError('');

    const bookExists = myBooks.some(book => book.id === id);

    if (!bookExists) {
      setError('Book not found.');
      return;
    }

    setMyBooks(previousBooks =>
      previousBooks.filter(book => book.id !== id)
    );
  };

  return (
    // Share data and functions with all screens
    <LibraryContext.Provider
      value={{
        myBooks,
        isLoading,
        error,
        updateLibrary,
        removeBook
      }}
    >
      {children}
    </LibraryContext.Provider>
  );
}