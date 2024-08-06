void printStudentName(Map? student) {
  print(student?['Name'] ?? 'No student passed.');
}

void main() {
  ///////////////////////////
  List<int?> listOfNulls;
  listOfNulls = [null];
  listOfNulls.add(4);
  print(listOfNulls);
  //////////////////////////
  printStudentName(null);
}
