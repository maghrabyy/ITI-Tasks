import "Product.dart";
import "Order.dart";

class Customer {
  final String _customerId;
  String _name;
  final List<Map<Product, int>> _cart = [];
  Customer({required String cstId, required String name})
      : this._customerId = cstId,
        this._name = name;

  //Getters
  String get customerId {
    return this._customerId;
  }

  String get customerName {
    return this._name;
  }

  //Setters
  set customerName(name) {
    this._name = name;
  }

  void printShoppingCart() {
    if (this._cart.isNotEmpty) {
      for (Map<Product, int> cartItem in this._cart) {
        cartItem.forEach((Product prod, int qty) {
          print("--------------------------------");
          print("Product ID: ${prod.productId}");
          print("Product Name: ${prod.productName}");
          print("Product Qty: ${qty}");
          print("--------------------------------");
        });
      }
    } else {
      print("Your shopping cart is empty.");
    }
  }

  void addProdToCart(Product prod, int quantity) {
    if (prod.productStock > 0 && quantity < prod.productStock) {
      this._cart.add({prod: quantity});
      print(
          "You have added (${prod.productName} x ${quantity}) of ID ${prod.productId} to the shopping cart");
    }
  }

  bool _hasCartItem(Product prod) {
    bool itemExist = false;
    this._cart.forEach((cartItem) {
      itemExist = cartItem.keys.toList().contains(prod);
    });
    return itemExist;
  }

  void removeProdFromCart(Product prod) {
    if (_hasCartItem(prod)) {
      this._cart.removeWhere(
          (Map<Product, int> cartItem) => cartItem.containsKey(prod));
      print(
          "You have removed ${prod.productName} of ID ${prod.productId} from the shopping cart");
    } else {
      print(
          "You don't have ${prod.productName} of ${prod.productId} in your shopping cart.");
    }
  }

  void emptyShoppingCart() {
    if (this._cart.isNotEmpty) {
      this._cart.clear();
      print("You have emptied shopping cart.");
    } else {
      print("Shopping cart is already empty.");
    }
  }

  double _calcTotalAmount() {
    if (this._cart.isNotEmpty) {
      List<double> subtotals = [];
      _cart.forEach((cartItem) {
        cartItem.forEach((Product prod, int qty) {
          subtotals.add(prod.productPrice * qty);
        });
      });
      return subtotals.reduce((double a, double b) => a + b);
    } else {
      return 0.0;
    }
  }

  void placeOrder() {
    if (this._cart.isNotEmpty) {
      double totalAmount = this._calcTotalAmount();
      Order newOrder = Order(
          orderId: "ORD548932",
          customer: this,
          prods: this._cart,
          totalAmount: totalAmount);
      print("${this.customerName} made a new order.");
      newOrder.printReceipt();
      this._cart.clear();
    } else {
      print("Your shopping cart is empty.");
    }
  }
}
