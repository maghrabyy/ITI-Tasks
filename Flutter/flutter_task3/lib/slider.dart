import 'package:flutter/material.dart';

class MySlide {
  final String text;
  final String image;
  MySlide({required this.text, required this.image});
}

class CustomSlider extends StatefulWidget {
  const CustomSlider({super.key});

  @override
  State<CustomSlider> createState() => _CustomSliderState();
}

class _CustomSliderState extends State<CustomSlider> {
  final PageController _controller = PageController(initialPage: 0);

  int currentPageIndex = 0;

  List<MySlide> mySlides = [
    MySlide(
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        image: "images/Mobilepayments.png"),
    MySlide(
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        image: "images/CreditCardPayment.png"),
    MySlide(
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        image: "images/CashPayment.png")
  ];

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        Padding(
          padding: const EdgeInsets.symmetric(horizontal: 12.0, vertical: 8.0),
          child: Container(
            decoration: const BoxDecoration(
                color: Color(0xffFAAD5B),
                borderRadius: BorderRadius.all(Radius.circular(12))),
            child: Padding(
              padding: const EdgeInsets.all(20.0),
              child: SizedBox(
                width: MediaQuery.of(context).size.width,
                height: 120,
                child: PageView.builder(
                    controller: _controller,
                    onPageChanged: (val) => {
                          setState(() {
                            currentPageIndex = val;
                          })
                        },
                    itemCount: mySlides.length,
                    itemBuilder: (context, int currentIndex) => SlidePage(
                        text: mySlides[currentIndex].text,
                        image: mySlides[currentIndex].image)),
              ),
            ),
          ),
        ),
        Row(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            PageIndicator(currentIndex: currentPageIndex, slideIndex: 0),
            const SizedBox(width: 8),
            PageIndicator(currentIndex: currentPageIndex, slideIndex: 1),
            const SizedBox(width: 8),
            PageIndicator(currentIndex: currentPageIndex, slideIndex: 2),
          ],
        )
      ],
    );
  }
}

class SlidePage extends StatelessWidget {
  const SlidePage({super.key, required this.text, required this.image});
  final String text;
  final String image;
  @override
  Widget build(BuildContext context) {
    return Row(
      crossAxisAlignment: CrossAxisAlignment.center,
      children: [
        SizedBox(
          width: MediaQuery.of(context).size.width * 0.5,
          child: Text(
            text,
            style: const TextStyle(fontSize: 18, fontWeight: FontWeight.bold),
          ),
        ),
        Image.asset(
          image,
          width: 120,
        )
      ],
    );
  }
}

class PageIndicator extends StatelessWidget {
  const PageIndicator({
    super.key,
    required this.currentIndex,
    required this.slideIndex,
  });

  final int currentIndex;
  final int slideIndex;
  @override
  Widget build(BuildContext context) {
    return AnimatedContainer(
        width: 10,
        height: 10,
        duration: const Duration(milliseconds: 300),
        decoration: BoxDecoration(
          color: currentIndex == slideIndex ? Colors.black : Colors.grey[400],
          borderRadius: BorderRadius.circular(100),
        ));
  }
}
