// 10. Write a function that takes a string as input and returns true if the string is balanced and false if it is not. A string is balanced if it consists of a pair of opening/closing brackets. A bracket is any of the following characters: (, ), {, }, [, or ].

function isBalanced(str) {
    const openBrackets = ['(', '{', '[']
    const closeBrackets = [')', '}', ']']
    const pairs = {
        ')': '(',
        '}': '{',
        ']': '['
    }
    const stack = []

    for (let i = 0; i < str.length; i++) {
        const char = str[i]

        if (openBrackets.includes(char)) {
            stack.push(char)
        } else if (closeBrackets.includes(char)) {
            const lastOpenBracket = stack.pop()

            if (lastOpenBracket !== pairs[char]) {
                return false
            }
        }
    }

    return stack.length == 0
}

console.log(isBalanced('()')); // true
console.log(isBalanced('( )(5)')); // true
console.log(isBalanced('((50)())')); // true
console.log(isBalanced('(( )')); // false
console.log(isBalanced('( [{ }20])')); // true
console.log(isBalanced('({()67} 5[({}4)])')); // true
console.log(isBalanced('( {(20)}[8 9({)7 })')); // false
