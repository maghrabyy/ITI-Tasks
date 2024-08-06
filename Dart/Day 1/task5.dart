int fib(int n) {
  int a = 0;
  int b = 1;
  int c;
  for (int i = 0; i < n - 1; i++) {
    c = a + b;
    a = b;
    b = c;
  }
  return b;
}

void main() {
  int num = 9;

  print("The sum of the fibonnaci series of number $num is ${fib(9)}");
}
