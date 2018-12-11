import React from "react"
import PropTypes from "prop-types"
class ExtensionSmall extends React.Component {

  constructor(props) {
    super(props);
    this.state = {isInstalling: false};

    // Toggle the state every second
    // setInterval(() => {
    //   this.setState(previousState => {
    //     return { isInstalling: !previousState.isInstalling };
    //   });
    // }, 5000);

    this.install = this.install.bind(this);
  }

  install() {
    this.setState(previousState => {
      return { isInstalling: !previousState.isInstalling };
    });

    setTimeout(() => {

      this.props.installed = true;

      this.setState(previousState => {
        return { isInstalling: false };
      });
    }, 1000);
  }

  render () {
    var footer;
    if ( this.state.isInstalling ) {
      footer = <span className="footer-info installing">Installing</span>
    }
    else {
      if ( this.props.installed ) {
        footer = <span className="footer-info installed">Installed</span>
      }
      else {
        footer = <a className="install" href="#" onClick={this.install}>Install</a>
      }
    }

    return (
      <div className="card my-3">
        <div className="card-body">
          <h5 className="card-title">{this.props.name}</h5>
          <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        </div>
        <div className="card-footer">
          {footer}
        </div>
      </div>
    );
  }
}

ExtensionSmall.propTypes = {
  name: PropTypes.string,
  extension: PropTypes.object
};
export default ExtensionSmall
