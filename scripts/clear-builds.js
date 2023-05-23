const fs = require('fs/promises');

(async () => {
  try {
    await fs.rm(__dirname + '/../react.js');
    await fs.rm(__dirname + '/../bootstrap.js');
    await fs.rm(__dirname + '/../rsuite5.js');
    await fs.rm(__dirname + '/../bootstrap.js');
    await fs.rm(__dirname + '/../material-ui.js');
  } catch(e) {
    // do nothing
  }
})();
