import 'package:flutter/material.dart';

class BoxContainer extends StatelessWidget {
  const BoxContainer({
    required this.title,
    required this.subtitle,
    required this.buttonLabel,
    required this.buttonIcon,
    required this.containerColor,
    super.key,
  });
  final String title;
  final String subtitle;
  final String buttonLabel;
  final IconData buttonIcon;
  final Color containerColor;
  @override
  Widget build(BuildContext context) {
    return Container(
      decoration: BoxDecoration(
          color: containerColor,
          borderRadius: const BorderRadius.all(Radius.circular(12))),
      child: Padding(
        padding: const EdgeInsets.all(8.0),
        child: Column(
          mainAxisAlignment: MainAxisAlignment.spaceEvenly,
          children: [
            Text(
              title,
              style: const TextStyle(color: Colors.white),
            ),
            Text(
              subtitle,
              style: const TextStyle(color: Colors.white),
            ),
            ElevatedButton(
              style: ElevatedButton.styleFrom(maximumSize: Size(148, 40)),
              onPressed: () => {},
              child: Row(
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  Icon(buttonIcon),
                  const SizedBox(
                    width: 8,
                  ),
                  Text(buttonLabel),
                ],
              ),
            )
          ],
        ),
      ),
    );
  }
}
