console.log("script.js loaded");

const onesText = ["un", "deux", "trois", "quatre", "cinq", "six", "sept", "huit", "neuf", "dix"];
const teensText = ["onze", "douze", "treize", "quatorze", "quinze", "seize", "dix-sept", "dix-huit", "dix-neuf"];
const tensText = ["vingt", "trente", "quarante", "cinquante", "soixante", "quatre-vingts"];

function getThreeDegits(number = 0)
{
    let numStr = number.toString();

    if (numStr.length > 3)
    {
        return;
    }

    const charactersToAdd = 3-numStr.length;
    for (let i = 0; i < charactersToAdd; i++)
    {
        numStr = '0' + numStr;
    }

    let ones = parseInt(numStr[numStr.length - 1]);  
    let tens = parseInt(numStr[numStr.length - 2]); 
    let hundreds = parseInt(numStr[numStr.length - 3]);

    let result = "";

    if (tens == 0 && ones != 0)
    {
        result = onesText[ones-1];
    }
    else if (tens == 1)
    {
        result = teensText[ones-1];
    }
    if (tens == 1 && ones == 0)
    {
        result = "dix";
    }

    if (tens > 1 && tens < 7)
    {
        if (ones == 1)
        {
            result = tensText[tens-2] + " et " + onesText[ones-1];
        }
        else result = tensText[tens-2] + "-" + onesText[ones-1];
    }
    switch(tens)
    {
        case 7:
            if (ones == 1)
            {
                result = tensText[4] + " et " + teensText[ones-1];
            }
            else result = tensText[4] + "-" + teensText[ones-1];
            break;
        case 8:
            if (ones == 1)
            {
                result = tensText[5] + " et " + onesText[ones-1];
            }
            else result = tensText[5] + "-" + onesText[ones-1];
            break;
        case 9:
            if (ones == 1)
            {
                result = tensText[5] + " et " + teensText[ones-1];
            }
            else result = tensText[5] + "-" + teensText[ones-1];
            break;
    }
    if (tens > 1 && ones == 0)
    {
        result = tensText[tens-2];
        switch(tens)
        {
            case 7:
                result = tensText[4] + "-dix";
                break;
            case 8:
                result = tensText[5];
                break;
            case 9:
                result = tensText[5] + "-dix";
                break;
        }
    }

    if (hundreds == 0)
    {
        return result;
    }
    if (hundreds != 1)
    {
        result = onesText[hundreds-1] + " cent " + result;
    }
    else result = "cent " + result;
    
    return result;
}

function convertNum() {
    let numInWords = "";
    let numInInt = parseInt(document.getElementById("NumberBox").value);
    const resultId = "Result";

    if (isNaN(numInInt))
    {
        document.getElementById(resultId).innerHTML = "Not a Proper Number";
        return;
    }

    let numStr = numInInt.toString();

    if (numStr.length > 15)
    {
        document.getElementById(resultId).innerHTML = "Not a Proper Number";
        return;
    }

    const charactersToAdd = 15-numStr.length;
    for (let i = 0; i < charactersToAdd; i++)
    {
        numStr = '0' + numStr;
    }

    let ones = parseInt(numStr[numStr.length - 1]) + parseInt(numStr[numStr.length - 2]) * 10 + parseInt(numStr[numStr.length - 3]) * 100;  
    let thousands = parseInt(numStr[numStr.length - 4])+ parseInt(numStr[numStr.length - 5]) * 10+ parseInt(numStr[numStr.length - 6]) * 100;
    let milions = parseInt(numStr[numStr.length - 7]) + parseInt(numStr[numStr.length - 8]) * 10 +parseInt(numStr[numStr.length - 9]) * 100;
    let billions = parseInt(numStr[numStr.length - 10]) + parseInt(numStr[numStr.length - 11]) * 10 +parseInt(numStr[numStr.length - 12]) * 100;
    let trilions = parseInt(numStr[numStr.length - 13]) + parseInt(numStr[numStr.length - 14]) * 10 +parseInt(numStr[numStr.length - 15]) * 100;


    if (ones != 0)
    {
        numInWords = getThreeDegits(ones);
    }
    if (thousands != 0)
    {
        if (thousands == 1)
        {
            numInWords = "mille " + numInWords;
        }
        else numInWords = getThreeDegits(thousands) + " mille " + numInWords;
    }
    if (milions != 0)
    {
        if (milions == 1)
        {
            numInWords = "Un million " + numInWords;
        }
        else numInWords = getThreeDegits(milions) + " millions " + numInWords;
    }
    if (billions != 0)
    {
        if (billions == 1)
        {
            numInWords = "Un milliard " + numInWords;
        }
        else numInWords = getThreeDegits(billions) + " milliards " + numInWords;
    }
    if (trilions != 0)
    {
        if (trilions == 1)
        {
            numInWords = "Un billion " + numInWords;
        }
        else numInWords = getThreeDegits(trilions) + " billions " + numInWords;
    }
    
    if (numInWords == "")
    {
        numInWords = "zéro";
    }
    
    document.getElementById(resultId).innerHTML = numInWords.charAt(0).toUpperCase() + numInWords.slice(1);
}
