function mergeArrays(ArrayA, ArrayB) {
    // Write your code to combine the sorted arrays into sorted Result Array
    let merge = [];
    // merge = ArrayA.concat(ArrayB); //Aşağıdaki 6 satır kod bunu yapmaktadır.
    // for (let i = 0; i < ArrayA.length; i++) {
    //   merge.push(ArrayA[i]);
    // }
    // for (let i = 0; i < ArrayB.length; i++) {
    //   merge.push(ArrayB[i]);
    // }
    let allLength = ArrayA.length + ArrayB.length;
    for (let i = 1; i <= allLength; i++) {
      if (ArrayA[0] > ArrayB[0] || ArrayA.length == 0) {
        merge.push(ArrayB[0]);
        ArrayB.shift();
        // console.log('merge e eklenen : ', ArrayB.shift());
        // console.log('2. Array de kalan : ', ArrayB);
      } else if (ArrayA[0] < ArrayB[0] || ArrayB.length == 0) {
        merge.push(ArrayA[0]);
        ArrayA.shift();
        // console.log('merge e eklenen : ', ArrayA.shift());
        // console.log('1. Array de kalan : ', ArrayA);
      }
      // console.log('sonuç : ', merge);
    }
    return merge;
    // return merge.sort();
  }
  // You can write additional helper functions as well.
  /* *** Tests *** */
  let desc = 'with empty arrays';
  let actual = mergeArrays([], []);
  let expected = [];
  assertDeepEqual(actual, expected, desc);
  desc = 'first array empty';
  actual = mergeArrays([], [7, 8, 9]);
  expected = [7, 8, 9];
  assertDeepEqual(actual, expected, desc);
  desc = 'second array empty';
  actual = mergeArrays([10, 11, 12], []);
  expected = [10, 11, 12];
  assertDeepEqual(actual, expected, desc);
  desc = 'arrays with same lengths';
  actual = mergeArrays([12, 14, 16], [11, 13, 17]);
  expected = [11, 12, 13, 14, 16, 17];
  assertDeepEqual(actual, expected, desc);
  desc = 'arrays with different lengths';
  actual = mergeArrays([22, 24, 26, 28], [21, 27]);
  expected = [21, 22, 24, 26, 27, 28];
  assertDeepEqual(actual, expected, desc);
  function assertDeepEqual(a, b, desc) {
    const aStr = JSON.stringify(a);
    const bStr = JSON.stringify(b);
    if (aStr !== bStr) {
      console.log(`${desc} ... FAIL: ${aStr} != ${bStr}`);
    } else {
      console.log(`${desc} ... PASS`);
    }
  }