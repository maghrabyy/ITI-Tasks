import 'package:flutter/material.dart';

class UserIcon extends StatelessWidget {
  const UserIcon({super.key, required this.name});
  final String name;
  @override
  Widget build(BuildContext context) {
    return SizedBox(
      width: 70,
      child: Column(children: [
        const CircleAvatar(
          child: Icon(Icons.person),
        ),
        Text(
          name,
          maxLines: 2,
          style: const TextStyle(overflow: TextOverflow.ellipsis),
          textAlign: TextAlign.center,
        )
      ]),
    );
  }
}
