import React from 'react'
import p5 from 'p5'

var sphereSize = 200;
var sphereDirX = 1;
var sphereDirY = -1;
var sphereSpeed = 1;

class Sketch extends React.Component {
    constructor(props) {
        super(props)
        //p5 instance mode requires a reference on the DOM to mount the sketch
        //So we use react's createRef function to give p5 a reference
        this.myRef = React.createRef()
    }

    // This uses p5's instance mode for sketch creation and namespacing
    Sketch = (p) => {

        p.windowResized = () =>{
            p.resizeCanvas(p.windowWidth,p.windowHeight);
        }
        // Native p5 functions work as they would normally but prefixed with 
        // a p5 object "p"
        p.setup = () => {
            //Everyhting that normally happens in setup works
            p.createCanvas(p.windowWidth, p.windowHeight, p.WEBGL);
            //p.position(0, 0, 'fixed');
            p.background(255);
            
        }

        p.draw = () => {
            //p.color('rgb(0,0,255)');
            //p.resetMatrix()
            p.clear();
            
            //let step = p.frameCount % 200;
            //p.applyMatrix(1, 0, 0, 1, 20 + step, 0);
            p.rotateY(p.millis() / 3000);
            p.translate(p.width / 5, p.height / 5);
            //p.push()
            
            //p.translate(p.width / 5, p.height / 5);
            p.stroke(0, 0, 255);
            
            p.sphere(sphereSize);


            //p.position(0,0);
            // And everything that normally goes in draw in here
            //p.background(0)


        }
    }

    componentDidMount() {
        //We create a new p5 object on component mount, feed it 
        this.myP5 = new p5(this.Sketch, this.myRef.current)
    }

    render() {
        return (
            //This div will contain our p5 sketch
            <div ref={this.myRef}>

            </div>
        )
    }
}

export default Sketch