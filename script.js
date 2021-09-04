function loadBody()
{
    let select = document.getElementById("years");
    for (let i=1; i<=10; i++){
        let option = document.createElement("option");
        option.value = i.toString();
        option.text = i;
        select.add(option);
    }
}

function compute()
{
    //Get data from the site
    let principal = document.getElementById("principal").value;
    let rate = document.getElementById("rate").value;
    let years = document.getElementById("years").value;

    //Validations
    if (principal <= 0)
    {
        alert("Enter a positive number");
        document.getElementById("principal").focus();
        return;
    }

    //Compute the result
    let interest = (principal * years * rate)/100;
    let year = new Date().getFullYear()+parseInt(years);    

    //Show the result
    let result = document.getElementById("result");
    result.innerHTML = "If you deposit <mark>" + principal.toString() + "</mark>,\<br\>at an interest rate of <mark>"+ rate.toString() + "%</mark>.\<br\>You will receive an amount of <mark>"+ interest.toString() + "</mark>,\<br\>in the year <mark>"+ year.toString()+"\<b/\>\<br\>"
}

function updateRate() 
{
    let rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval.toString()+"%";
}
        