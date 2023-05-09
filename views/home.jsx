const React = require('react')
const Def = require('./default')

function home () {
  return (
    <Def>
      <main>
        <h1>REST-Rant</h1>
        <div id="img1">
          <img id="burger" src="/images/burger.jpg" alt="Picture of double stack, fully loaded burger" />
          <div>
            Photo by <a href="https://unsplash.com/@phototastyfood?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Food Photographer</a> on <a href="https://unsplash.com/photos/E94j3rMcxlw?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
          </div>
        </div>
        <a href="/places">
          <button className="btn-primary">Places Page</button>
        </a>
      </main>
    </Def>
  )
}

module.exports = home