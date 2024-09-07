import 'package:flutter/material.dart';

class CustomNavigationBar extends StatelessWidget {
  const CustomNavigationBar({
    super.key,
  });

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.symmetric(horizontal: 12.0, vertical: 8.0),
      child: Container(
        height: 60,
        decoration: const BoxDecoration(
            borderRadius: BorderRadius.all(Radius.circular(18)),
            color: Color(0xff4993BA)),
        child: Row(
          mainAxisAlignment: MainAxisAlignment.spaceEvenly,
          children: [
            const Icon(
              Icons.home_outlined,
              color: Colors.white,
              size: 38,
            ),
            const Icon(
              Icons.wallet_outlined,
              color: Colors.white,
              size: 38,
            ),
            Container(
              decoration: const BoxDecoration(
                  borderRadius: BorderRadius.all(
                    Radius.circular(12),
                  ),
                  color: Colors.white),
              child: const Padding(
                padding: EdgeInsets.symmetric(horizontal: 12.0, vertical: 6),
                child: Icon(
                  Icons.qr_code_scanner,
                  color: Color(0xff4993BA),
                  size: 38,
                ),
              ),
            ),
            const Icon(
              Icons.attach_money,
              color: Colors.white,
              size: 38,
            ),
            const Icon(
              Icons.person_2_rounded,
              color: Colors.white,
              size: 38,
            ),
          ],
        ),
      ),
    );
  }
}
