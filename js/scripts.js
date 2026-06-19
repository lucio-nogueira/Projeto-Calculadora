//Funções - Inserir elementos
    function inserToDisplay(data){
        document.querySelector('#display').value += data;
    }
    

//Função - Limpar tudo
    function clean(){
        document.querySelector('#display').value = '';
}
//Função - Remover
    function back(){
        const display = document.querySelector('#display');
        display.value = display.value.slice(0, -1);
}
//Função - Calcular valores
    function result(){
    try{
        display.value = eval(display.value);

    } catch{

    }
}