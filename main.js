let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
 cursor: "<span style='color: #94ADD7;'>|</span>",
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color: #94ADD7;"> Soy estudiante y desarrolladora Frontend Jr <span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();
