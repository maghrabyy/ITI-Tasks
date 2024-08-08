mixin AsyncOperations<T> {
  Future<void> performAsyncOperation(T data) async {
    await Future.delayed(
        Duration(seconds: 2), () => print("$data is fetched."));
  }
}

class DataFetcher with AsyncOperations {
  fetchData() async {
    print("Loading...");
    try {
      await performAsyncOperation("API Data");
      print("Resolved.");
    } catch (e) {
      print("Error: $e");
    }
  }
}

void main() {
  DataFetcher d1 = DataFetcher();
  d1.fetchData();
}
