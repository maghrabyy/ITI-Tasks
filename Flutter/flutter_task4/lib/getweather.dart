import 'dart:convert';
import 'package:http/http.dart' as http;

Future<Map<String, dynamic>> getWeatherData(String cityName) async {
  const apiKey = 'd844b44ff755b5cd0dce0bb6cebc05ff';
  final url = 'https://api.openweathermap.org/data/2.5/weather?q=$cityName&appid=$apiKey';
  
  try {
    final response = await http.get(Uri.parse(url));
    
    if (response.statusCode == 200) {
      return jsonDecode(response.body);
    } else {
      throw Exception('Failed to load weather data');
    }
  } catch (e) {
    throw Exception('Error fetching weather data: $e');
  }
}