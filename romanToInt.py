def romanToInt(s):
    convert = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
    }

    numbers = []

    for letter in s:
        numbers.append(convert[letter])
    print(numbers)
    print(len(numbers))
    
    for i in range(1, len(numbers)):
        if numbers[i] > numbers[i-1]:
            numbers[i] = numbers[i]-numbers[i-1]
            numbers[i-1] = 0
    
    return sum(numbers)
        
print(romanToInt("MCMXCVIII"))