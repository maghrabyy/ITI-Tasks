List<Map> students = [
  {
    "Name": 'Samir William',
    "Scores": [
      {"JS": 85},
      {"NodeJS": 65},
      {"ReactJS": 88},
      {"NextJS": 76},
    ]
  },
  {
    "Name": 'Mahmoud Elmaghraby',
    "Scores": [
      {"JS": 100},
      {"NodeJS": 95},
      {"ReactJS": 100},
      {"NextJS": 100},
    ]
  },
  {
    "Name": 'Ahmed Khalid',
    "Scores": [
      {"JS": 85},
      {"NodeJS": 95},
      {"ReactJS": 98},
      {"NextJS": 100},
    ]
  },
];

double getAverageScore(Map student) {
  num sum = 0;
  List studentScores = student['Scores'];
  num length = studentScores.length;
  studentScores.forEach((score) {
    score.forEach((k, v) {
      sum += v;
    });
  });
  return sum / length;
}

void studentWithHighestAvgScore(List students) {
  Map student = {};
  for (int i = 0; i < students.length - 1; i++) {
    if (getAverageScore(students[i]) > getAverageScore(students[i + 1])) {
      student = students[i];
    }
  }
  double studentAvgScore = getAverageScore(student);
  String studentName = student['Name'];
  print('$studentName has the highest average score of $studentAvgScore');
}

Iterable<Map<dynamic, dynamic>> filterNameWithLetter(String letter) {
  return students.where(
      (std) => std['Name'].toLowerCase().startsWith(letter.toLowerCase()));
}

void main() {
  //Scores average
  print(getAverageScore(students[1]));
  print("---------------------------------------");
  //Highest score average
  studentWithHighestAvgScore(students);
  print("---------------------------------------");
  //Student starts with a specific letter
  print(filterNameWithLetter("m"));
  print("---------------------------------------");
  //convert names to uppercase
  print(students
      .map((student) => {...student, "Name": student['Name'].toUpperCase()}));
}
