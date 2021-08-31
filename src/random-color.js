const randomColor = () => {
  // 1. arg1 is number?
  // 2. arg2 is number?
  // 3. arg3 is "Red" | "Blue" | "Green"
  //   const valueChecker = (num) => {
  //     return typeof num === "number" ? num : undefined;
  //   };
  let color = [];

  color.push(Math.floor(Math.random() * 255 + 1));
  color.push(Math.floor(Math.random() * 255 + 1));
  color.push(Math.floor(Math.random() * 255 + 1));
  return color;
};

const randomPastel = () => {
  // 1. arg1 is number?
  // 2. arg2 is number?
  // 3. arg3 is "Red" | "Blue" | "Green"
  //   const valueChecker = (num) => {
  //     return typeof num === "number" ? num : undefined;
  //   };

  // Randomly determines Hue
  let H = Math.floor(Math.random() * 360 + 1);
  // Random Saturation 25~70
  let S = Math.floor(Math.random() * 40 + 30);
  // Random brightness 85~95
  let L = Math.floor(Math.random() * 15 + 70);
  return `HSLA(${H},${S}%,${L}%,1)`;
};

export default randomColor;
export { randomPastel };
