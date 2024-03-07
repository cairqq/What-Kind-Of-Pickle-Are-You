let counter = 0;
let rateButton = document.querySelector(".rate-button");
let sosButton = document.querySelector(".sos-button");
let messages = document.querySelector(".messages");
let segg = document.querySelector(".segg");
let chips = document.querySelector(".chips");
let sgarlic = document.querySelector(".sgarlic");
let dill = document.querySelector(".dill");
let jala = document.querySelector(".jala");
let olive = document.querySelector(".olive");
let chamoy = document.querySelector(".chamoy");
let disney = document.querySelector(".disney");
let hm = document.querySelector(".hm");
let hs = document.querySelector(".hs");
let pf = document.querySelector(".pf");
let countmsg = document.querySelector(".countmsg");
sosButton.onclick = (function() {
    counter = counter + 1;
    let sosInput = document.querySelector(".sos").value;
    let rateInput = document.querySelector(".rate").value;

    if (rateInput === "1" && sosInput === "Spicy") {

        segg.style.display = "block";
        messages.innerHTML = ("You rated " + rateInput + " and you like " + sosInput + " foods." + "So you are a pickled egg!!");

        console.log("comment");


    } else if (sosInput === "spicy") {
        messages.innerHTML = ("Capital S ");
    }
    if (rateInput === "1" && sosInput === "Sour") {

        chips.style.display = "block";
        messages.innerHTML = ("You rated " + rateInput + " and you like " + sosInput + " foods." + "So you are pickle chips!!");




    } else if (sosInput === "sour") {
        messages.innerHTML = ("Capital S ");
    }
    if (rateInput === "2" && sosInput === "Spicy") {

        sgarlic.style.display = "block";
        messages.innerHTML = ("You rated " + rateInput + " and you like " + sosInput + " foods." + "So you are spicy pickled garlic!!");




    } else if (sosInput === "spicy") {
        messages.innerHTML = ("Capital S ");
    }
    if (rateInput === "2" && sosInput === "Sour") {

        dill.style.display = "block";
        messages.innerHTML = ("You rated " + rateInput + " and you like " + sosInput + " foods." + "So you are a dill pickle");




    } else if (sosInput === "sour") {
        messages.innerHTML = ("Capital S ");
    }

    if (rateInput === "3" && sosInput === "Spicy") {

        jala.style.display = "block";
        messages.innerHTML = ("You rated " + rateInput + " and you like " + sosInput + " foods." + "So you are pickled jalapenos");




    } else if (sosInput === "spicy") {
        messages.innerHTML = ("Capital S ");
    }
    if (rateInput === "3" && sosInput === "Sour") {

        olive.style.display = "block";
        messages.innerHTML = ("You rated " + rateInput + " and you like " + sosInput + " foods." + "So you are pickled olives");




    } else if (sosInput === "sour") {
        messages.innerHTML = ("Capital S ");
    }
    if (rateInput === "4" && sosInput === "Spicy") {

        chamoy.style.display = "block";
        messages.innerHTML = ("You rated " + rateInput + " and you like " + sosInput + " foods." + "So you are a chamoy pickle");




    } else if (sosInput === "spicy") {
        messages.innerHTML = ("Capital S ");

    }
    if (rateInput === "4" && sosInput === "Sour") {

        disney.style.display = "block";
        messages.innerHTML = ("You rated " + rateInput + " and you like " + sosInput + " foods." + "So you are a disney pickle");




    } else if (sosInput === "sour") {
        messages.innerHTML = ("Capital S ");
    }
    if (rateInput === "5" && sosInput === "Spicy") {

        hm.style.display = "block";
        messages.innerHTML = ("You rated " + rateInput + " and you like " + sosInput + " foods." + "So you are a hot mama ");




    } else if (sosInput === "spicy") {
        messages.innerHTML = ("Capital S ");
    }

    if (rateInput === "5" && sosInput === "Sour") {

        hs.style.display = "block";
        messages.innerHTML = ("You rated " + rateInput + " and you like " + sosInput + " foods." + "So you are a half sour pickle from pickle guys ");

    } else if (sosInput === "sour") {
        messages.innerHTML = ("Capital S ");


    }

    countmsg.innerHTML = "you took this quiz " + counter + " time/s";

});