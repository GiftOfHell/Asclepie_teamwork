import React from 'react';
import * as Api from 'typescript-fetch-api'

const api = new Api.DefaultApi()

class MedicineTable extends React.Component {

  constructor(props) {
    super(props);
    this.state = { medicines: [] };

    this.handleReload = this.handleReload.bind(this);
  }


  async handleReload(medicine) {
    const response = await api.medicines({ date: '' });
    this.setState({ medicines: response });
  }


  render() {
    return <div>
      <button className="btn" onClick={this.handleReload}>Reload</button>
      <div>
        {this.state.medicines.map((medicine) => <div>{medicine.name1}, {medicine.amount1}, {medicine.address1}</div>)}
        {this.state.medicines.map((medicine) => <div>{medicine.name2}, {medicine.amount2}, {medicine.address2}</div>)}
        {this.state.medicines.map((medicine) => <div>{medicine.name3}, {medicine.amount3}, {medicine.address3}</div>)}
      </div>
    </div>
  }
}

export default MedicineTable;
