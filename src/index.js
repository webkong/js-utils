[
  'date',
].forEach(m => {
  Object.assign(exports, require(`./${m}/`))
})