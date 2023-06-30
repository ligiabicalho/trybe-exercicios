let piece = 'rainha'

switch (piece) {
  case 'peão':
    console.log('Peão anda uma casa pra frente');
    break;
  case 'rainha':
    console.log('A Rainha anda em qualquer direção, quantas casas quiser');
    break;
  default:
    console.log('Essa peça não existe');
}
