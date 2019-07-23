const compare = (actual, stackElement) => {
    switch (actual) {
        case ']':
            if (stackElement !== '[')
                return false;
            break;
        case '}':
            if (stackElement !== '{')
                return false;
            break;
        case ')':
            if (stackElement !== '(')
                return false;
            break;
        default: break;
    }
};
const isOpenCurly = (curly) => curly === '[' || curly === '{' || curly === '(' ? true : false;
const isValid = (str) => {
    const stack = [];
    str.split('').forEach((element) => {
        if (isOpenCurly(element)) {
            stack.push(element);
        }
        else {
            if (stack.length === 0)
                return false;
            compare(element, stack.pop());
        }
    });
    if (stack.length === 0)
        return true;
    return false;
};
// console.log(isValid('[{[]}]'));
console.log(isValid('[]{}'));
//# sourceMappingURL=parser.js.map