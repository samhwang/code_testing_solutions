function get24hour(hour12, ampm) {
    const isAM = ampm === 'AM' || ampm === 'am';
    const isPM = ampm === 'PM' || ampm === 'pm';

    if (isAM && hour12 === '12') {
        return '00';
    }

    if (isPM && hour12 === '12') {
        return '12';
    }

    let hour24 = parseInt(hour12);
    hour24 = isPM ? hour24 + 12 : hour24;
    hour24 = hour24 >= 24 ? hour24 - 24 : hour24;
    hour24 = hour24 < 10 ? `0${hour24}` : `${hour24}`;
    return hour24;
}

function timeConversion(s) {
    const ampmSection = s.slice(-2);
    const [hour12, minute, second] = s.slice(0, s.length - 2).split(':');

    const hour24 = get24hour(hour12, ampmSection);
    return `${hour24}:${minute}:${second}`;
}
