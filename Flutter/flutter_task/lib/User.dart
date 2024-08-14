import 'package:flutter/material.dart';

class UserChat extends StatelessWidget {
  const UserChat({super.key, required this.name, required this.lastMsg});
  final String name;
  final String lastMsg;
  @override
  Widget build(BuildContext context) {
    return ListTile(
      leading: const CircleAvatar(
        child: Icon(Icons.person),
      ),
      title: Text(name),
      subtitle: Text(lastMsg),
    );
  }
}
