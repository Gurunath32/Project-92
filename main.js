function login() {
    player1_name = document.getElementById("player1login").value;
    player2_name = document.getElementById("player2login").value;

    localStorage.setItem("player1login", player1_name);
    localStorage.setItem("player2login", player2_name);

    window.location="game_page.html";
}