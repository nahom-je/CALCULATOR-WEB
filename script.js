const show = document.getElementById('show');
let input= "";

function justshow(input){
    show.value = show.value + input;
}

function clearScreen(){
    show.value= "";
}

function calculate(){
    try{
        show.value = eval(show.value);
    }
    catch(error){
        show.value="Error xxxxxxx";
    }
}