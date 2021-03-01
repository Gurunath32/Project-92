player1_name=localStorage.getItem("player1login");
player2_name=localStorage.getItem("player2login");

player1_score=0;
player2_score=0;

document.getElementById("player1_name").innerHTML=player1_name + ": ";
document.getElementById("player2_name").innerHTML=player2_name + ": ";

document.getElementById("player1_score").innerHTML=player1_score;
document.getElementById("player2_score").innerHTML=player2_score;

document.getElementById("question_turn").innerHTML="Question Turn - " + player1_name;
document.getElementById("answer_turn").innerHTML="Answer Turn - " + player2_name;

function submit() {
    number1=document.getElementById("number1").value;
    number2=document.getElementById("number2").value;
    actual_answer=parseInt(number1) * parseInt(number2);

    question="<h4>"+number1+"X"+number2+"</h4>";
    input="<input style='width:150px;' id='answer' class='form-control' placeholder='Enter The Answer'>";
    button="<button class='btn btn-success' id='check_button' onclick='check()'>Check</buton>";
    row=question + input + button;
    document.getElementById("output").innerHTML=row;

    document.getElementById("number1").value="";
    document.getElementById("number2").value="";
}

question_turn="player1";
answer_turn="player2";

function check() {
    get_answer=document.getElementById("answer").value;
    if (get_answer==actual_answer) {
        if (answer_turn=="player1") {
        updated_score_player1=player1_score + 1;
        document.getElementById("player1_score").innerHTML=updated_score_player1;
        }
        else {
            updated_score_player2=player2_score + 1;
        document.getElementById("player2_score").innerHTML=updated_score_player2;
        }

        if(question_turn=="player1") {
            document.getElementById("question_turn").innerHTML="Question Turn: " + player2_name;
            question_turn="player2";
        }
        else {
            document.getElementById("question_turn").innerHTML="Question Turn: " + player1_name;
            question_turn="player1";
        }
    
        if(answer_turn=="player1") {
            document.getElementById("answer_turn").innerHTML="Answer Turn: " + player2_name;
            answer_turn="player2";
        }
        else {
            document.getElementById("answer_turn").innerHTML="Answer Turn: " + player1_name;
            answer_turn="player1";
        }
        document.getElementById("output").innerHTML="";
    }
}