export default class Win extends Phaser.Scene {
  constructor() {
    super("Win");
  }

  create() {
    let winSound = this.sound.add("winSound", { loop: true });
    winSound.play();

    this.add
      .image(400, 300, "win")
      .setScale(0.555)
      .setInteractive()
      .on(
        "pointerdown",
        () => {winSound.stop(),
        this.scene.start("StartMenu")
        });
  }
}
