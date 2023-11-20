function calBmi(){
    var height = document.getElementById("ht").value 
    var weight = document.getElementById("wt").value 
    
    if(ht.value=="" || wt.value=="" || age.value=="" ){
        alert("Please enter fields")

    }
    else{
        var bmi = (weight/((height/100)*(height/100))).toFixed(2);
        document.getElementById('result').innerHTML = `YOUR BMI IS :`+bmi;
    
    

    var status;

    if(bmi<18.5){
        status = "Under Weight";
    }else if( (bmi>=18.5) && (bmi<24.9) ){
        status = "Normal Weight";
    }else{
        status = "Over Weight";
    }
    document.getElementById("statusresult").textContent = `You are `+ status
    
}


}