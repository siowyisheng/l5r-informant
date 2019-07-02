import React from 'react'

interface Props {
  setTab: (tab: string) => void
}
const Nav: React.FC<Props> = ({ setTab }) => {
  return (
    <header className="mdl-layout__header">
      <div className="mdl-layout__header-row">
        <span className="mdl-layout-title">Informant</span>
      </div>
      <div
        style={{ height: 48 }}
        className="mdl-layout__tab-bar mdl-js-ripple-effect"
      >
        <a onClick={() => setTab('odds')} className="mdl-layout__tab is-active">
          Odds
        </a>
        <a onClick={() => setTab('opp-deck')} className="mdl-layout__tab">
          Opponent's deck
        </a>
      </div>
    </header>
  )
}
export default Nav
