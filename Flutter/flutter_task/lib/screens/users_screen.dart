import 'package:flutter/material.dart';
import 'package:flutter_task/chats_list.dart';
import 'package:flutter_task/active_users.dart';
import 'package:flutter_task/main.dart';

class UsersScreen extends StatelessWidget {
  const UsersScreen({super.key});
  @override
  Widget build(BuildContext context) {
    return Scaffold(
        appBar: AppBar(
          backgroundColor: Colors.blueGrey,
          foregroundColor: Colors.white,
          title: const Row(
            children: [
              CircleAvatar(
                child: Icon(Icons.person),
              ),
              SizedBox(width: 8),
              Text("My Chats")
            ],
          ),
          actions: [
            IconButton(onPressed: () => {}, icon: const Icon(Icons.settings)),
            IconButton(
                onPressed: () => {
                      Navigator.of(context).push(MaterialPageRoute(
                          builder: (BuildContext context) => const MyHomePage(
                                title: "Login",
                              )))
                    },
                icon: const Icon(Icons.logout))
          ],
        ),
        body: const Column(children: [
          SizedBox(
            height: 100,
            child: Padding(
              padding: EdgeInsets.all(8.0),
              child: ActiveUsers(),
            ),
          ),
          Expanded(child: ChatsList())
        ]));
  }
}
