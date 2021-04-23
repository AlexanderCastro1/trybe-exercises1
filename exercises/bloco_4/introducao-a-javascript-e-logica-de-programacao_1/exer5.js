let base = 60;
let oposto = 60;
let adjacent = 60;
let soma = base + oposto + adjacent;

if (soma == 180) {
    console.log(true);
}
else if (base <= 0 || oposto <= 0 || adjacent <= 0) {
    console.log("numero invalido");
}
else if (soma != 180) {
    console.log(false)
}
else {
    console.log("error")
}
