function myAtoi(s: string): number {
    if (s === '') return 0;

    let str = s.trimStart()
    let negative = false;
    let result = '';
    let i = 0;
    if (str[0] === '-' || str[0] === '+') {
        i = 1;
        negative = str[0] === '-' ? true : false;
    }

    for (i; i < str.length; i++) {
        if (str.charCodeAt(i) >= 48 && str.charCodeAt(i) <= 57) {
            result += str[i];
        }
        else break;
    }
    if (Number(result) >= 2 ** 31) {
        return negative ? (2 ** 31) * (-1) : 2 ** 31 - 1
    }

    return negative ? (-1) * Number(result) : Number(result)
}