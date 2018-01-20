class Water {

        constructor(game, x, y){
                this.game = game;
                
                this.boat = this.game.add.sprite(0, 0, 'boat');
                //this.boat.scale.setTo(0.1)
                this.game.physics.enable(this.boat, Phaser.Physics.ARCADE);
                this.boat.anchor.setTo(0.5, 0.5);
                this.boat.body.setSize(78, 78, 30, 16) //138, 110

                
                this.sprite = this.game.add.sprite(x, y, 'water');
                this.sprite.alpha = 0.9
                //this.sprite.addChild(this.boat)
                this.rando = this.game.rnd.integerInRange(-2,2)
                this.myAngle = 0
                

//                this.boat.rotation = Math.atan2(this.boat.y - this.sprite.y, this.boat.x - this.sprite.x);

                this.sprite.anchor.setTo(0.5, 0.5);
        }
                
        update(step, gameover) {
                this.boat.angle = Math.atan2(this.sprite.y - this.boat.y, this.sprite.x - this.boat.x) * 180 / Math.PI - 90 - this.rando;
                this.boat.x = this.sprite.x + Math.cos(this.myAngle)*290;
                this.boat.y = this.sprite.y + Math.sin(this.myAngle)*290;
                if (step % 20 == 0) { 
                        this.rando = this.game.rnd.integerInRange(-2,2)

                }
                this.myAngle+=0.005
                if (this.myAngle > 6.26 || gameover) {
                        this.myAngle = 0
                }
         //       console.log(this.myAngle)
        }
}


export default Water;