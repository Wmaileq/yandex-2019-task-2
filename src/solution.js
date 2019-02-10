const solution = function (graph, start, finish) {

  let queque = []
  let dictionary = []
  let solution = {
    distance: Infinity
  }

  Object.keys(graph[start]).forEach(i => {
    queque.push({
      distance: graph[start][i],
      path: [start, i],
    })
    dictionary.push(start + i)
  })

  let i = 0;
  while (i < queque.length) {
    let curPath = queque[i].path;
    let curDistance = queque[i].distance
    let curName = curPath[curPath.length - 1];
    let curRoutes = graph[curName];

    Object.keys(curRoutes).forEach(k => {
      if (k === finish && (curDistance + curRoutes[k]) < solution.distance) {
        solution.distance = curDistance + curRoutes[k],
          solution.path = [...curPath, k]
      } else if (!dictionary.includes(curPath.join('') + k)) {
        queque.push({
          distance: curDistance + curRoutes[k],
          path: [...curPath, k],
        })
        dictionary.push(curPath.join('') + k)
      }
    })
    i++;
  }

  if (solution.distance === Infinity) {
    return 'No solutions'
  }

  return solution
}
