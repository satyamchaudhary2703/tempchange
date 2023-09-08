const calculateTemp = () => {
    const numberTemp = document.getElementById('temp').value;
    // console.log(numberTemp);

    const tempSelect = document.getElementById('temp_deff');
    const valTemp =  temp_deff.options[tempSelect.selectedIndex].value;
    // console.log(valTemp);

    const celToFah = (cel) => {
        let Fahrenheit = Math.round((cel * 9/5) + 32);
        return Fahrenheit;
    }

    const fahToCel = (fehr) => {
        let Celsius = Math.round((fehr -32) * 5/9);
        return Celsius;
    }


    let  result;

    if (valTemp == 'cel') {
        result = celToFah(numberTemp);
        document.getElementById('resultContainer').innerHTML= `= ${result} ° Fahrenheit`;
    } else {
        result = fahToCel(numberTemp);
        document.getElementById('resultContainer').innerHTML= `= ${result} ° Celsius.`;
    }
}