

/*const emailLogin = document.getElementById("emailLogin").value;
const senhaLogin =  document.getElementById("senhaLogin").value;*/


function cadastro() {
    const nomeCadastro = document.getElementById("nome-cadastro").value;
    const emailCadastro = document.getElementsByClassName("email-cadastro").value;
    const senhaCadastro = document.getElementsByClassName("senha-cadastro").value;
    const telCadastro = document.getElementsByClassName("tel-cadastro").value;
    const dataCadastro = document.getElementsByClassName("date-cadastro").value;
    alert('Cadastro realizado com sucesso')
    location.href = "home.html"
}

const botao = document.getElementsByClassName('botao-dados')[0];
const nome = document.getElementById('titulo-dados');

botao.onclick = () => {
    const novaDescricao = prompt('Insira seu novo dado:');
    if (novaDescricao !== null && novaDescricao !== '') {
        nome.textContent = novaDescricao;
    }
};


function logar(){

    if(emailCadastro == emailLogin && senhaCadastro == senhalogin){
        alert('Login foi feito com sucesso')
        location.href = "home.html"
    }else{
        alert("Usuario e senha invalido")
    }
}


/*@function logar(){
    const emailLogin = document.getElementById("emailLogin").value;
    const senhaLogin =  document.getElementById("senhaLogin").value;
    
    if(emailLogin == "admin@gmail.com" && senhaLogin == "admin"){
        alert("Logado com sucesso");
        location.href = "home.html";
    }else{
        alert('Usuario e senha invalidos');
    }
}*/