const compare = (actual: string, stackElement: string) => {
  switch (actual) {
    case ']' : if (stackElement !== '[') return false; break;
    case '}' : if (stackElement !== '{') return false; break;
    case ')' : if (stackElement !== '(') return false; break;
    default : break;
  }
}

const isOpenCurly = (curly: string): boolean => 
  curly === '[' || curly === '{' || curly === '(' ? true : false;

const isValid = (str: string) => {
  const stack: string[] = [];
  str.split('').forEach( (element: string) => {
    if (isOpenCurly(element)) {
      stack.push(element);
    } else {
      if (stack.length === 0) return false;
      compare(element, stack.pop());
    } 
  });
  if (stack.length === 0) return true;
  return false;
}

console.log(isValid('[{[]}]'));

// console.log(isValid('[]{}'));