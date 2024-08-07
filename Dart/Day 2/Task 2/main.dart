import "Product.dart";
import 'Customer.dart';

void main() {
  Product prod1 = Product(
      prodId: "prod01", name: "Lenovo Legion 5 pro", price: 55000.0, stock: 5);
  Product prod2 =
      Product(prodId: "prod02", name: "Dell G15", price: 45000.0, stock: 7);

  Customer cst1 = Customer(cstId: "CST01", name: "Mahmoud");
  cst1.addProdToCart(prod1, 1);
  cst1.addProdToCart(prod2, 2);
  cst1.placeOrder();
  cst1.removeProdFromCart(prod2);
}
