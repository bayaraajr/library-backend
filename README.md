# Library system backend 

This project is built with _**Fastify**_, _**MongoDB (Mongoose) **_. Also this project is only for educational purpose.

### Tech Stack

- MongoDB
- NodeJS
- Fastify
- Vercel


## Endpoints

### 1. List all books

**Endpoint:** `/books`
**Method:** GET
**Description:** Returns a list of all books registered in the library.

**Response:**
- Status: 200 OK
- Body:
```json
[
  {
    "isbn": "9781234567890",
    "name": "Book 1",
    "author": "Author 1",
    "publicationDate": "2022-01-01",
    "coverUrl": "https://example.com/book1.jpg",
    "description": "Description of Book 1",
    "filePath": "path/to/book1.pdf",
    "category": "Category 1",
    "totalViews": 100,
    "loves": 50
  },
  {
    "isbn": "9780987654321",
    "name": "Book 2",
    "author": "Author 2",
    "publicationDate": "2022-02-01",
    "coverUrl": "https://example.com/book2.jpg",
    "description": "Description of Book 2",
    "filePath": "path/to/book2.pdf",
    "category": "Category 2",
    "totalViews": 200,
    "loves": 75
  }
]
```

### 2. Get book information

**Endpoint:** `/books/{isbn}`
**Method:** GET
**Description:** Returns the information of a specific book based on the ISBN.

**URL Parameters:**
- `isbn` (string): The ISBN number of the book.

**Response:**
- Status: 200 OK
- Body:
```json
{
  "isbn": "9781234567890",
  "name": "Book 1",
  "author": "Author 1",
  "publicationDate": "2022-01-01",
  "coverUrl": "https://example.com/book1.jpg",
  "description": "Description of Book 1",
  "filePath": "path/to/book1.pdf",
  "category": "Category 1",
  "totalViews": 100,
  "loves": 50
}
```

### 3. Add a new book

**Endpoint:** `/books`
**Method:** POST
**Description:** Adds a new book to the library.

**Request Parameters:**
- `isbn` (string): The ISBN number of the book.
- `name` (string): The name of the book.
- `author` (string): The author of the book.
- `publicationDate` (date): The publication date of the book in "YYYY-MM-DD" format.
- `coverUrl` (string): The cover URL of the book.
- `description` (string): The description of the book.
- `filePath` (string): The file path of the book.
- `category` (string): The category of the book.

**Example Request:**
```
POST /books
Content-Type: application/json

{
  "isbn": "9780987654321",
  "name": "Book 2",
  "author": "Author 2",
  "publicationDate": "2022-02-01",
  "coverUrl": "https://example.com/book2.jpg",
  "description": "Description of Book 2",
  "filePath": "path/to/book2.pdf",
  "category": "Category 2"
}
```

**Response:**
- Status: 201 Created

### 4. Update book information



**Endpoint:** `/books/{isbn}`
**Method:** PUT
**Description:** Updates the information of a specific book based on the ISBN.

**URL Parameters:**
- `isbn` (string): The ISBN number of the book.

**Request Parameters:**
- `name` (string): The new name of the book (optional).
- `author` (string): The new author of the book (optional).
- `publicationDate` (date): The new publication date of the book in "YYYY-MM-DD" format (optional).
- `coverUrl` (string): The new cover URL of the book (optional).
- `description` (string): The new description of the book (optional).
- `filePath` (string): The new file path of the book (optional).
- `category` (string): The new category of the book (optional).

**Example Request:**
```
PUT /books/9781234567890
Content-Type: application/json

{
  "name": "Updated Book",
  "author": "Updated Author"
}
```

**Response:**
- Status: 200 OK

### 5. Delete a book

**Endpoint:** `/books/{isbn}`
**Method:** DELETE
**Description:** Deletes a specific book based on the ISBN.

**URL Parameters:**
- `isbn` (string): The ISBN number of the book.

**Response:**
- Status: 204 No Content
