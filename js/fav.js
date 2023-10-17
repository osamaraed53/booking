function addFavoriteBook(userId, bookId) {
    fetch(`https://your-json-server-url.com/users/${userId}`)
      .then(response => response.json())
      .then(userData => {
        if (!userData.favorites.includes(bookId)) {
          userData.favorites.push(bookId);
  
          fetch(`https://your-json-server-url.com/users/${userId}`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
          })
            .then(response => response.json())
            .then(updatedUserData => {
              console.log('Favorite book added:', updatedUserData);
            })
            .catch(error => {
              console.error('Error updating user data:', error);
            });
        }
      })
      .catch(error => {
        console.error('Error fetching user data:', error);
      });
  }
  
  function showFavoriteBooks(userId) {
    fetch(`https://your-json-server-url.com/users/${userId}`)
      .then(response => response.json())
      .then(userData => {
        const favoriteBookIds = userData.favorites;
  
        favoriteBookIds.forEach(bookId => {
          fetch(`https://your-json-server-url.com/books/${bookId}`)
            .then(response => response.json())
            .then(bookData => {
              console.log('Favorite book:', bookData);
            })
            .catch(error => {
              console.error('Error fetching favorite book data:', error);
            });
        });
      })
      .catch(error => {
        console.error('Error fetching user data:', error);
      });
  }
  
  
  
  addFavoriteBook(userId, bookId);
  
  showFavoriteBooks(userId);
  