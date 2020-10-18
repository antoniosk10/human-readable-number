module.exports = function toReadable(number) {
    const LIST_NUMBERS = [{
            "0": "zero",
            "1": "one",
            "2": "two",
            "3": "three",
            "4": "four",
            "5": "five",
            "6": "six",
            "7": "seven",
            "8": "eight",
            "9": "nine"
        },
        {
            "10": "ten",
            "11": "eleven",
            "12": "twelve",
            "13": "thirteen",
            "14": "fourteen",
            "15": "fifteen",
            "16": "sixteen",
            "17": "seventeen",
            "18": "eighteen",
            "19": "nineteen"
        },
        {
            "10": "ten",
            "20": "twenty",
            "30": "thirty",
            "40": "forty",
            "50": "fifty",
            "60": "sixty",
            "70": "seventy",
            "80": "eighty",
            "90": "ninety"
        },
    ];

    const strNum = number.toString();
    switch (strNum.length) {
        case 1:
            {
                return LIST_NUMBERS[0][number];
            }
        case 2:
            {
                if (strNum[1] === "0") {
                    return LIST_NUMBERS[2][number];
                } else if (strNum[0] === "1") {
                    return LIST_NUMBERS[1]["1" + strNum[1]];
                } else {
                    return `${LIST_NUMBERS[2][strNum[0] + "0"]} ${LIST_NUMBERS[0][strNum[1]]}`
                }
            }
        case 3:
            {
                if (strNum[1] === "0") {
                    if (strNum[2] === "0") {
                        return `${LIST_NUMBERS[0][strNum[0]]} hundred`;
                    } else {
                        return `${LIST_NUMBERS[0][strNum[0]]} hundred ${LIST_NUMBERS[0][strNum[2]]}`;
                    }
                } else if (strNum[1] === "1") {
                    return `${LIST_NUMBERS[0][strNum[0]]} hundred ${LIST_NUMBERS[1][strNum[1] + strNum[2]]}`;
                } else if (strNum[2] === "0") {
                    return `${LIST_NUMBERS[0][strNum[0]]} hundred ${LIST_NUMBERS[2][strNum[1] + strNum[2]]}`;
                } else {
                    return `${LIST_NUMBERS[0][strNum[0]]} hundred ${LIST_NUMBERS[2][strNum[1] + "0"]} ${LIST_NUMBERS[0][strNum[2]]}`;
                }
            }
    }
}