import axios from 'axios';

async function run() {
    const response = await axios.get('http://httpbin.org/redirect-to?url=get', {maxRedirects: 0})
    const html = response.data;
    console.log(html);
}

run();
