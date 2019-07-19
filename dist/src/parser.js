const isValid = (str) => {
    const stack = [];
    str.split('').forEach((element) => {
        if (element === '[' || element === '{' || element === '(') {
            stack.push(element);
        }
    });
    console.log(stack);
};
isValid('[{[]}]');
//# sourceMappingURL=parser.js.map