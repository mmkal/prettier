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

// https://github.com/prettier/prettier/issues/1565

d3.select("body").selectAll("p").data([1, 2, 3]).enter().style("color", "white");

Object.keys(props).filter(key => key in own === false).reduce((a, key) => {
  a[key] = props[key];
  return a;
}, {})

point().x(4).y(3).z(6).plot();

assert.equal(this.$().text().trim(), '1000');

something().then(() => doSomethingElse()).then(result => dontForgetThisAsWell(result))

db.branch(
  db.table('users').filter({ email }).count(),
  db.table('users').insert({ email }),
  db.table('users').filter({ email }),
)

sandbox.stub(config, 'get').withArgs('env').returns('dev')

moment.utc(userInput).hour(0).minute(0).second(0)

fetchUser(id)
  .then(fetchAccountForUser)
  .catch(handleFetchError)

fetchUser(id) //
  .then(fetchAccountForUser)
  .catch(handleFetchError)
