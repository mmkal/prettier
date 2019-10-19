// examples from https://github.com/prettier/prettier/issues/4125

req.checkBody('id').isInt().optional();
req.checkBody('name').notEmpty().optional();

const x = moment().add(1, 'day').valueOf()

// should stay on one line:
obj.foo(1).foo(2).foo(3);

// better on multiple lines:
somePromise.then((val)=>doSomething(val)).catch((err)=>handleError(err))

// you can still force multi-line chaining with a comment:
const sha256 = (data) =>
  crypto // breakme
    .createHash("sha256")
    .update(data)
    .digest("hex");

// more examples from https://github.com/prettier/prettier/pull/4765

if ($(el).attr("href").includes("/wiki/")) {
}

if ($(el).attr("href").includes("/wiki/")) {
  if ($(el).attr("xyz").includes("/whatever/")) {
    if ($(el).attr("hello").includes("/world/")) {
    }
  }
}

const parseNumbers = s => s.split('').map(Number).sort()

function palindrome(a, b) {
  return a.slice().reverse().join(',') === b.slice().sort().join(',');
}
