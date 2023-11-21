import {createInterface} from 'readline';
import chalk from 'chalk';


const tasks = [];

/*Parámetros para poder interactuar con la interfaz */
const rl = createInterface({
    input: process.stdin,
    output: process.stdout,
});

function displayMenu(){
    console.log(chalk.yellow.bold('TO DO APP'));
    console.log("1. Add task");
    console.log("2. List Tasks");
    console.log("3. Change status task");
    console.log("4. Exit");
}

function selectAnOption (){
    rl.question("Select an option: ", (option)=>{
        switch(option){
            case "1" : 
                console.log("Task created");
                break;
            case "2" :
                console.log("List tasks");
                break;
            case "3" :
                console.log("Task completed");
                break;
            case "4" :
                console.log(chalk.red.bold("Exit app"));
                rl.close();
                break;
            default: 
                console.log(chalk.red.bold("Invalid option!!"));
                displayMenu();
                selectAnOption();
                break;
        }
    })
}

displayMenu();

selectAnOption();


