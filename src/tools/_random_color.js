const randomColor = (logo) => {
    if(logo) return;
    return '#' + to16(parseInt(Math.random() * 16)) + to16(parseInt(Math.random() * 16)) + to16(parseInt(Math.random() * 16)) + to16(parseInt(Math.random() * 16)) + to16(parseInt(Math.random() * 16)) + to16(parseInt(Math.random() * 16));
}

function to16(num) {
    switch(num) {
        case 10:
            return num = "A";
        case 11:
            return num = "B";
        case 12:
            return num = "C";
        case 13:
            return num = "D";
        case 14:
            return num = "E";
        case 15:
            return num = "F";
        default:
            return num;
    }
}

export default randomColor;