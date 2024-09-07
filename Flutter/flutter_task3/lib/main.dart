import 'package:flutter/material.dart';
import 'package:flutter_task3/custom_navigation_button.dart';
import 'package:flutter_task3/slider.dart';
import 'package:flutter_task3/box_container.dart';
import 'package:flutter_task3/icon_text.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Task 3',
      debugShowCheckedModeBanner: false,
      theme: ThemeData(
        useMaterial3: true,
      ),
      home: const MyHomePage(),
    );
  }
}

class MyHomePage extends StatefulWidget {
  const MyHomePage({super.key});

  @override
  State<MyHomePage> createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        centerTitle: true,
        title: const Text("Paycell"),
      ),
      body: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Padding(
            padding: const EdgeInsets.all(12.0),
            child: Row(
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              children: [
                Row(
                  children: [
                    ClipOval(
                      child: Image.asset(
                        "images/maghraby.jpg",
                        width: 32,
                        height: 32,
                        fit: BoxFit.cover,
                      ),
                    ),
                    const SizedBox(
                      width: 4.0,
                    ),
                    const Text(
                      "Mahmoud Elmaghraby",
                      style: TextStyle(fontSize: 18),
                    )
                  ],
                ),
                const Stack(children: [
                  Icon(
                    Icons.notifications_outlined,
                    size: 32,
                  ),
                  Positioned(
                    top: 0,
                    right: 0,
                    child: Badge(
                      padding: EdgeInsets.all(1.0),
                      label: Text("1"),
                    ),
                  ),
                ])
              ],
            ),
          ),
          SizedBox(
            height: 200,
            child: Padding(
              padding: const EdgeInsets.all(12.0),
              child: GridView.count(
                crossAxisCount: 2,
                crossAxisSpacing: 12,
                children: const [
                  BoxContainer(
                    title: "Paycell KKTC Hesabim",
                    subtitle: "\$ 17.500,00",
                    buttonLabel: "Pars Yakle",
                    buttonIcon: Icons.wallet,
                    containerColor: Color(0xff024DA0),
                  ),
                  BoxContainer(
                    title: "Paycell KKTC Hesabim",
                    subtitle: "\$ 1.850,20",
                    buttonLabel: "Pars Yakle",
                    buttonIcon: Icons.wallet,
                    containerColor: Color(0xff7763FA),
                  ),
                ],
              ),
            ),
          ),
          const Padding(
            padding: EdgeInsets.symmetric(horizontal: 12.0),
            child: Text("My Account"),
          ),
          const Padding(
            padding: EdgeInsets.symmetric(horizontal: 12.0, vertical: 8.0),
            child: Row(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                IconText(icon: Icons.wallet, text: 'My Card'),
                IconText(icon: Icons.money, text: 'My Balance'),
                IconText(icon: Icons.call_received_sharp, text: 'Receive Cash'),
                IconText(icon: Icons.send_sharp, text: 'Send Cash'),
              ],
            ),
          ),
          CustomSlider(),
        ],
      ),
      bottomNavigationBar: const CustomNavigationBar(),
    );
  }
}
