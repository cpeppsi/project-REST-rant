const React = require('react')
const Def = require('./default')

function error404 () {
  return (
    <Def>
      <main>
        <h1>404: PAGE NOT FOUND</h1>
        <p>Oops, sorry, we can't find this page!</p>
        <div id="img2">
          <img id="img404" src="/images/puppies.jpg" alt="A cute picture of puppies" />
          <div>
            Photo by <a href="https://unsplash.com/@bk010397?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Bharathi Kannan</a> on <a href="https://unsplash.com/images/animals/puppies?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
          </div>
        </div>
      </main>
    </Def>
  )
}

module.exports = error404