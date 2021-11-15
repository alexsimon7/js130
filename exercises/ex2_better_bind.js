function myBind(func, contextObject) {
  let partialArgs = [].slice.apply(arguements, [2]);

  return function() {
    let remainingArgs = [].slice.apply(arguments);
    let fullArgs = partialArgs.concat(remainingArgs);

    return func.apply(contextObject, fullArgs);
  }
}
