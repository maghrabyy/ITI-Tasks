import 'package:flutter/material.dart';
import 'package:flutter_svg/flutter_svg.dart';
import 'package:flutter_task4/weather_state.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Task 4',
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
  TextEditingController fieldController = TextEditingController();
  String? textFieldError;
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text("Current Weather"),
      ),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            SvgPicture.asset(
              "images/Weather-amico.svg",
              fit: BoxFit.contain,
              height: 150,
            ),
            const Text("Open Weather API",
                style: TextStyle(fontSize: 32, fontWeight: FontWeight.bold)),
            const Text("Enter a city name to get it's current weather state."),
            Padding(
              padding: const EdgeInsets.all(8.0),
              child: TextField(
                decoration: InputDecoration(
                    errorText: textFieldError,
                    errorBorder: const UnderlineInputBorder(
                        borderSide: BorderSide(color: Colors.red)),
                    label: const Text("City"),
                    floatingLabelBehavior: FloatingLabelBehavior.always,
                    hintText: "Enter city name, Eg; Cairo, Giza...",
                    hintStyle: const TextStyle(color: Colors.grey)),
                controller: fieldController,
              ),
            ),
            Padding(
              padding: const EdgeInsets.all(8.0),
              child: ElevatedButton(
                onPressed: () => {
                  if (fieldController.text.isEmpty)
                    {
                      setState(() {
                        textFieldError = "The city field is required.";
                      })
                    }
                  else
                    {
                      Navigator.of(context).push(MaterialPageRoute(
                          builder: (context) =>
                              WeatherState(cityName: fieldController.text)))
                    }
                },
                style: ElevatedButton.styleFrom(
                    shape: const RoundedRectangleBorder(
                        borderRadius: BorderRadius.all(Radius.circular(8))),
                    minimumSize: Size(MediaQuery.of(context).size.width, 50),
                    backgroundColor: Colors.purple[400]),
                child: const Text(
                  "Show Current Weather",
                  style: TextStyle(color: Colors.white),
                ),
              ),
            )
          ],
        ),
      ),
    );
  }
}
