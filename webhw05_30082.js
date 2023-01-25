const radius = document.getElementById('radius');
const area = document.getElementById('area');
const circum = document.getElementById('circum');

const isStringNumber = (str) => {
    if (typeof(str) != 'string') {
        return false;
    } 
    return !isNaN(str) && !isNaN(parseFloat(str));
};

const calculateCircle = () => {
    const radius_val = radius.value;

    if (!isStringNumber(radius_val) || radius_val === '') {
        window.alert('Please enter a number.');
        radius.value = '';
        return;
    } 

    const area_calc = Math.PI * Math.pow(Number(radius_val), 2);
    const circum_calc = 2 * Math.PI * Number(radius_val);
    
    area.innerText = area_calc.toFixed(2);
    circum.innerText = circum_calc.toFixed(2);
    
    radius.value = ''; // Clear value in input
};