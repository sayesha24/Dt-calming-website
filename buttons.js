class Buttons{

    constructor(){

       this.play_nature = createButton('PLAY');
       this.play_nature.position(displayWidth/2 - 670, displayHeight/2 - 180);
       this.play_nature.style('background', 'rgb(250, 188, 234)');
       this.play_nature.style('font-size', '20px');

       this.stop_nature = createButton('STOP');
       this.stop_nature.position(displayWidth/2 - 580, displayHeight/2 - 180);
       this.stop_nature.style('background', 'rgb(250, 188, 234)');
       this.stop_nature.style('font-size', '20px');

       this.alpha= createButton('ALPHA');
       this.alpha.position(displayWidth/2 - 700, displayHeight/2 + 60);
       this.alpha.style('background', 'rgb(250, 188, 234)');
       this.alpha.style('font-size', '20px');

       this.beta = createButton('BETA');
       this.beta.position(displayWidth/2 - 600, displayHeight/2 + 60);
       this.beta.style('background', 'rgb(250, 188, 234)');
       this.beta.style('font-size', '20px');

       this.gamma = createButton('GAMMA');
       this.gamma.position(displayWidth/2 - 510, displayHeight/2 + 60);
       this.gamma.style('background', 'rgb(250, 188, 234)');
       this.gamma.style('font-size', '20px');

       this.play_alpha = createButton('PLAY');
       this.play_alpha.position(displayWidth/2 - 725, displayHeight/2 + 5);
       this.play_alpha.style('background', 'rgb(250, 188, 234)');
       this.play_alpha.style('font-size', '20px');
       this.play_alpha.hide();

       this.play_beta= createButton('PLAY');
       this.play_beta.position(displayWidth/2 - 725, displayHeight/2 + 5);
       this.play_beta.style('background', 'rgb(250, 188, 234)');
       this.play_beta.style('font-size', '20px');
       this.play_beta.hide();

       this.play_gamma= createButton('PLAY');
       this.play_gamma.position(displayWidth/2 - 725, displayHeight/2 + 5);
       this.play_gamma.style('background', 'rgb(250, 188, 234)');
       this.play_gamma.style('font-size', '20px');
       this.play_gamma.hide();

       this.stop_alpha = createButton('STOP');
       this.stop_alpha.position(displayWidth/2 - 645, displayHeight/2 + 5);
       this.stop_alpha.style('background', 'rgb(250, 188, 234)');
       this.stop_alpha.style('font-size', '20px');
       this.stop_alpha.hide();

       this.stop_beta= createButton('STOP');
       this.stop_beta.position(displayWidth/2 - 645, displayHeight/2 + 5);
       this.stop_beta.style('background', 'rgb(250, 188, 234)');
       this.stop_beta.style('font-size', '20px');
       this.stop_beta.hide();

       this.stop_gamma= createButton('STOP');
       this.stop_gamma.position(displayWidth/2 - 645,displayHeight/2 + 5);
       this.stop_gamma.style('background', 'rgb(250, 188, 234)');
       this.stop_gamma.style('font-size', '20px');
       this.stop_gamma.hide();

       this.back = createButton('BACK');
       this.back.position(displayWidth/2 - 810, displayHeight/2 + 5);
       this.back.style('background', 'rgb(250, 188, 234)');
       this.back.style('font-size', '20px');
       this.back.hide();


       
    }

    display(){

        
        this.play_nature.mousePressed(()=>{

            nature_sounds.loop();

            
            
        });

        this.stop_nature.mousePressed(()=>{

           nature_sounds.stop();
        });




        this.alpha.mousePressed(()=>{

            this.play_alpha.show();
            this.stop_alpha.show();
            this.back.show();


            this.alpha.hide();
            this.gamma.hide();
            this.beta.hide();
        
          
        });

        this.beta.mousePressed(()=>{

            this.back.show();
            this.play_beta.show();
            this.stop_beta.show();

            this.alpha.hide();
            this.gamma.hide();
            this.beta.hide();
           
        });

        this.gamma.mousePressed(()=>{

            this.play_gamma.show();
            this.stop_gamma.show();
            this.back.show();

            this.alpha.hide();
            this.gamma.hide();
            this.beta.hide();

        })

        this.back.mousePressed(()=>{

            this.alpha.show();
            this.beta.show();
            this.gamma.show();

            this.back.hide();
            
            this.play_alpha.hide();
            this.stop_alpha.hide();

            this.play_beta.hide();
            this.stop_beta.hide();

            this.play_gamma.hide();
            this.stop_gamma.hide();
        })

        this.play_alpha.mousePressed(()=>{

           alpha_music.loop ();
        });

      
        this.play_beta.mousePressed(()=>{

            beta_music.loop();
        });

        this.play_gamma.mousePressed(()=>{

            gamma_music.loop();
        });

        
        this.stop_alpha.mousePressed(()=>{

            alpha_music.stop();
        });

        this.stop_beta.mousePressed(()=>{

            beta_music.stop();
        });

        this.stop_gamma.mousePressed(()=>{

            gamma_music.stop();
        });
    }
}