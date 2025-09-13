function getInnerTextById(id) {
    const value = document.getElementById(id).innerText;
    const convertedValue = parseInt(value);
    return convertedValue;
}

function setInnerTextByIdandValue(id, value){
    document.getElementById(id).innerText = value;
}