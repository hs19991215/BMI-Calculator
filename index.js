function calculatebmi(h, w, bmi, t) {
    h = document.getElementById("height").value;
    w = document.getElementById("weight").value;
    bmi = w / h / h ;
    t = Math.round(bmi);


    document.getElementById("bmi").innerHTML = "<br> BMI is: " + t;
    if (t <= 18) {
      document.getElementById("result").innerHTML = "<p> You are underweight </p>";
    } else if (t > 18 && t < 25) {
      document.getElementById("result").innerHTML =
        "<p> You are healthy </p>";
    } else if (t > 25 && t < 30) {
      document.getElementById("result").innerHTML =
        "<p> You are overweight </p>";
    } else if (t > 30) {
      document.getElementById("result").innerHTML =
        "<p> You are obese </p>";
    };
  };
  
  function clearBox(bmi, result) {
    document.getElementById("bmi").innerHTML = "<br> BMI is:";
    document.getElementById("result").innerHTML = "";
  };