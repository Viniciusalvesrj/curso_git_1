// condição ? (valor para verdadeiro) : (valor para falso)

const pontuacaoUsuario = 1500;

// if(pontuacaoUsuario >= 1000) {
//     console.log('Usuário VIP');
// } else {
//     console.log('Usuário Normal');
// }

const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuário VIP' : 'Usuário normal';

console.log(nivelUsuario);