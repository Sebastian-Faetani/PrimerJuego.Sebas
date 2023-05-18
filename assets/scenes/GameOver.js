export default class GameOver extends Phaser.Scene {
  constructor() {
    super("GameOver");
  }

  create() {
    this.failSound = this.sound.add("failSound", { loop: true });
    this.failSound.play();

    this.add
      .image(400, 300, "youLost")
      .setScale(3)
      .setInteractive()
      .on("pointerdown", () => {
        this.failSound.stop(), this.scene.start("StartMenu");
      });
  }
}
