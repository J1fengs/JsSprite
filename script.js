window.addEventListener("load", function () {
  const fps = 13;
  const canvas = document.getElementById("canvas1");
  const ctx = canvas.getContext("2d");
  canvas.width = 500;
  canvas.height = 500;
  console.log(ctx);

  class Knight {
    constructor(canvasWidth, canvasHeight) {
      this.canvasWidth = canvasWidth;
      this.canvasHeight = canvasHeight;
      this.image = document.getElementById("attack2");
      this.spriteWidth = 120;
      this.spriteHeight = 80;
      this.width = this.spriteWidth;
      this.height = this.spriteHeight;
      this.scale = 3;
      this.x = this.canvasWidth / 2 - (this.width * this.scale) / 2;
      this.y = this.canvasHeight / 2 - (this.height * this.scale) / 2;
      this.minFrame = 0;
      this.maxFrame = 5;
      this.frame = 0;
      this.frameX = 5;
      this.frameY = 0;
    }
    draw(context) {
      context.drawImage(
        this.image,
        this.frameX * this.spriteWidth,
        this.frameY * this.spriteHeight,
        this.spriteWidth,
        this.spriteHeight,
        this.x,
        this.y,
        this.width * this.scale,
        this.height * this.scale
      );
    }
    update() {
      if (this.frameX < this.maxFrame) this.frameX++;
      else this.frameX = 0;
    }
    setAttack(image) {
      this.image = document.getElementById("attack");
      this.maxFrame = 3;
    }
    setAttack2(image) {
      this.image = document.getElementById("attack2");
      this.maxFrame = 5;
    }
    setCombo(image) {
      this.image = document.getElementById("combo");
      this.maxFrame = 9;
    }
    setRun(image) {
      this.image = document.getElementById("run");
      this.maxFrame = 9;
    }
    setRoll(image) {
      this.image = document.getElementById("roll");
      this.maxFrame = 11;
    }
    // setJump(image) {
    //   this.image = document.getElementById("jump");
    //   this.maxFrame = 2;
    // }
  }
  const knight = new Knight(canvas.width, canvas.height);
  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    knight.draw(ctx);
    knight.update();
    setTimeout(() => {
      requestAnimationFrame(animate);
    }, 1000 / fps);
  }

  animate();

  // Keyboard Bindings
  // 1 and 2 to attack
  window.addEventListener("keydown", (e) => {
    if (e.key === "1") {
      knight.setAttack();
    }
  });
  window.addEventListener("keydown", (e) => {
    if (e.key === "2") {
      knight.setAttack2();
    }
  });
  // 3 for combo
  window.addEventListener("keydown", (e) => {
    if (e.key === "3") {
      knight.setCombo();
    }
  });
  // right arrow to run
  window.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight") {
      knight.setRun();
    }
  });
  // z to roll
  window.addEventListener("keydown", (e) => {
    if (e.key === "z") {
      knight.setRoll();
    }
  });
  // up arrow to jump
  // window.addEventListener("keydown", (e) => {
  //   if (e.key === "ArrowUp") {
  //     knight.setJump();
  //   }
  // });
});
