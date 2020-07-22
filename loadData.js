function prepData(srcString) {
  return new Promise((resolve, reject) => {

    // load csv data, assign to var
    return d3.json(srcString).then(data => {
      console.log('data');
      console.log(data);

      resolve(data)
    })
  })
}