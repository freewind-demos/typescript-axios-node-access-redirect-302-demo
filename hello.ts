import axios from 'axios';

async function run() {
  const response = await axios.get('http://github.com')
  const html = response.data;
  console.log(html);
}

run();
