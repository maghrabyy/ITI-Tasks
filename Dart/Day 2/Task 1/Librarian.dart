import "LibraryMember.dart";
import "Book.dart";

class Librarian extends LibraryMember {
  List<Book> _booksList = [];
  late String _employeeId;
  Librarian(
      {required String memberId,
      required String name,
      required String employeeId})
      : super(memberId: memberId, name: name) {
    this._employeeId = employeeId;
  }

  void printBooksList() {
    for (Book book in this._booksList) {
      book.printBookDetails();
    }
  }

  void addBook(Book book) {
    this._booksList.add(book);
    book.isBookAvailable = true;
    print(
        "You have added a book, ${book.bookTitle} of ISBN ${book.isbn} to the library.");
  }

  @override
  void printDetails() {
    print("Employee ID: ${this._employeeId}");
    print("Employee name: ${this.memberName}");
    print("-----------------------------------");
  }
}
