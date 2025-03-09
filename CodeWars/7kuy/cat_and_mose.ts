// You will be given a string featuring a cat 'C' and a mouse 'm'. The rest of the string will be made up of '.'. The string will start with the cat, and end with the mouse.
// You need to find out if the cat can catch the mouse from its current position. The cat can jump over at most three characters. So:
// "C.....m" returns "Escaped!" <-- more than three characters between
// "C...m" returns "Caught!" <-- as there are three characters between the two, the cat can jump.

const input = 'C...m';

// export function catMouse(x: string) {
//   const cat = x.indexOf('C');
//   const mouse = x.indexOf('m');
//   return mouse - cat <= 4 ? 'Caught!' : 'Escaped!';
// }

// better because it's more readable and it's more efficient only one loop
export function catMouse(x: string): string {
  return x.lastIndexOf('.') > 3 ? 'Escaped!' : 'Caught!';
}
