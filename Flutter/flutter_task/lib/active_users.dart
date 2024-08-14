import 'package:flutter/material.dart';
import "user_icon.dart";

List<UserIcon> activeUsers = [
  const UserIcon(name: "Mahmoud Elmaghraby"),
  const UserIcon(name: "Mohamed Hesham"),
  const UserIcon(name: "Hossam Mohamed"),
  const UserIcon(name: "Samir Williams"),
  const UserIcon(name: "Sameh Ehab"),
  const UserIcon(name: "Sameh Faheem"),
];

class ActiveUsers extends StatelessWidget {
  const ActiveUsers({super.key});

  @override
  Widget build(BuildContext context) {
    return ListView.separated(
        scrollDirection: Axis.horizontal,
        itemBuilder: (context, index) {
          return activeUsers[index];
        },
        separatorBuilder: (context, index) {
          return const SizedBox(
            width: 8,
          );
        },
        itemCount: activeUsers.length);
  }
}
