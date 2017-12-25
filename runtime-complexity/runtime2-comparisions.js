const findDuplicatesA = (array) => {
  const duplicated = [];
  const seen = [];
  for (let search = 0; search < array.length; search++) {
    const item = array[search];
    if (seen.indexOf(item) != -1 && duplicated.indexOf(item) == -1) {
      duplicated.push(item);
    }
    seen.push(item);
  }
  return duplicated;
}

const findDuplicatesB = (array) => {
  const seen = new Set();
  const duplicates = new Set();
  for (let i = 0; i < array.length; i++) {
    if (seen.has(array[i])) {
      duplicates.add(array[i]);
    }
    seen.add(array[i]);
  }
  return duplicates;
}

const findDuplicatesC = (array) => {
  array.sort();
  const duplicates = [];
  for (let i = 0; i < array.length - 1; i++) {
    const item = array[i];
    const nextItem = array[i + 1];
    if (item == nextItem && duplicates.indexOf(item) == -1) {
      duplicates.push(item);
    }
  }
  return duplicates;
}

const countOccurencesA = (array) => {
  const counts = {};
  for (let i = 0; i < array.length; i++) {
    const item = array[i];
    if (counts[item] === undefined) {
      let countForI = 0;
      for (let j = 0; j < array.length; j++) {
        if (array[j] == array[i]) {
          countForI++;
        }
      }
      counts[item] = countForI;
    }
  }
  return counts;
}

const countOccurencesB = (array) => {
  const counts = {};
  for (let i = 0; i < array.length; i++) {
    const item = array[i];
    if (counts[item] === undefined) {
      counts[item] = 0;
    }
    counts[item] += 1;
  }
  return counts;
}
