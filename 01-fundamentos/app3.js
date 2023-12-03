const fs = require('fs')

const content = fs.readFileSync('README.md', 'utf8')
const wordCount = content.split(' ').length
const reactWordCount = content.match(/React/ig).length


console.log('Palabras:', wordCount)
console.log('React:', reactWordCount)