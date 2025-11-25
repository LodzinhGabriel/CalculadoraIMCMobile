export function calcularIMC(peso, altura) {
  const imc = peso / (altura * altura);

  let categoria = "";
  if (imc < 18.5) categoria = "Magreza";
  else if (imc < 25) categoria = "Normal";
  else if (imc < 30) categoria = "Sobrepeso";
  else if (imc < 35) categoria = "Obesidade I";
  else if (imc < 40) categoria = "Obesidade II";
  else categoria = "Obesidade III";

  return { imc: imc.toFixed(2), categoria };
}
