function cel_fa (temperature_value_convert){
    return (temperature_value_convert*9/5)+32 
}
function cel_ke (temperature_value_convert){
    return temperature_value_convert+273.15
}
function fa_cel(temperature_value_convert){
    return (temperature_value_convert-32) *5/9 
}
function fa_ke (temperature_value_convert){
    return ((temperature_value_convert-32)*5/9) + 273.15
}
function ke_cel (temperature_value_convert){
    return temperature_value_convert-273.15
}
function ke_fa(temperature_value_convert){
    return ((temperature_value_convert/273.15)*9/5) +32
}
function leftValue(left_temperature,temperature_value_convert,from,to){
    if (left_temperature == 'y' || left_temperature=="yes"){
        return temperature_value_convert
    }
    else{
        if (from != to) {
            if (from == 'Celsius'){
                if (to == 'Fahrenheit'){
                    return cel_fa(temperature_value_convert)  
                } 
                else{
                    return cel_ke(temperature_value_convert)
                }
            } 
            else{
                if (from == 'Fahrenheit'){
                    if (to == 'Celsius'){
                        return fa_cel(temperature_value_convert) 
                    } 
                    else{ 
                        return fa_ke(temperature_value_convert)
                    }
                } 
                else {
                    if (to == 'Celsius'){
                        return ke_cel(temperature_value_convert) 
                    } 
                    else{ 
                        return ke_fa(temperature_value_convert)
                    }
                }
            }
        }
        else{
            return temperature_value_convert
        }
    }
}
function rightValue(left_temperature,temperature_value_convert,from,to){
    if (left_temperature == 'y'){
        if (from == to){
            return temperature_value_convert
        }
        else{
            if (from == 'Celsius'){
                if (to == 'Kelvin'){
                    return cel_ke(temperature_value_convert)
                } 
                else{
                    return cel_fa(temperature_value_convert)
                }
            } 
            else{
                if (from == 'Kelvin'){
                    if (to == 'Celsius'){
                        return ke_cel(temperature_value_convert)
                    } 
                    else{ 
                        return ke_fa(temperature_value_convert)
                    }
                } 
                else { 
                    if (to == 'Celsius'){
                        return fa_cel(temperature_value_convert)
                    } 
                    else{ 
                        return fa_ke(temperature_value_convert)
                    }
                }
            }
        }
    }
    else{
        return temperature_value_convert
    }
}
function leftUnit(left_temperature,from,to){
    if (left_temperature == 'y' || left_temperature== "yes"){
        return from
    }
    else{
        return to
    }
}
function rightUnit(left_temperature,from,to){
    if (left_temperature == 'y' || left_temperature== "yes"){
        return to
    }
    else{
        return from
    }
}
function update(left_temperature,temperature_value_convert,from,to,model){
    return {
        ...model,
        left_temperature: left_temperature,
        temperature_value_convert: temperature_value_convert,
        from: from,
        to: to,
        leftValue: leftValue(left_temperature,temperature_value_convert,from,to),
        leftUnit: leftUnit(left_temperature,from,to),
        rightValue: rightValue(left_temperature,temperature_value_convert,from,to),
        rightUnit: rightUnit(left_temperature,from,to),
    }
}
module.exports = {
    update
}