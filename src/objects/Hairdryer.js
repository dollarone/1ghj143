class Hairdryer {

	constructor(game, x, y){
		this.game = game;
		this.sprite = this.game.add.sprite(x, y, 'moon');
		this.sprite.anchor.setTo(0.5, 0.5);
		this.sprite.scale.setTo(0.8);
		this.game.physics.enable(this.sprite, Phaser.Physics.ARCADE);
    	this.game.input.mouse.capture = true;
    	this.sprite.angle = 90;
    	this.angle = 90;
    	this.mod = 3;
    	this.sprite.body.setSize(1,1,0,0);
	}

	update() {
		//this.game.physics.arcade.moveToPointer(this.sprite, 1400);
		this.sprite.x = this.game.input.x;
		this.sprite.y = this.game.input.y;


		if (this.game.input.activePointer.leftButton.isDown) {
			this.angle -= this.mod;
			this.sprite.angle = this.angle;
		}
		else if (this.game.input.activePointer.rightButton.isDown) {
			this.angle += this.mod;
			this.sprite.angle =this.angle;
		}

	}

}


export default Hairdryer;