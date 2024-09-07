import 'package:flutter/material.dart';

class IconText extends StatelessWidget {
  const IconText({
    required this.icon,
    required this.text,
    super.key,
  });
  final IconData icon;
  final String text;
  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.symmetric(horizontal: 10.0),
      child: SizedBox(
        width: 60,
        child: Column(
          children: [
            CircleAvatar(
              backgroundColor: Colors.white,
              foregroundColor: Colors.black,
              child: Icon(icon),
            ),
            const SizedBox(height: 8.0),
            Text(
              text,
              textAlign: TextAlign.center,
            )
          ],
        ),
      ),
    );
  }
}
