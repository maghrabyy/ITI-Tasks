class Product {
  final String _prodId;
  String _name;
  double _price;
  int _stock;

  Product(
      {required String prodId,
      required String name,
      required double price,
      required int stock})
      : this._prodId = prodId,
        this._name = name,
        this._price = price,
        this._stock = stock;

  //Getters
  String get productId {
    return this._prodId;
  }

  String get productName {
    return this._name;
  }

  double get productPrice {
    return this._price;
  }

  int get productStock {
    return this._stock;
  }

  //Setters
  set productName(String name) {
    this._name = name;
  }

  set productPrice(double price) {
    if (price > 0) {
      this._price = price;
    } else {
      throw "You can't set the product price to 0.";
    }
  }

  set productStock(int stock) {
    this._stock = stock;
  }
}
