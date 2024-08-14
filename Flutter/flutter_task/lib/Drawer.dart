import 'package:flutter/material.dart';
import 'screens/users_screen.dart';

class MyDrawer extends StatelessWidget {
  const MyDrawer({super.key});

  @override
  Widget build(BuildContext context) {
    List<Map> navItems = [
      {
        "title": "Home",
        "path": "home",
        "icon": const Icon(Icons.home),
      },
      {
        "title": "About",
        "path": "about",
        "icon": const Icon(Icons.question_mark_rounded),
      },
      {
        "title": "Contact Us",
        "path": "contact-us",
        "icon": const Icon(Icons.phone)
      },
    ];
    return Drawer(
      backgroundColor: Colors.blueGrey,
      child: ListView(
        children: [
          const SizedBox(
            height: 80,
            child: DrawerHeader(
                child: Text(
              "Chat App",
              style: TextStyle(
                  color: Colors.white,
                  fontSize: 18,
                  fontWeight: FontWeight.bold),
            )),
          ),
          ...navItems.map((item) => ListTile(
                onTap: () {
                  Navigator.of(context).pop();
                  Navigator.of(context).push(MaterialPageRoute(
                      builder: (BuildContext context) => const UsersScreen()));
                },
                iconColor: Colors.white,
                textColor: Colors.white,
                leading: item['icon'],
                title: Text(
                  item['title'],
                ),
              )),
        ],
      ),
    );
  }
}
