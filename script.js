let final_result = document.querySelector("#final_result");
let btn_start = document.querySelector("#btn_start");
let btn_end = document.querySelector("#btn_end");
let btn_clean = document.querySelector("#btn_clean");

let pedra = document.querySelector("#pedra");
let papel = document.querySelector("#papel");
let tesoura = document.querySelector("#tesoura");

let vitorias = 0;
let derrotas = 0;
let empates = 0;

let game_status = 'none';

// Start
btn_start.addEventListener('click', function(){
        if(game_status == 'none'){
            game_status = 'game';
            btn_start.classList.add('alt_btn_start');
            btn_start.textContent = '!! GAME ON !!'; 
        }
    });

// Jogo
function player(){
    let number = Math.floor(Math.random()*3);
    if(number === 1){
        return 'pedra'; 
    } 
    else if(number === 2){
        return 'papel';
    } 
    else{
        return 'tesoura';  
    } 
}
function game(p1){
    let p2 = player();
    alert("p1 = " + p1 + " e p2 = " + p2);
    if(p1 === p2){
        empates++;
    }
    else if(p1 === 'pedra' && p2 === 'papel'){
        derrotas++;
    }
    else if(p1 === 'pedra' && p2 === 'tesoura'){
        vitorias++;
    }
    else if(p1 === 'papel' && p2 === 'pedra'){
        vitorias++;
    }
    else if(p1 === 'papel' && p2 === 'tesoura'){
        derrotas++;
    }
    else if(p1 === 'tesoura' && p2 === 'pedra'){
        derrotas++;
    }
    else if(p1 === 'tesoura' && p2 === 'papel'){
        vitorias++;
    }
    document.querySelector("#vitorias p").textContent = vitorias.toString(); 
    document.querySelector("#derrotas p").textContent = derrotas.toString(); 
    document.querySelector("#empates p").textContent = empates.toString(); 
}
pedra.addEventListener('click', function(){
        if(game_status == 'game')
            game('pedra')
    });
papel.addEventListener('click', function(){
        if(game_status == 'game')
            game('papel')
    });
tesoura.addEventListener('click', function(){
        if(game_status == 'game')
            game('tesoura')
    });

// Finalizar + Resultados
function result(){
    if(vitorias > derrotas && vitorias > empates){
        final_result.style.color = 'rgb(25, 210, 25)';
        final_result.textContent = 'Você ganhou :)';
    }
    else if(derrotas > vitorias && derrotas > empates){
        final_result.style.color = 'rgb(204, 22, 22)';
        final_result.textContent = 'Você perdeu :(';
    }
    else{
        final_result.style.color = 'rgb(22, 86, 204)';
        final_result.textContent = 'Empate';
    }
}
btn_end.addEventListener('click', function(){
        if(game_status == 'game'){
            game_status = 'finalizado';
            btn_start.textContent = 'GAME FINALIZADO';
            result(); 
        }
    });

// Limpar
btn_clean.addEventListener('click', function(){
        game_status = 'none';
        vitorias = 0;
        derrotas = 0;
        empates = 0;
        document.querySelector("#vitorias p").textContent = vitorias.toString(); 
        document.querySelector("#derrotas p").textContent = derrotas.toString(); 
        document.querySelector("#empates p").textContent = empates.toString(); 

        btn_start.classList.remove('alt_btn_start');
        btn_start.textContent = 'Iniciar';
        final_result.textContent = '';
    })
