import React, { Component } from "react";
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import store from 'store';

import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

const styles = {
  textTransform: "uppercase",
  fontWeight: "bold",
  color: "black",
  paddingLeft: "-20px",
  fontSize: "15px",
  letterSpacing: "1px"
}

class Footer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
      open1: false,
      vehicle_details: [],
      message: ""
    };
  }

  componentDidMount() {
    if(store.get('vehicle_details')) {
      this.setState({ vehicle_details: store.get('vehicle_details'), message: ""})
    }
    else {
      fetch("https://findfalcone.herokuapp.com/vehicles")
      .then(vechile => vechile.json())
      .then(vechile => {
        store.set('vehicle_details',vechile)
        this.setState({ vehicle_details: vechile, message: "" })
      })
      .catch(err => {
        if (err.message === "Failed to fetch") {
          this.setState({ message: "Please check your network connection." });
        } else {
          this.setState({
            messgae: "Something went wrong, please try again after sometime."
          });
        }
        throw new TypeError(err);
      });
    }
  }

  componentWillUnmount() {
    store.remove('vehicle_details')
  }

  handleOpen = (val) => {
    if (val === "open") {
      this.setState({ open: true })
    }
    else {
      this.setState({ open1: true })
    }
  };

  handleClose = (val) => {
    if (val === "open") {
      this.setState({ open: false })
    }
    else {
      this.setState({ open1: false })
    }
  };

  render() {
    const disable_actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onClick={event => this.handleClose("open")}
      />,
    ];

    const vechile_action = [
      <FlatButton
        label="Cancel"
        primary={true}
        onClick={event => this.handleClose("open1")}
      />,
    ];

    const renderTableData = this.state.vehicle_details.map(vech => {
      return (
        <TableRow >
          <TableRowColumn>{vech.name}</TableRowColumn>
          <TableRowColumn>{vech.max_distance}</TableRowColumn>
          <TableRowColumn>{vech.total_no}</TableRowColumn>
          <TableRowColumn>{vech.speed}</TableRowColumn>
        </TableRow>
      )
    });

    return (
      <section className="section-footer">
        <div className="section-footer__link">
          <a href="#" onClick={event => this.handleOpen("open")} className="section-footer__link-1">Why Vehicle Name disable?</a>
          <a href="#" onClick={event => this.handleOpen("open1")} className="section-footer__link-2">Vechile Details</a>
        </div>
        <MuiThemeProvider>
          <Dialog
            title="Disable radio button reasons:"
            actions={disable_actions}
            modal={false}
            open={this.state.open}
            onRequestClose={event => this.handleClose("open")}
          >
            <ul className="section-footer_list">
              <li className="section-footer_list-1">Selected Planet distance is greater than the Vechile max distance.</li>
              <li className="section-footer_list-2">Count of the Vechile turns to 0 as it went to another planet.</li>
            </ul>
          </Dialog>

          <Dialog
            title="Vechile details"
            actions={vechile_action}
            modal={false}
            open={this.state.open1}
            onRequestClose={event => this.handleClose("open1")}
          >
            <Table>
                <TableHeader displaySelectAll={false} >
                  <TableRow>
                    <TableHeaderColumn  style={styles}>Name</TableHeaderColumn>
                    <TableHeaderColumn  style={styles}>Max Distance</TableHeaderColumn>
                    <TableHeaderColumn  style={styles}>Total Number</TableHeaderColumn>
                    <TableHeaderColumn  style={styles}>Speed</TableHeaderColumn>
                  </TableRow>
                </TableHeader>
              <TableBody displayRowCheckbox={false}>
                {renderTableData}
              </TableBody>
            </Table>
          </Dialog>
        </MuiThemeProvider>
        <span className="section-planet__error">{this.state.message}</span>
      </section>
    );
  }
}

export default Footer;
