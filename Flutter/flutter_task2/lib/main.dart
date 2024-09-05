import 'package:flutter/material.dart';
import 'package:flutter_svg/flutter_svg.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Task 2',
      debugShowCheckedModeBanner: false,
      theme: ThemeData(
        colorScheme: ColorScheme.fromSeed(seedColor: Colors.deepPurple),
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
  final _pageController = PageController(initialPage: 0);
  int currentPageIndex = 0;
  List<Map<String, String>> slides = [
    {
      "imgSrc": "Record-player-bro.svg",
      "title": "Listen Anywhere",
      "subtitle":
          "Favorite tunes follow; anytime, anywhere. Worry-free offline playback for your journey."
    },
    {
      "imgSrc": "Cassette-player-bro.svg",
      "title": "Playback",
      "subtitle":
          "Pristine sound quality for absolute clarity in audio playback."
    },
    {
      "imgSrc": "Cassette-player-pana.svg",
      "title": "Music For You",
      "subtitle":
          "Curated weekly playlists tailored to your music listening history."
    },
  ];

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: SafeArea(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            Expanded(
              child: Padding(
                padding: const EdgeInsets.symmetric(horizontal: 32.0),
                child: PageView(
                    controller: _pageController,
                    scrollDirection: Axis.horizontal,
                    onPageChanged: (index) => {currentPageIndex = index},
                    children: slides
                        .map((slide) => Slide(
                            imgSrc: slide['imgSrc']!,
                            title: slide['title']!,
                            subtitle: slide['subtitle']!))
                        .toList()),
              ),
            ),
            Padding(
              padding: const EdgeInsets.only(
                  left: 32.0, right: 32, bottom: 25, top: 4),
              child: ElevatedButton(
                onPressed: () => {
                  currentPageIndex++,
                  _pageController.animateToPage(currentPageIndex,
                      duration: const Duration(milliseconds: 300),
                      curve: Curves.easeIn)
                },
                style: ElevatedButton.styleFrom(
                    backgroundColor: Colors.green[400],
                    minimumSize: const Size(double.infinity, 50)),
                child: const Text(
                  "Continue",
                  style: TextStyle(color: Colors.white),
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }
}

class Slide extends StatelessWidget {
  const Slide(
      {super.key,
      required this.imgSrc,
      required this.title,
      required this.subtitle});
  final String imgSrc;
  final String title;
  final String subtitle;
  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        SvgPicture.asset(
          'assets/$imgSrc',
        ),
        Text(
          title,
          style: const TextStyle(fontWeight: FontWeight.bold, fontSize: 32),
        ),
        Text(subtitle,
            textAlign: TextAlign.center,
            style: const TextStyle(color: Colors.grey))
      ],
    );
  }
}
