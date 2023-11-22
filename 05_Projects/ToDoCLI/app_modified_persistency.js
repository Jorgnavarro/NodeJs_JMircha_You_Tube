import { readFileSync, writeFileSync } from "node:fs";
import {createInterface} from 'readline';
import chalk from 'chalk';


const tasks = [];
const DbFile = "tasks.txt";
/*Parámetros para poder interactuar con la interfaz */
const rl = createInterface({
    input: process.stdin,
    output: process.stdout,
});

function displayMenu(){
    console.log(chalk.yellow.bold('TO DO APP'));
    console.log(chalk.blueBright("Options Menu"));
    console.log("1. Add task");
    console.log("2. List Tasks");
    console.log("3. Change status task");
    console.log("4. Exit");
}

function loadTasks(){
    //lectura y carga de tareas, lectura de archivo
    try {
        const data = readFileSync(DbFile, "utf-8");
        const lines = data.split("\n");
        tasks.length = 0;

        lines.forEach(line => {
            if(line.trim()!== ""){
                const [task, completed] = line.split("|");
                tasks.push({task, completed: completed === true || false});
            }
        });
        console.log(chalk.grey.bgGreenBright.bold("The database tasks have been loaded"));
    } catch (err) {
        console.log(chalk.red.bold("You don't have any task.\n\n"));
    }
}

function saveTask(){
    const data = tasks.map(task => `${task.task}|${task.completed}`).join("\n");
    writeFileSync(DbFile, data, "utf-8");
    console.log(chalk.green.bold("\ntask saved in the database successfully!!\n\n"));
}

function addTask(){
    rl.question(chalk.cyanBright.bold("Write your new task: "), (task) =>{
        tasks.push({
            task, completed : false
        })
        console.log(chalk.green.bold("\ntask saved successfully!!\n\n"));
        saveTask();
        displayMenu();
        selectAnOption();
    })
}

function listTasks(){
    console.log(chalk.yellow.bold("\nList of tasks\n"));
    if(tasks.length===0){
        console.log(chalk.bgGrey.white.bold("There is no added task😭," + chalk.bgGreen("\nPress option 1 to add a new one\n\n")));
    }else{
        tasks.forEach((task, index)=>{
            let status = task.completed ? "✅" : "🚨";
            if(task.completed){
                console.log(chalk.greenBright(`${index + 1}.${task.task} - status:${status}\n`));   
            }else{
                console.log(chalk.redBright(`${index + 1}.${task.task} - status:${status}\n`));
            }
        })
    }
    displayMenu();
    selectAnOption();
}   

function modifiedStatusTask (){
    rl.question(chalk.cyanBright.bold("Introduce the number of task to change to complete or to pending: "), (taskNumber)=>{
        const index = parseInt(taskNumber) - 1;
        if(index>=0 && index < tasks.length){
            if(tasks[index].completed === false){
                tasks[index].completed = true;
                saveTask();
                console.log(chalk.bgGreen.bold("\nTask change to complete successfully!\n"));
            }else{
                tasks[index].completed = false;
                saveTask();
                console.log(chalk.bgRedBright.bold("\nTask change to pending successfully!\n"));
            }
        }else{
            console.log(chalk.bgRed.bold("\nNumber task invalid!\n"));
        }
        displayMenu();
        selectAnOption();
    })
}

function selectAnOption (){
    rl.question("Select an option: ", (option)=>{
        switch(option){
            case "1" : 
                addTask()
                break;
            case "2" :
                listTasks();
                break;
            case "3" :
                modifiedStatusTask();
                break;
            case "4" :
                console.log(chalk.bgGreenBright.bold("\nExit app!"));
                rl.close();
                break;
            default: 
                console.log(chalk.red.bold("\nInvalid option, try again!!\n"));
                displayMenu();
                selectAnOption();
                break;
        }
    })
}

loadTasks();

displayMenu();

selectAnOption();


