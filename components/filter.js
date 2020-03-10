

function makeFilter(objectArray){

    let returnFilter = {};

    for(let index in objectArray){
        for(var property in objectArray[index]){
            if(returnFilter[property] == undefined){
                returnFilter[property] = new Object();
            }
            returnFilter[property][objectArray[index][property]] = 0;
        }
    }

    return returnFilter;




}

export default { 
    makeFilter

}