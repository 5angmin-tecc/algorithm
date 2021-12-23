function solution(sizes) {
  var answer = 0;
  const width = [];
  const height = [];

  for (let i = 0; i < sizes.length; i++) {
    if (sizes[i][0] > sizes[i][1]) {
      width.push(sizes[i][0]);
      height.push(sizes[i][1]);
    } else {
      width.push(sizes[i][1]);
      height.push(sizes[i][0]);
    }
  }

  let widthMax = 0;
  let heightMax = 0;

  for (let i = 0; i < width.length; i++) {
    if (width[i] > widthMax) {
      widthMax = width[i];
    }
  }
  for (let i = 0; i < height.length; i++) {
    if (height[i] > heightMax) {
      heightMax = height[i];
    }
  }

  answer = widthMax * heightMax;
  return answer;
}
