document.addEventListener('DOMContentLoaded', function() { 

    let arr = [];

    // New Dice Button Creation
    let button = document.createElement('button');
    let btnText = document.createTextNode('New Dice');
    button.className = 'main-button';
    button.appendChild(btnText);
    document.body.appendChild(button);

    // New Dice Button Styling
    button.style.display = 'inline-block';
    button.style.backgroundColor = 'white';
    button.style.justifyContent = 'center';
    button.style.fontSize = '20px';
    button.style.height = '40px';
    button.style.color = 'black';
    button.style.fontFamily = 'impact';
    button.style.fontSize = '20px';
    button.style.height = '40px';
    button.style.width = '100px';
    button.style.borderRadius = '3px';
    button.style.border = "solid black";;
    button.style.borderColor = 'black';
    button.style.marginRight = '10px';

    // reRoll Dice Button Creation
    let reRollButton = document.createElement('button');
    let reRollBtnText = document.createTextNode('Roll Dice');
    reRollButton.className = 'reRoll-button';
    reRollButton.appendChild(reRollBtnText);
    document.body.appendChild(reRollButton);

     // reRoll Dice Button Styling
    reRollButton.style.display = 'inline-block';
    reRollButton.style.backgroundColor = 'gold';
    reRollButton.style.color = 'black';
    reRollButton.style.fontFamily = 'impact';
    reRollButton.style.fontSize = '20px';
    reRollButton.style.height = '40px';
    reRollButton.style.width = '110px';
    reRollButton.style.marginRight = '10px'
    reRollButton.style.borderRadius = '3px';
    reRollButton.style.border = "solid black";;
    reRollButton.style.borderColor = 'black';

    // Sum Dice Button Creation
    let sumButton = document.createElement('button');
    let sumBtnText = document.createTextNode('Calculate Sum');
    sumButton.className = 'sum-button';
    sumButton.appendChild(sumBtnText);
    document.body.appendChild(sumButton);

    // Calculate Sum Button Styling
    sumButton.style.display = 'inline-block';
    sumButton.style.backgroundColor = 'black';
    sumButton.style.color = 'gold';
    sumButton.style.fontFamily = 'impact';
    sumButton.style.fontSize = '20px';
    sumButton.style.height = '40px';
    sumButton.style.width = '150px';
    sumButton.style.borderRadius = '3px';
    sumButton.style.border = "solid gold";;
    sumButton.style.borderColor = 'black';

    const container = document.createElement('main');
    container.className = 'container';
    document.body.appendChild(container);
    
    let counter = 1;
    
    class Die {
        constructor(value) {
            this.value = value;
            
            // Creating the div elements
            this.div = document.createElement('div');
            this.value = (Math.floor((Math.random() * 6) + 1 ));
            this.div.className = 'newDice';
            this.div.id = counter;
            this.div.textContent = this.value;

            // Div styling
            this.div.style.backgroundColor = 'white';
            this.div.style.display = 'flex';
            this.div.style.marginRight = '10px';
            this.div.style.borderRadius = '8px';
            this.div.style.border = "thick solid black";;
            this.div.style.borderColor = 'black';
            this.div.style.textAlign = 'center';
            this.div.style.alignContent = 'center';
            this.div.style.justifyContent = 'center';
            this.div.style.fontSize = '3em';
            this.div.style.fontFamily = 'impact';
            this.div.style.marginTop = '40px';
            this.div.style.height = '100px';
            this.div.style.width = '100px';
            arr.push(this);

            // Getting it on the screen
            container.appendChild(this.div);

            // Single click to roll individual dice
            this.div.addEventListener("click", () => {
            let randomNum = Math.floor((Math.random() * 6) + 1 );
            this.value = randomNum;
            this.div.textContent = this.value;
            })
            

            // Double click to remove a dice from screen
            this.div.addEventListener("dblclick", () => {
                container.removeChild(this.div);
            })

        }

        roll() {
            let randomNum = Math.floor((Math.random() * 6) + 1 );
            this.value = randomNum;
            this.div.textContent = this.value;
        }
    }

    button.addEventListener("click", function() {
        new Die();
        counter++;
    })

    
    reRollButton.addEventListener("click", function() {
        arr.forEach((die) => {
            die.roll();
        })
    })

    sumButton.addEventListener("click", function() {
        // Using .reduce function
        
        let sum = arr.reduce((acc, val) => ({ value: acc.value + val.value}));
        alert(sum.value);
       
        // This is another way to calculate the sum with a for loop
        // let counter = 0;
        // for (i = 0; i < arr.length; i++) {
        // counter = counter + arr[i].value
        // }
        // console.log(counter);
    })
})
