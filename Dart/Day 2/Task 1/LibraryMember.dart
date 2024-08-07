import "Book.dart";
import "PrintInterface.dart";

class LibraryMember implements PrintI {
  String _name;
  String _memberId;
  List<Book> _borrowedBooks = [];

  LibraryMember({required String name, required String memberId})
      : this._name = name,
        this._memberId = memberId;

  void borrowBook(Book book) {
    this._borrowedBooks.add(book);
    book.isBookAvailable = false;
    print("You have borrowed a book, ${book.bookTitle} of ISBN ${book.isbn}.");
  }

  Book lastBorrowedBook() {
    return this._borrowedBooks[0];
  }

  String get memberName {
    return this._name;
  }

  @override
  void printDetails() {
    print("Member ID: ${this._memberId}");
    print("Member name: ${this.memberName}");
    print("-----------------------------------");
  }
}
