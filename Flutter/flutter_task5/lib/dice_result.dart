import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:flutter_svg/flutter_svg.dart';
import 'package:flutter_task5/state/dice_state.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';
import 'package:flutter_task5/state/dice_cubit.dart';

class DiceResult extends StatelessWidget {
  const DiceResult({super.key});

  @override
  Widget build(BuildContext context) {
    return BlocBuilder<DiceCubit, DiceState>(
      builder: (context, state) {
        int diceTotal = state.firstDice! + state.secondDice!;
        return Scaffold(
          body: SafeArea(
            child: Column(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                Text(
                  "Total: $diceTotal",
                  style: const TextStyle(
                      fontSize: 32, fontWeight: FontWeight.w600),
                ),
                const SizedBox(
                  height: 12,
                ),
                Row(
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: [
                    SvgPicture.asset(
                      "images/d${state.firstDice}.svg",
                      width: 80,
                    ),
                    const SizedBox(
                      width: 12,
                    ),
                    SvgPicture.asset(
                      "images/d${state.secondDice}.svg",
                      width: 80,
                    ),
                  ],
                ),
              ],
            ),
          ),
          floatingActionButton: FloatingActionButton(
            onPressed: () => {context.read<DiceCubit>().rollDice()},
            child: Icon(
              FontAwesomeIcons.dice,
              color: Colors.red[300],
            ),
          ),
        );
      },
    );
  }
}
