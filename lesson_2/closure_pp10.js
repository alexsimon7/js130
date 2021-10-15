function bind(context, func) {
  return () => func.call(context);
}