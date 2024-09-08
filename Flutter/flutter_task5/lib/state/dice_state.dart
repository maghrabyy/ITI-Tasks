abstract class DiceState {
  final int? firstDice;
  final int? secondDice;
  DiceState({this.firstDice, this.secondDice});
}

class InitialDiceState extends DiceState {}

class RolledDiceState extends DiceState {
  final int dice1;
  final int dice2;
  RolledDiceState({required this.dice1, required this.dice2})
      : super(firstDice: dice1, secondDice: dice2);
}
