const compare = (actual: string, stackElement: string) => {
  switch (actual) {
    case ')' : console.log(actual);
  }
}

const isValid = (str: string) => {
  const stack: string[] = [];
  str.split('').forEach( (element: string) => {
    if (element === '[' || element === '{' || element === '(') {
      stack.push(element);
    } else {
      compare(element, stack.pop());
    } 
  });
  console.log(stack);
}

isValid('[{[]}]');