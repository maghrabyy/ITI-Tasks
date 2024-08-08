enum OrderStatus { pending, processing, completed, cancelled }

String getOrderStatus(OrderStatus status) {
  if (status == OrderStatus.pending)
    return "Pending";
  else if (status == OrderStatus.processing)
    return "Processing";
  else if (status == OrderStatus.completed)
    return "Completed";
  else if (status == OrderStatus.cancelled)
    return "Completed";
  else
    return throw Exception("Invalid order status");
}

void main() {
  print("Order Status: ${getOrderStatus(OrderStatus.pending)}");
  print("Order Status: ${getOrderStatus(OrderStatus.processing)}");
  print("Order Status: ${getOrderStatus(OrderStatus.completed)}");
  print("Order Status: ${getOrderStatus(OrderStatus.cancelled)}");
}
