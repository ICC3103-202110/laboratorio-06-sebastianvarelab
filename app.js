  
const {inputForm} = require('./view');
const {printTable} = require('console-table-printer');
function app(state, update, view){
    const {model, currentView} = state;
    const {title, table} = currentView;
    console.clear();
    console.log(title);
    printTable(table);
    const input = await inputForm(model);
    const updateModel = update(input,model);
    state = {
        model: updateModel,
        currentView: view(updateModel)
    }

}