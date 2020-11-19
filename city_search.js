function closestCity(cities, xCoords, yCoords, queries) {
    let result = [];
    for (let i = 0; i < queries.length; i++) {
        let idx = cities.indexOf(queries[i]); 
        let x = xCoords[idx];
        let y = yCoords[idx]; 
        let closestIdx = null;
        let distance = Infinity; 
        for (let j = 0; j < xCoords.length; j++) {
            if (j !== idx) {
                if (xCoords[j] === x) {
                    if (Math.abs(yCoords[j] - y) < distance) {
                        closestIdx = j;
                    }
                } else if (yCoords[j] === y) {
                    if (Math.abs(xCoords[j] - x) < distance) {
                      closestIdx = j;
                    }
                }
            }
        }
        if (closestIdx !== null) {
            result.push(cities[closestIdx]);
        } else {
            result.push("NONE");
        }
    }
    return result;
}
const c = ["c1", "c2", "c3"]; 
const x = [3, 2, 1];
const y = [3, 2, 3];
const q = ["c1", "c3", "c2"];

console.log(closestCity(c, x, y, q));

function closestStraightCity(c, x, y, q) {
  // Write your code here
  let result = [];
  for (let i = 0; i < q.length; i++) {
    let idx = c.indexOf(q[i]);
    let xCoord = x[idx];
    let yCoord = y[idx];
    let closestIdx = null;
    let distance = Infinity;
    for (let j = 0; j < x.length; j++) {
      if (j !== idx) {
        if (x[j] === xCoord) {
          let currDistance = Math.abs(y[j] - yCoord);
          if (currDistance < distance) {
            closestIdx = j;
            distance = currDistance;
          } else if (currDistance === distance) {
            if (c[closestIdx].length > c[j].length) {
              closestIdx = j;
            }
          }
        } else if (y[j] === yCoord) {
          let currDistance = Math.abs(x[j] - xCoord);
          if (currDistance < distance) {
            closestIdx = j;
            distance = currDistance;
          } else if (currDistance === distance) {
            if (c[closestIdx].length > c[j].length) {
              closestIdx = j;
            }
          }
        }
      }
    }
    if (closestIdx !== null) {
      result.push(c[closestIdx]);
    } else {
      result.push("NONE");
    }
  }
  return result;
}
