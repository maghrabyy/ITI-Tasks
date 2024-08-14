import 'package:flutter/material.dart';
import 'package:flutter_task/User.dart';

List<UserChat> users = [
  const UserChat(name: "Mahmoud Elmaghraby", lastMsg: "Hello, how are you?"),
  const UserChat(name: "Mahmoud Elmaghraby", lastMsg: "Hello, how are you?"),
  const UserChat(name: "Mahmoud Elmaghraby", lastMsg: "Hello, how are you?"),
  const UserChat(name: "Mahmoud Elmaghraby", lastMsg: "Hello, how are you?"),
  const UserChat(name: "Mahmoud Elmaghraby", lastMsg: "Hello, how are you?"),
  const UserChat(name: "Mahmoud Elmaghraby", lastMsg: "Hello, how are you?"),
  const UserChat(name: "Mahmoud Elmaghraby", lastMsg: "Hello, how are you?"),
  const UserChat(name: "Mahmoud Elmaghraby", lastMsg: "Hello, how are you?"),
  const UserChat(name: "Mahmoud Elmaghraby", lastMsg: "Hello, how are you?"),
  const UserChat(name: "Mahmoud Elmaghraby", lastMsg: "Hello, how are you?"),
  const UserChat(name: "Mahmoud Elmaghraby", lastMsg: "Hello, how are you?"),
  const UserChat(name: "Mahmoud Elmaghraby", lastMsg: "Hello, how are you?"),
  const UserChat(name: "Mahmoud Elmaghraby", lastMsg: "Hello, how are you?"),
  const UserChat(name: "Mahmoud Elmaghraby", lastMsg: "Hello, how are you?"),
];

class ChatsList extends StatelessWidget {
  const ChatsList({super.key});

  @override
  Widget build(BuildContext context) {
    return ListView.separated(
        itemBuilder: (context, index) {
          return users[index];
        },
        separatorBuilder: (context, index) {
          return const SizedBox(
            height: 5,
          );
        },
        itemCount: users.length);
  }
}
