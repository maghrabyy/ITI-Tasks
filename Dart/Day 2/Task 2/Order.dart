import "Customer.dart";
import "Product.dart";

class Order {
  final String _orderId;
  Customer _customer;
  List<Map<Product, int>> _products;
  double _totalAmount;

  Order(
      {required String orderId,
      required Customer customer,
      required List<Map<Product, int>> prods,
      required double totalAmount})
      : this._orderId = orderId,
        this._customer = customer,
        this._products = prods,
        this._totalAmount = totalAmount;

  void printReceipt() {
    print("--------------------------------");
    print("Order ID: ${this._orderId}");
    print("Customer Name: ${this._customer.customerName}");
    print("--------------Items-------------------");
    for (Map<Product, int> cartItem in this._products) {
      cartItem.forEach((Product product, int qty) {
        print(
            "--${product.productName} (${product.productPrice} EGP x ${qty}) --");
      });
    }
    print("Total Amount: ${this._totalAmount} EGP");
    print("--------------------------------");
  }
}
