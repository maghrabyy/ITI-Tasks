class Book {
  final String isbn;
  late String _title;
  late String _author;
  late bool _isAvailable;

  Book({required String title, required String author, required this.isbn}) {
    this._author = author;
    this._title = title;
    this._isAvailable = false;
  }

//Getters
  String get bookTitle {
    return this._title;
  }

  String get bookAuthor {
    return this._author;
  }

  bool get isBookAvailable {
    return this._isAvailable;
  }

//Setters
  set bookTitle(String title) {
    this._title = title;
  }

  set bookAuthor(String author) {
    this._author = author;
  }

  set isBookAvailable(bool available) {
    this._isAvailable = available;
  }

  void printBookDetails() {
    print("-----------------------------------");
    print("Book ISBN: ${this.isbn}");
    print("Book Title: ${this.bookTitle}");
    print("Book Author: ${this.bookAuthor}");
    print(isBookAvailable ? "Book is available" : "Book isn't available");
    print("-----------------------------------");
  }
}
