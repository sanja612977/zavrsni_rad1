
 function loto() {

  let x = Math.ceil(Math.random() * 100);
  let broj = prompt('Unesite broj između 1 i 100.');
  
if (broj == null) {
      alert("Unešena vrednost nije broj.") 
  } else if (broj > x) {
      alert(broj + " je ve veći od traženog broja.");
  } else if (broj < x) {
      alert(broj + " je manji od traženog broja.");
  } else if (broj == x) {
      alert("Čestitamo!" + x + " je broj koji tražimo!");
  } else {
      alert("Unesite broj.");
  };
}

for (i = 1; i <= 4; i++) {
  if (i > 3) {
      alert("Iskoristili ste maksimalan broj pokušaja.");
      break;
  } else {
      loto();
  }
}