// https://github.com/processing/p5.js/wiki/Global-and-instance-mode
import p5 from "p5";

/*
** @param {p5} s
*/

const sketch = function (s) {
  polygon = function (x, y, radius, npoints) {
      let angle = s.TWO_PI / npoints;
      s.beginShape();
      for (let a = 0; a < s.TWO_PI; a += angle) {
        let sx = x + Math.cos(a) * radius;
        let sy = y + Math.sin(a) * radius;
        s.vertex(sx, sy);
      }
      s.endShape(s.CLOSE);
    };

    s.setup = function () {
        s.createCanvas(s.windowWidth, s.windowHeight);
    };

    s.draw = function () {
        s.background("#FEFBEA");
        s.fill("#E62B09");
        polygon(s.windowWidth / 2, s.windowHeight / 2, 120, 6);
    
    };
};

const sketchInstance = new p5(sketch, document.getElementById("sketch"));
