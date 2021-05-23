const figlet = require('figlet');
const chalk = require('chalk');
const inquirer = require('inquirer');
const { initModel } = require('./model');

function inputForm(model){
    const { leftValue } =model
    const { leftUnit } =model
    const { rightUnit } =model
    const { rightValue} =model
    return inquirer.prompt([
        {
            name: 'left_temperature',
            type: 'input',
            message: 'Left temperature is a source? ',
            default: 'Y/n',
            validate: function(value){
                if(value == 'y' || value == 'n'){
                    return true
                } else {
                    return 'invalid syntax, please enter "y" or "n"'
                }
            },
        },
        {
            name: 'temperature_value_convert',
            type: 'input',
            message: 'Temperature value to convert? ',
            default: function({left_temperature} = model){
                if(left_temperature == 'n'){
                    return rightValue
                } else {
                    return leftValue
                }
            },
            validate: function(value){
                if(value >= 0 || value <= 0){
                    return true
                } else {
                    return 'Please enter a number (int), not a string'
                }
            }
        },
        {
            name: 'from',
            type: 'list',
            message: 'From? ',
            default: model.from,
            choices: ['Celsius', 'Fahrenheit','Kelvin']
        },
        {
            name: 'to',
            type: 'list',
            message: 'To? ',
            default: model.to,
            choices: ['Celsius', 'Fahrenheit','Kelvin']
        },
    ])
}
module.exports = {
    view, 
    inputForm
}
function getTitle(){
    return chalk.red(
        figlet.textSync(
            'Unit Converter App',
            {
                horizontalLayout: 'full',
                font: 'doom'
            }
        )
    )
}
function getTable(model){
    return [
        {"leftValue": model.leftValue,
        "leftUnit":model.leftUnit,
        "rightValue": model.rightValue,
        "rightUnit": model.rightUnit}
    ]
}
function view(model){
    return {
        title: getTitle(),
        table: getTable(model)
    }
}