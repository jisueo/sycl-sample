
const sycl = require('sandbox-youtube-comments-lite');

async function test() {
    const result = await sycl.crawling('gdZLi9oWNZg', 30);
    console.log(result);    
}
async function testCallback() {
    sycl.crawlingCallback('ONpwVdyngpY', 30, (arr, end) => {
        console.log("***********************");
        console.log(arr);
    });
    
}

test();
testCallback();