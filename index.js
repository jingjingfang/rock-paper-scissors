function rpsGame(yourChoice) {
    
    //create a variable to store "yourChoice" 
    let humanChoice = yourChoice.id;
 
    //create a variable to store the randomw number's return
    let botChoice = numberToChoice(randToRpsInt());
  
    //[0,1] [0,0] , [1,0] ,[1,1] [2,2], [2,1], [1,2], [0,2], or [2,0]
    result = decideWinner(humanChoice, botChoice);
    
   //create a message 
    message = finalMessage(result);  

   rpsFrontEnd(yourChoice.id,botChoice,message);

}

//create a random numbe from 0-2
function randToRpsInt() {
    return Math.floor(Math.random() * 3);
}

//puts the random number from above to this function and the number returns a string ('rock', 'paper', or 'scissors')
function numberToChoice(number) {
    return ['rock', 'paper', 'scissors'][number];
}

//humanChoice=yourChoice botChoice=computerChoice
function decideWinner(yourChoice, computerChoice) {

    let rpsDatabase = {
        'rock': {
            'scissors': 1,
            'rock': 0.5,
            'paper': 0
        },
        'paper': {
            'scissors': 0,
            'paper': 0.5,
            'rock': 1
        },
        'scissors': {
            'paper': 1,
            'scissors': 0.5,
            'rock': 0
        }

    };

    let yourScore = rpsDatabase[yourChoice][computerChoice];
    let computerScore = rpsDatabase[computerChoice][yourChoice];
    return [yourScore, computerScore];

}

function finalMessage([yourScore, computerScore]) {
    if (yourScore === 0) {
        return {
            'message': 'Your lost!',
            'color': 'red'
        };
    } else if (yourScore === 0.5) {
        return {
            'message': 'You tied!',
            'color': 'yellow'
        };
    } else {
        return {
            'message': 'You won!',
            'color': 'green'
        };

    }

}

function rpsFrontEnd(humanImageChoice, botImageChoice, finalMessage) {
   let imagesDatabase = {
       'rock':document.getElementById('rock').src,
       'paper':document.getElementById('paper').src,
       'scissors':document.getElementById('scissors').src
   }


    //remove all the images
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();
 

   let humanDiv = document.createElement('div');
   let botDiv = document.createElement('div');
   let messageDiv = document.createElement('div');

   humanDiv.innerHTML = "<img src='"+imagesDatabase[humanImageChoice] + "'height=150 width=150 style='box-shadow:0px 10px 50px rgba(37,50,233,1);>"
   messageDiv.innerHTML ="<h1 style ='color: " +finalMessage['color'] + "; font-size:60px; padding:20px; '>" + finalMessage ['message'] + "</h1>"
   botDiv.innerHTML = "<img src='"+imagesDatabase[botImageChoice] + "'height=150 width=150 style='box-shadow:0px 10px 50px rgba(243,38,24,1);>"
   
      
   document.getElementById ('flex-box-rps-div').appendChild(humanDiv);
   document.getElementById ('flex-box-rps-div').appendChild(messageDiv);
   document.getElementById ('flex-box-rps-div').appendChild(botDiv);

}