function rollDie() {
    return Math.floor(Math.random() * 6) + 1;
  }
  
  function rollDice() {
    const dice = [];
    let score = 0;
  
    for (let i = 0; i < 6; i++) {
      const dieResult = rollDie();
      dice.push(dieResult);
  
      if (dieResult === 1) {
        score += 100;
      } else if (dieResult === 5) {
        score += 50;
      }
    }
  
    document.getElementById("rolled-dice").textContent = dice.join(', ');
    document.getElementById("roll-score").textContent = score;
  
    return score;
  }
  
  function updateTotalScore(totalScore) {
    document.getElementById("total-score").textContent = totalScore;
  }
  
  function displayWinMessage(rolls) {
    document.getElementById("game-message").textContent = `Congratulations! You won in ${rolls} rolls!`;
  }
  
  
  function playGame() {
    let totalScore = 0;
    let rolls = 0;
    let gameEnded = false;
  
    const rollButton = document.getElementById("roll-button");
  
    rollButton.addEventListener("click", function() {
      if (gameEnded) {
        return; 
      }
  
      const scoreThisRoll = rollDice();
      totalScore += scoreThisRoll;
      rolls++;
  
      updateTotalScore(totalScore);
  
      if (totalScore >= 10000) {
        displayWinMessage(rolls);
        gameEnded = true;
        rollButton.disabled = true;
        document.getElementById("game-message").textContent = "";
        document.getElementById("rolled-dice").textContent = "";
        document.getElementById("roll-score").textContent = "0";
      }
      
    });
  }
  
  window.onload = playGame;
  