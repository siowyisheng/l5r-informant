import React, { useState } from 'react'
import { Helmet } from 'react-helmet'
import NewWindow from 'react-new-window'
import Main from './components/Main'
import './App.css'

function App() {
  const [apps, setApps] = useState(0)
  return (
    <div className="App">
      <Helmet>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <link
          rel="stylesheet"
          href="http://fonts.googleapis.com/css?family=Roboto:300,400,500,700"
          type="text/css"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
        <link
          rel="stylesheet"
          href="https://code.getmdl.io/1.3.0/material.purple-pink.min.css"
        />
        <script defer src="https://code.getmdl.io/1.3.0/material.min.js" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
        <script src="https://cdn.jsdelivr.net/npm/lodash@4.17.11/lodash.min.js" />
        <title>Informant</title>
      </Helmet>
      <header className="App-header">
        <h1 className="mdl-typography--display-4">L5R Informant</h1>
        <button
          className="mdl-button mdl-js-button mdl-button--raised mdl-button--colored"
          onClick={() => setApps(apps + 1)}
        >
          Start
        </button>
        {[...Array(apps)].map((e, i) => (
          <NewWindow
            key={i}
            title="L5R Informant"
            features={{
              resizable: true,
              height: 700,
              width: 400,
            }}
          >
            <Main />
          </NewWindow>
        ))}
        <h6 className="mdl-typography--title">
          The app opens in a pop-up. You can close this tab now.
        </h6>
        <p>
          You may have to disable your popup blocker on this site. No ads are
          served here.
        </p>
      </header>
    </div>
  )
}

export default App
