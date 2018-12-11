import React from "react"
import PropTypes from "prop-types"

import ExtensionSmall from './ExtensionSmall'

class ExtensionGrid extends React.Component {
  render () {
    return (
      <div className="extension-grid">
        <div className="card-deck">
          { this.props.extensions.map(function(extension){
          	return <ExtensionSmall key={extension.id} name={extension.name} />
          })}
        </div>
      </div>
    );
  }
}

ExtensionGrid.propTypes = {
  extensions: PropTypes.array
};
export default ExtensionGrid
