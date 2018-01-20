import Boat from 'objects/Boat';
import Hairdryer from 'objects/Hairdryer';
import Bucket from 'objects/Bucket';
import Water from 'objects/Water';

class Main extends Phaser.State {

	create() {

		this.game.physics.startSystem(Phaser.Physics.ARCADE)

		this.game.stage.backgroundColor = '#98FB98';


		this.bucket = new Bucket(this.game, this.game.world.width/2, this.game.world.height/2);

		this.water = new Water(this.game, this.game.world.width/2, this.game.world.height/2);
		this.hairdryer = new Hairdryer(this.game, this.game.world.width/2, this.game.world.height/2);

		this.gameover = false;

        this.rKey = this.game.input.keyboard.addKey(Phaser.Keyboard.R);
    	this.rKey.onDown.add(this.restart, this);

		this.winLabel = this.add.text(this.game.world.width/2 -60, this.game.world.height/2-10, '', )
		this.winLabel.addColor("#e00", 0) //red

	}

	restart() {
		this.game.state.restart();
	}

	endgame() {
		this.gameover = true;
	}
	killparticle(part, wall) {
		part.kill();
	}
	update() {
		this.step += 1;

		if (this.gameover) {
			return;
		}
		this.speed = 1
		this.hairdryer.update()
		if (this.game.input.activePointer.leftButton.isDown) {

			this.speed = 200/this.distanceBetweenTwoPoints(this.hairdryer.sprite, this.water.sprite) 

		    this.rotation = Math.atan2(this.hairdryer.sprite.y - this.water.sprite.y, this.hairdryer.sprite.x - this.water.sprite.x);

			this.oldDistance = this.distanceBetweenTwoPoints(this.bucket.sprite, this.water.sprite)
			this.newDistance = {}
	    	this.newDistance["x"] = this.water.sprite.x + Math.cos(this.rotation) * this.speed;
	    	this.newDistance["y"] = this.water.sprite.y + Math.sin(this.rotation) * this.speed;

			if (this.distanceBetweenTwoPoints(this.bucket.sprite, this.newDistance) < 60) {
				this.water.sprite.x = this.newDistance["x"]
				this.water.sprite.y = this.newDistance["y"]
			}
			
		}
		if (this.water.myAngle>6.25 && !this.gameover) {
			this.winLabel.text = "You Win!"
			this.gameover = true

		}
		this.water.update(this.step, this.gameover)
		this.hitPlatform = this.game.physics.arcade.collide(this.water.boat, this.bucket.earths)
		if (this.hitPlatform) {
			this.winLabel.text = "You Fail!"
			this.gameover = true
		}
		//console.log(this.hitPlatform)
	}

   distanceBetweenTwoPoints(a, b) {
        var xs = b.x - a.x;
        xs = xs * xs;

        var ys = b.y - a.y;
        ys = ys * ys;

        return Math.sqrt(xs + ys);
    }

	
	render() {
		//this.game.debug.text(this.game.time.fps, 2, 14, "#00ff00");
		//  this.game.debug.body(this.water.boat)
//		this.game.debug.body(this.bucket.sprite)

	}
}

export default Main;