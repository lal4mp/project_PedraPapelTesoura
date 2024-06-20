let final_result = document.querySelector("#final_result");
let count_jogadas = document.querySelector("#count_jogadas");
let btn_start = document.querySelector("#btn_start");
let btn_end = document.querySelector("#btn_end");
let btn_clean = document.querySelector("#btn_clean");
let img_p2 = document.querySelector("#img_p2");

let pedra = document.querySelector("#pedra");
let papel = document.querySelector("#papel");
let tesoura = document.querySelector("#tesoura");

let vitorias = 0;
let derrotas = 0;
let empates = 0;
let count = 0;

let game_status = '';

// Start
btn_start.addEventListener('click', function(){
        if(game_status == ''){
            game_status = 'on';
            btn_start.classList.add('alt_btn_start');
            btn_start.textContent = 'GAME ON'; 
            count++;
            count_jogadas.textContent = 'Jogada ' + count;
        }
    });

// Jogo
function player(){
    let number = Math.floor(Math.random()*3);
    if(number === 1){
        img_p2.src = 'images/img-pedra.png';
        return 'pedra'; 
    } 
    else if(number === 2){
        img_p2.src = 'images/img-papel.png';
        return 'papel';
    } 
    else{
        img_p2.src = 'images/img-tesoura.png';
        return 'tesoura';  
    } 
}

function game(p1){
    setTimeout(() => {
        let p2 = player();
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

        // próxima jogada 
        setTimeout(() => {
            count++;
            count_jogadas.textContent = 'Jogada ' + count;
            img_p2.src = 'images/img-branca.png';
            document.querySelector("#pedra img").style.background = 'white';
            document.querySelector("#papel img").style.background = 'white';
            document.querySelector("#tesoura img").style.background = 'white';
            game_status = 'on';
        }, 2000);
    }, 1000); 
}

// clicar na pedra 
pedra.addEventListener('click', function(){
        if(game_status == 'on'){
            document.querySelector("#pedra img").style.background = '#a3e8fb';
            img_p2.src = 'images/img-carregando.png';
            game_status = '';
            game('pedra');
        }   
    });
// clicar no papel 
papel.addEventListener('click', function(){
        if(game_status == 'on'){
            document.querySelector("#papel img").style.background = '#a3e8fb';
            img_p2.src = 'images/img-carregando.png';
            game_status = '';
            game('papel');
        }
    });
// clicar na tesoura 
tesoura.addEventListener('click', function(){
        if(game_status == 'on'){
            document.querySelector("#tesoura img").style.background = '#a3e8fb';
            img_p2.src = 'images/img-carregando.png';
            game_status = '';
            game('tesoura');
        }   
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
        if(game_status == 'on'){
            game_status = 'over';
            btn_start.textContent = '';
            count_jogadas.textContent = 'Jogo Finalizado';
            result(); 
        }
    });

// Limpar
btn_clean.addEventListener('click', function(){
        game_status = '';
        vitorias = 0;
        derrotas = 0;
        empates = 0;
        count = 0;
        document.querySelector("#vitorias p").textContent = vitorias.toString(); 
        document.querySelector("#derrotas p").textContent = derrotas.toString(); 
        document.querySelector("#empates p").textContent = empates.toString(); 

        btn_start.classList.remove('alt_btn_start');
        btn_start.textContent = 'Iniciar';

        count_jogadas.textContent = '';
        final_result.textContent = '';
    });
