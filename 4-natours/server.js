const dotenv = require('dotenv');
const app = require('./app');

dotenv.config({ path: './config.env' });

console.log(process.env);

// 4) SERVER
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`App running on PORT ${PORT}.......`);
});
// 127.0.0.1:3000
