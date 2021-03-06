var playerName = window.prompt("What is you robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function(enemyName) {
  // repeat and execute as long as the enemy robot is alive 
  while(enemyHealth > 0) {
  // Ask to continue
  var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle?");

  // if player chooses to fight, then fight
  if (promptFight === "fight" || promptFight === "FIGHT") {
    // Subtract the value of 'playerAttack' from the value of 'enemyHealth' and use that result to update the value in the 'enemyHealth' variable
    enemyHealth = enemyHealth - playerAttack;
    // Log a resulting message to the console so we know that it worked.
    console.log(
      playerName + " attacted " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
    );
    // Check enemy's health
    if (enemyHealth <= 0) {
      window.alert(enemyName + " has died!");
    }
    else {
      window.alert(enemyName + " still has " + enemyHealth + " health left.");
    }

    // Subtract the value of 'enemyAttack' from the value of 'playerHealth' and use that result to update the value in the playerHealth' variable
    playerHealth = playerHealth - enemyAttack;
    // Log a resulting message to the console so we know that it worked.
    console.log(
      enemyName + " attacted " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
    )
    // Check player's health
    if (playerHealth <= 0) {
      window.alert(playerName + " has died!");
    }
    else {
      window.alert(playerName + " still has " + playerHealth + " health left.");
    }
  } else if (promptFight === "skip" || promptFight === "SKIP") {
    // confirm user wants to skip
    var confirmSkip = window.confirm("Are you sure you'd like to quit?");

    // if yes (true), leave fight
    if (confirmSkip) {
      window.alert(playerName + " has decided to skip this fight. Goodbye!");
      // subtract money from playerMoney for skipping
      playerMoney = playerMoney - 2; 
      console.log(playerMoney);
    }
    // if no (false), ask question again by running fight() again
    else {
      fight();
    }

  } else {
    window.alert("You need to pick a valid option.  Try again!");
    }
  }
}

for (var i = 0; i < enemyNames.length; i++) {
  var pickedEnemyName = enemyNames[i];
  enemyHealth = 50;
  fight(pickedEnemyName);
}