import geraSenha from "./geradores";

// pegas classes do index
const senhaGerada = document.querySelector('.senha-gerada');
const qtdCaracteres = document.querySelector('.qtd-caracteres');
const maiusculas = document.querySelector('.chk-maiusculas');
const minusculas = document.querySelector('.chk-minusculas');
const numeros = document.querySelector('.chk-numeros');
const simbolos = document.querySelector('.chk-simbolos');
const gerarSenha = document.querySelector('.gerar-senha');


// função anonima
export default () =>{
  gerarSenha.addEventListener('click', () =>{
    senhaGerada.innerHTML = gera();
    console.log(maiusculas.checked);


  });
  
};

function gera(){
  const senha = geraSenha(
    qtdCaracteres.value,
    maiusculas.checked,
    minusculas.checked,
    numeros.checked,
    simbolos.checked
  );
  return senha || 'Nada Selecionado';
}