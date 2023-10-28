let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
 cursor: "<span style='color: #86709B;'>|</span>",
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color: #86709B;"> "El único viaje imposible es aquel que nunca comienzas" <span>')
  
  .pauseFor(200)
  .deleteChars(10)
  .start();
