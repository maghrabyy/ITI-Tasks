import 'package:flutter/material.dart';
import 'package:flutter_task4/getweather.dart';

class WeatherState extends StatelessWidget {
  const WeatherState({super.key, required this.cityName});
  final String cityName;
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text("Current Weather"),
      ),
      body: FutureBuilder(
          future: getWeatherData(cityName),
          builder: (context, AsyncSnapshot snapshot) {
            if (snapshot.hasData) {
              String weatherDesc = snapshot.data['weather'][0]['description'];
              String weatherIconId = snapshot.data['weather'][0]['icon'];
              String weatherTemp = snapshot.data['main']['temp'].toString();
              String city = snapshot.data['name'];
              String iconUrl =
                  'http://openweathermap.org/img/wn/$weatherIconId@2x.png';
              return Center(
                child: Column(
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: [
                    Image.network(iconUrl),
                    Text(
                      weatherDesc,
                      style: const TextStyle(
                          fontSize: 28, fontWeight: FontWeight.bold),
                    ),
                    Text(
                      weatherTemp,
                      style: const TextStyle(
                          fontSize: 53, fontWeight: FontWeight.bold),
                    ),
                    Text(
                      city,
                      style: const TextStyle(
                          fontSize: 18, fontWeight: FontWeight.w500),
                    )
                  ],
                ),
              );
            } else if (snapshot.hasError) {
              return Center(
                child: Padding(
                  padding: const EdgeInsets.all(12.0),
                  child: Column(
                    mainAxisAlignment: MainAxisAlignment.center,
                    children: [
                      const Text(
                        "There is an error occurred.",
                        style: TextStyle(color: Colors.red),
                      ),
                      Text(
                        '${snapshot.error}',
                        textAlign: TextAlign.center,
                      ),
                    ],
                  ),
                ),
              );
            } else {
              return const Center(child: CircularProgressIndicator());
            }
          }),
    );
  }
}
