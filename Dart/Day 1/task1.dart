void main() {
  Map<String, int> someMap = {"x": 0, "y": 5};
  someMap['z'] = 5;
  print(someMap);
  someMap.remove("x");
  print(someMap);
}
