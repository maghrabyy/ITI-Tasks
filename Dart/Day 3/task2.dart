mixin Logger<T> {
  void log(List<T> dataList) {
    for (T data in dataList) {
      print(data);
    }
  }
}

class DataProcessor<T> with Logger {
  List<T> _storedData = [];

  get data {
    return this._storedData;
  }

  void addData(T data) {
    this._storedData.add(data);
  }

  void updateData(int index, T newData) {
    this._storedData[index] = newData;
  }

  void deleteData(int index) {
    this._storedData = this
        ._storedData
        .asMap()
        .entries
        .where((entry) => entry.key != index)
        .map((entry) => entry.value)
        .toList();
  }
}

void main() {
  DataProcessor<String> d1 = DataProcessor();
  d1.addData("Data 1");
  d1.addData("Data 2");
  d1.addData("Data 3");
  print(d1.data);
  d1.updateData(1, "Updated Data 2");
  print(d1.data);
  d1.deleteData(2);
  d1.log(d1.data);
}
