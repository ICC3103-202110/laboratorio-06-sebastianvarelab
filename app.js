  
const {inputForm} = require('./view');
const {printTable} = require('console-table-printer');
async function app(state, update, view){
    while (true){
        const {model, currentView} = state;
        const {title, table} = currentView;
        console.clear();
        console.log(title);
        printTable(table);
        const {left_temperature,temperature_value_convert,from,to} = await inputForm(model);
        const updateModel = update(left_temperature,temperature_value_convert,from,to,model);
        state = {
            model: updateModel,
            currentView: view(updateModel)
        }
    }

}
module.exports={
    app
}