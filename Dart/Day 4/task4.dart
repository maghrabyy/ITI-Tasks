class SimpleTime {
  final int hours;
  final int minutes;
  final int seconds;
  final int nanoseconds;
  SimpleTime(
      {this.hours = 0,
      this.minutes = 0,
      this.seconds = 0,
      this.nanoseconds = 0});

  int toSecondOfDay() {
    return (this.hours * 60 * 60) + (this.minutes * 60) + (this.seconds);
  }

  int toNanoSecondOfDay() {
    return (this.hours * 3600000000000) +
        (this.minutes * 60000000000) +
        (this.seconds * 1000000000) +
        (this.nanoseconds);
  }
}

main() {
  SimpleTime noon = SimpleTime(hours: 12);
  print(noon.toSecondOfDay().toString() + " Seconds passed");
  print("------------------");
  print((noon.toNanoSecondOfDay()).toString() + " Nanoseconds passed");
  print("------------------");
  SimpleTime halfPastSix = SimpleTime(hours: 6, minutes: 30);
  print(halfPastSix.toNanoSecondOfDay().toString() + " Nanoseconds passed");
  print("------------------");
  SimpleTime oneSecond = SimpleTime(seconds: 1);
  print(oneSecond.toNanoSecondOfDay().toString() + " Nanoseconds passed");
}
