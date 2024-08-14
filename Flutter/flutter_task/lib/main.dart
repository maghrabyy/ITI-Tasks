import 'package:flutter/material.dart';
import 'package:flutter_task/Drawer.dart';
import 'screens/users_screen.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});
  @override
  Widget build(BuildContext context) {
    return const MaterialApp(
      title: 'Flutter Task',
      debugShowCheckedModeBanner: false,
      home: MyHomePage(title: 'Flutter Task'),
    );
  }
}

class MyHomePage extends StatefulWidget {
  const MyHomePage({super.key, required this.title});

  final String title;

  @override
  State<MyHomePage> createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {
  TextEditingController email = TextEditingController();
  TextEditingController password = TextEditingController();
  String? emailError;
  String? passwordError;
  bool passwordVisibility = false;
  void loginHandler() {
    if (email.text.isNotEmpty && password.text.length >= 6) {
      Navigator.of(context).pushReplacement(MaterialPageRoute(
          builder: (BuildContext context) => const UsersScreen()));
    }
    if (email.text.isEmpty) {
      setState(() {
        emailError = "Email field is required.";
      });
    }
    if (password.text.isEmpty) {
      setState(() {
        passwordError = "Password field is required.";
      });
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        backgroundColor: Colors.white,
        appBar: AppBar(
          elevation: 50,
          backgroundColor: Colors.white,
          title: Text(widget.title),
          actions: const [
            Padding(
              padding: EdgeInsets.only(right: 10.0),
              child: Icon(
                Icons.person_2,
                color: Colors.blueGrey,
              ),
            )
          ],
        ),
        drawer: const MyDrawer(),
        body: Padding(
          padding: const EdgeInsets.symmetric(horizontal: 10.0),
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              Image.network(
                "https://png.pngtree.com/png-vector/20240314/ourmid/pngtree-synthwave-retro-design-sun-and-sigma-png-image_11948059.png",
                height: 200,
              ),
              const Text(
                "Welcome Back, Login Here.",
                style: TextStyle(fontSize: 32.2, fontWeight: FontWeight.bold),
              ),
              Padding(
                padding: const EdgeInsets.symmetric(vertical: 8.0),
                child: TextField(
                  controller: email,
                  onChanged: (value) => {
                    if (value.isEmpty)
                      {
                        setState(() {
                          emailError = "Email field is required.";
                        })
                      }
                    else
                      {
                        setState(() {
                          emailError = null;
                        })
                      }
                  },
                  decoration: InputDecoration(
                    hintText: "Enter your email",
                    errorText: emailError,
                    errorBorder: const OutlineInputBorder(
                        borderSide: BorderSide(color: Colors.red),
                        borderRadius: BorderRadius.all(Radius.circular(2.0))),
                    border: const OutlineInputBorder(
                        borderRadius: BorderRadius.all(Radius.circular(2.0))),
                  ),
                ),
              ),
              const Padding(
                padding: EdgeInsets.only(bottom: 4.0),
                child: Row(
                  mainAxisAlignment: MainAxisAlignment.end,
                  children: [
                    Text("If you forgot your password,"),
                    SizedBox(
                      width: 2.0,
                    ),
                    Text(
                      "Click here.",
                      style: TextStyle(color: Colors.blue),
                    )
                  ],
                ),
              ),
              Padding(
                padding: const EdgeInsets.only(bottom: 8.0),
                child: TextField(
                  controller: password,
                  onChanged: (value) => {
                    if (value.isEmpty)
                      {
                        setState(() {
                          passwordError = "Password field is required.";
                        })
                      }
                    else
                      {
                        if (password.text.length < 6)
                          {
                            setState(() {
                              passwordError =
                                  "Weak password, must be more than 6 characters.";
                            })
                          }
                        else
                          {
                            setState(() {
                              passwordError = null;
                            })
                          }
                      }
                  },
                  obscureText: !passwordVisibility,
                  decoration: InputDecoration(
                    suffixIcon: IconButton(
                        onPressed: () => {
                              setState(() {
                                passwordVisibility = !passwordVisibility;
                              })
                            },
                        icon: Icon(
                          passwordVisibility
                              ? Icons.visibility_off
                              : Icons.visibility,
                        )),
                    hintText: "Enter your password",
                    errorText: passwordError,
                    errorBorder: const OutlineInputBorder(
                        borderSide: BorderSide(color: Colors.red),
                        borderRadius: BorderRadius.all(Radius.circular(2.0))),
                    border: const OutlineInputBorder(
                      borderRadius: BorderRadius.all(Radius.circular(2.0)),
                    ),
                  ),
                ),
              ),
              ElevatedButton(
                onPressed: loginHandler,
                style: ElevatedButton.styleFrom(
                    shape: const BeveledRectangleBorder(
                        borderRadius: BorderRadius.all(Radius.circular(2.0))),
                    fixedSize: const Size(double.maxFinite, 20),
                    backgroundColor: Colors.blueGrey[400],
                    foregroundColor: Colors.white),
                child: const Text("Login"),
              ),
              Row(
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  const Text("You don't have an account?"),
                  const SizedBox(
                    width: 1.5,
                  ),
                  TextButton(onPressed: () => {}, child: const Text("Register"))
                ],
              ),
            ],
          ),
        ));
  }
}
