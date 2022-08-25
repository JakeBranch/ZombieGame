import * as PIXI from 'pixi.js';
	
export class GameManager{
   private app: PIXI.Application;
	
   public constructor(){
	  this.app = new PIXI.Application({ width: 1280, height: 720, backgroundColor: 0xFFFFFF });	
	  document.body.appendChild(this.app.view);

      this.loadAssets(this.app.loader, this.app.loader.resources)
   }
	
   private async loadAssets( loader: PIXI.Loader, resources: any ): Promise<void> {
        this.app.loader.add('zombie', 'assets/zombie.png');
        this.app.loader.load()

        this.app.loader.onComplete.add(() => {
            let zombie: PIXI.Sprite = PIXI.Sprite.from("zombie");

            zombie.anchor.set(0.5)
            zombie.x = this.app.renderer.width / 2;
            zombie.y = this.app.renderer.height / 2;

            this.app.stage.addChild(zombie);
        })
    }
}
	
window.onload = function () {
	new GameManager();
}

window.PIXI = PIXI