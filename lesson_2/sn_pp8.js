function objCreator(first, middle1, middle2, middle3, last) {
  return {
    first,
    last,
    middle: [middle1, middle2, middle3].sort(),
  };
}


let arr = [1, 24, 16, 19, 77];

let { first, last, middle } = objCreator(...arr);

