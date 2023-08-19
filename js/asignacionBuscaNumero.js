const guessForm = document.getElementById("guessForm");
    const guessSpan = document.getElementById("guess");
    const btnLower = document.getElementById("btnLower");
    const btnEqual = document.getElementById("btnEqual");
    const btnHigher = document.getElementById("btnHigher");
    const result = document.getElementById("result");
    
    let low = 0;
    let high = 100;

    function makeGuess() {
      const mid = Math.floor((low + high) / 2);
      guessSpan.textContent = mid;
    }

    btnLower.addEventListener("click", function() {
      high = parseInt(guessSpan.textContent) - 1;
      makeGuess();
    });

    btnEqual.addEventListener("click", function() {
      result.textContent = `¡Genial, adivine tu número!`;
    });

    btnHigher.addEventListener("click", function() {
      low = parseInt(guessSpan.textContent) + 1;
      makeGuess();
    });

    const btnReset = document.getElementById("btnReset");
    btnReset.addEventListener("click", resetGame);
    function resetGame() {
    // Restablecer las variables o realizar otras acciones de reinicio
    // Por ejemplo, podrías reiniciar el juego recargando la página
    location.reload();
    }

    makeGuess();