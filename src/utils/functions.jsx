export function customRound(num) {
    const decimalDigit = Math.floor((num % 1) * 10);
    return decimalDigit >= 5 ? Math.ceil(num) : Math.floor(num);
}
export function safeNumber(value) {
    return isNaN(value) || !isFinite(value) ? 0 : value;
}
