class Overworld {
  // instance'ı alındığında gelen parametreyi element özelliğine ata ve index.html sayfasında bulunan .game-canvas isimli dom objesini canvas özelliğine ata. Daha sonrasında çizim yapabilmek için canvas metodunu çağırıyoruz.
  constructor(config) {
    this.element = config.element;
    this.canvas = this.element.querySelector(".game-canvas");
    this.ctx = this.canvas.getContext("2d");
  }

  init() {
    /*=============================================
    =                 Palet Image                  =
    =============================================*/
    // new Image(document.createElement('img')) ile yeni bir img elementi oluşturuyoruz.
    const image = new Image();
    // Sonrasında resim yüklendiğin de resmimizi canvas içerisine çiziyoruz.
    image.onload = () => {
      this.ctx.drawImage(image, 0, 0);
    };
    image.src = "/images/maps/DemoLower.png";
    /*=====  End of Palet Image  ======*/

    /*=============================================
    =                 Hero Image                  =
    =============================================*/
    const x = 5;
    const y = 6;

    // hero shadow
    const shadow = new Image();
    shadow.onload = () => {
      this.ctx.drawImage(
        shadow,
        0, // x ekseninde(soldan sağa) kesmeye başlayacağımız yer.
        0, // y ekseninde(yukarıdan aşağıya) kesmeye başlayacağımız yer.
        32, // Keseceğimiz yükseklik
        32, // Keseceğimiz genişlik
        x * 16 - 8, // x ekseninde taşıyacağımız yer
        y * 16 - 18, // y ekseninde taşıyacağımız yer
        32, // resimin yüksekliği
        32 // resimin genişliği
      );
    };
    shadow.src = "/images/characters/shadow.png";

    // hero image
    const hero = new Image();
    hero.onload = () => {
      this.ctx.drawImage(hero, 0, 0, 32, 32, x * 16 - 8, y * 16 - 18, 32, 32);
    };
    hero.src = "/images/characters/people/hero.png";
    /*=====  End of Hero Image  ======*/
  }
}
