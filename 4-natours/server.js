const dotenv = require('dotenv');

dotenv.config({ path: './config.env' });

const app = require('./app');
// console.log(process.env);

// 4) SERVER
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`App running on PORT ${PORT}.......`);
});
// 127.0.0.1:3000
