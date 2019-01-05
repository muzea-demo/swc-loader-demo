const fs = require('fs');
const path = require('path');
const lodashFolder = './vendor/';

let importList = ''
let objAssign = ''

fs.readdirSync(lodashFolder).forEach(file => {
  if (file.endsWith('.js') && file[0] !== '.') {
    const name = path.basename(file, '.js');
    importList += `import ${name} from '../vendor/${name}'\n`;
    objAssign += `lodash.${name} = ${name}\n`;
  }
})

const data = `${importList}
const lodash = {}
${objAssign}
export default lodash
`

fs.writeFileSync('./src/lodash.js', data)
