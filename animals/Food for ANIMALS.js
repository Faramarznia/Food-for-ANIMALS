
function foodForPet(petName, petAge) {
  if (petName == "dog" && petAge <= 1) {
    console.log("شیر مادر");
  }
  // if (petName == "dog" && 1 < petAge < 4 ) {
  //   console.log("تخم مرغ پخته و ورقه ورقه شده همراه با چند قطره روغن زیتون");
  // }
  if (petName == "dog" && petAge >= 4) {
    console.log("دیگه الان مواظب باش خودتو نخوره فقط هرچی دیگه بهش ردی حله");
  }

  if (petName == "cat" && petAge < 7) {
    console.log("باید از غذاهای کیتن ینی غذاهای مخصوص بچه گربه استفاده کند");
  }
  if (petName == "cat" && petAge >= 7) {
    console.log(
      "میتواند از مرغ آبپز و همچنین ماهی و غذاهای خشک مخصوص گربه استفاده کند");
  }

  if (petName == "parrot" && petAge < 1) {
    console.log("سرلاک");
  }
  if (petName == "parrot" && petAge >= 1) {
    console.log(
      "دانه ارزن ، کتان، تخم آفتابگردان، شاهدانه، جو دو سر، مخلوط هفت تخم، بلال، نخود فرنگی، پسته ، بادام زمینی و انواع آجیل ها"
    );
  }
}


foodForPet("cat", 6);
