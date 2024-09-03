int moneyNeededToBorrow(int bananaCost, int soliderCash, int numOfBananas) {
  int bananasSum = 0;
  for (int i = 1; i <= numOfBananas; i++) {
    bananasSum += i * bananaCost;
  }
  int moneyNeeded = soliderCash - bananasSum;
  return moneyNeeded < 0 ? moneyNeeded.abs() : 0;
}

main() {
  print(moneyNeededToBorrow(3, 17, 4));
}
