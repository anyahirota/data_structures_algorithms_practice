function finalInstances(instances, averageUtil) {
  // Write your code here
  let i = 0;
  while (i < averageUtil.length) {
    if (averageUtil[i] < 25 && instances > 1) {
      instances = Math.ceil(instances / 2);
      i += 11;
    } else if (averageUtil[i] > 60 && instances * 2 < 2 * 10 ** 8) {
      instances *= 2;
      i += 11;
    } else {
      i++;
    }
  }
  return instances;
}
