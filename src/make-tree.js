function diffIndex(node) {
  let diff = node.depth;
  let equals = true;
  let index = 1;
  while (equals) {
    index = 0;
    while (index < node.editList.length && equals) {
      equals = node.editList[index][diff] == node.editList[index - 1][diff];
      index++;
    }
    diff++;
  }
  return diff;
}

module.exports = table => {
  let index = 0;
  let tree = { editList: Object.keys(table), depth: 0 };
  let editList = [tree];

  while (editList.length > 0) {
    let newEditList = [];
    for (let node of editList) {
      let diff = diffIndex(node);
      if (diff == 0) {
        for (let item of node.editList) {
        }
      }
    }
    editList = newEditList;
  }

  return tree;
};
