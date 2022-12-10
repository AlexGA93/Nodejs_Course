const url = 'https://www.example.org/courses/programming?sort=visits&level=1';
const myUrl = new URL(url);

// hostname
console.log(myUrl.hostname); // www.example.org
console.log(myUrl.host); // www.example.org

console.log(myUrl.pathname); // /courses/programming

console.log(myUrl.searchParams);// URLSearchParams { 'sort' => 'visits', 'level' => '1' }
console.log(myUrl.searchParams.get('sort')); // visits
console.log(myUrl.searchParams.get('level')); // 1
