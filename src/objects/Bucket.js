class Bucket {

	constructor(game, x, y){
		this.game = game;
		this.earths = this.game.add.physicsGroup()
		this.sprite = this.earths.create(x-5, y, 'earth1');
		this.sprite2 = this.earths.create(x, y-10, 'earth2');
		//this.sprite2 = this.game.add.sprite(x, y, 'earth');
		this.sprite.anchor.setTo(0.5, 0.5);
		this.sprite2.anchor.setTo(0.5, 0.5);
		//this.sprite2.anchor.setTo(0.5, 0.5);
		this.sprite.scale.setTo(0.9);
		this.sprite2.scale.setTo(0.9);
		this.game.physics.enable(this.sprite, Phaser.Physics.ARCADE);
		this.game.physics.enable(this.sprite2, Phaser.Physics.ARCADE);

	}

}


export default Bucket;