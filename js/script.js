//function
//bmi=berat badan / (tinggi badan)2 persegi


function calculate() {
    try{
let weightInput = document.getElementById('weight-input').value
let heightInput = document.getElementById('height-input').value
let ageInput = document.getElementById('age-input').value
let bmi = (weightInput/((heightInput/100)*(heightInput/100)))
console.log(weightInput);
console.log(heightInput);
console.log(ageInput);
console.log(bmi);

if (parseInt(weightInput) > 0 && parseInt(weightInput)<10){
    alert('Harap isi berat badan anda');
}else{
    document.getElementById('result-bmi').innerHTML = bmi.toFixed(1);
    console.log(bmi);
    }

if (bmi <=18.5){
    document.getElementById('status-bmi').innerHTML = 'Anda Kekurangan Berat Badan'
}else if (bmi > 18.5 && bmi <= 24.9){
    document.getElementById('status-bmi').innerHTML = 'Anda Normal (ideal)'

}else if (bmi >24.9 && bmi <=29.9){
    document.getElementById('status-bmi').innerHTML = 'Anda Kelebihan Berat Badan'
}else{
    document.getElementById('status-bmi').innerHTML = 'Anda Kegemukan (Obesitas)'
}

    }catch(error){
        console.log(error);
    }
}

function reload(){
    window.location.reload()
}