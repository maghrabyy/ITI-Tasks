class Address {
  final String? country;
  final String? city;
  final String? street;
  Address({this.country, this.city, this.street});
}

class PersonalInfo {
  final String? email;
  final Address? address;
  PersonalInfo({this.email, this.address});
}

class Client {
  final String name;
  final PersonalInfo? personalInfo;
  Client({required this.name, this.personalInfo});
}

extension clientExtension on Client {
  void getFullInfo() {
    print('Name: ${this.name}');
    print('Email: ${this.personalInfo?.email ?? 'unspecified'}');
    print('Country: ${this.personalInfo?.address?.country ?? 'unspecified'}');
    print('City: ${this.personalInfo?.address?.city ?? 'unspecified'}');
    print('Street: ${this.personalInfo?.address?.street ?? 'unspecified'}');
  }
}

main() {
  Client client1 = Client(
      name: "Mahmoud",
      personalInfo: PersonalInfo(
          email: "mahmoud.elmaghraby11@gmail.com",
          address: Address(country: "Egypt", city: "Giza")));
  client1.getFullInfo();
  print("-------------------------");
  Client(name: "Omar").getFullInfo();
}
