import "Book.dart";
import "LibraryMember.dart";
import "Librarian.dart";

void main() {
  //Book Class
  Book book1 = Book(
      title: "Song of Ice and Fire",
      author: "George RR Martin",
      isbn: "3BrRJ2W");

  book1.printBookDetails();
//Librarian Class
  Librarian lib1 = Librarian(
      memberId: "03rfeER", name: "Hesham", employeeId: "EMP349432332");

  lib1.printDetails();
  lib1.addBook(book1);
  lib1.printBooksList();

//LibraryMember Class
  LibraryMember member1 =
      LibraryMember(name: "Mahmoud", memberId: "03490230re");

  member1.printDetails();
  member1.borrowBook(book1);
  Book lastBorrowedBook = member1.lastBorrowedBook();
  print("The last borrowed book author: ${lastBorrowedBook.bookAuthor}.");

//Print books list after update
  lib1.printBooksList();
}
