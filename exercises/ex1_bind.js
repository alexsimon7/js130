function myBind(func, contextObject) {
  return function() {
    return func.apply(contextObject, arguments);
  }
}