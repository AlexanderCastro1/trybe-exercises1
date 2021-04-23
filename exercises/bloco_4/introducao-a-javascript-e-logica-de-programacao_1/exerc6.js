let peça = "aviao".toLowerCase();

switch(peça){
    case "cavalo":
    console.log("movimentos em L");
    break;

    case "torre":
        console.log("movimenta-se nas horizontais e verticais");
        break;

    case "peão":
        console.log("se movimenta apenas para frente e come peças na diagonal");
        break;

    case "bispo":
        console.log("se movimenta nas diagonais");
        break;

    case "rainha":
        console.log("se movimenta em todas as direções");
        break;

    case "rei":
        console.log("movimenta-se uma casa por vez");
        break;

    default:
        console.log("Error, peça invalida !");
}