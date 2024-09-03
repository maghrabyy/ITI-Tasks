import "dart:io";

String drBannersFeelings(int n) {
  return n.isEven ? 'I hate' : "I love";
}

void drBannersFeelingsLayer(int layers) {
  for (int i = 0; i < layers; i++) {
    if (layers == 1) {
      stdout.write(drBannersFeelings(i) + " it");
    } else {
      stdout.write(i < layers - 1
          ? drBannersFeelings(i) + ' that' + " "
          : drBannersFeelings(i) + ' it');
    }
  }
}

main() {
  drBannersFeelingsLayer(1);
  print("");
  drBannersFeelingsLayer(2);
  print("");
  drBannersFeelingsLayer(3);
  print("");
  drBannersFeelingsLayer(4);
  print("");
}
