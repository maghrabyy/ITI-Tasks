import 'dart:math';

import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:flutter_task5/state/dice_state.dart';

class DiceCubit extends Cubit<DiceState> {
  DiceCubit() : super(InitialDiceState());

  void rollDice() {
    int firstDiceNum = Random().nextInt(6) + 1;
    int secondDiceNum = Random().nextInt(6) + 1;
    emit(RolledDiceState(dice1: firstDiceNum, dice2: secondDiceNum));
  }
}
