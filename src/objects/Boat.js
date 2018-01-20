class Boat {

	constructor(game, water, x, y){
		this.game = game;
		this.water = water
		this.sprite = this.game.add.sprite(x, y, 'boat');
		this.sprite.anchor.setTo(0.5, 0.5);
		this.sprite.body.setSize(150,100,0,0)
		this.sprite.angle = Math.atan2(this.sprite.y - this.water.sprite.y, this.sprite.x - this.water.sprite.x);


	}

	update() {
	}

}


export default Boat;