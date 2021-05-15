import React from "react";
import * as Api from "typescript-fetch-api";

const api = new Api.DefaultApi();

class MedicineTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = { medicines: [] };

    this.handleReload = this.handleReload.bind(this);
  }

  async handleReload(medicine) {
    const response = await api.medicines({ date: "" });
    this.setState({ medicines: response });
  }

  render() {
    return (
      <div>
        <div class="row">
          <div class="col-sm-6 col-lg-4 text-center item mb-4">
            <span class="tag">Sale</span>
            <a href="#">
              {" "}
              <div class="image_product1"></div>
            </a>
            <h3 class="text-dark">
              {this.state.medicines.map((medicine) => (
                <a href="#">{medicine.name1}</a>
              ))}
            </h3>
            <p>
              Amount:{" "}
              {this.state.medicines.map((medicine) => (
                <a href="#">{medicine.amount1}</a>
              ))}
            </p>
            <p>
              Price:{" "}
              {this.state.medicines.map((medicine) => (
                <a href="#">{medicine.price1}</a>
              ))}
            </p>
            <p>
              Address:{" "}
              {this.state.medicines.map((medicine) => (
                <a href="#">{medicine.address1}</a>
              ))}
            </p>
          </div>

          <div class="col-sm-6 col-lg-4 text-center item mb-4">
            <a href="shop-single.html">
              {" "}
              <div class="image_product2"></div>
            </a>
            <h3 class="text-dark">
              {this.state.medicines.map((medicine) => (
                <a href="#">{medicine.name2}</a>
              ))}
            </h3>
            <p>
              Amount:{" "}
              {this.state.medicines.map((medicine) => (
                <a href="#">{medicine.amount2}</a>
              ))}
            </p>
            <p>
              Price:{" "}
              {this.state.medicines.map((medicine) => (
                <a href="#">{medicine.price1}</a>
              ))}
            </p>
            <p>
              Address:{" "}
              {this.state.medicines.map((medicine) => (
                <a href="#">{medicine.address2}</a>
              ))}
            </p>
          </div>

          <div class="col-sm-6 col-lg-4 text-center item mb-4">
            <a href="shop-single.html">
              {" "}
              <div class="image_product3"></div>
            </a>
            <h3 class="text-dark">
              {this.state.medicines.map((medicine) => (
                <a href="#">{medicine.name3}</a>
              ))}
            </h3>
            <p>
              Amount:{" "}
              {this.state.medicines.map((medicine) => (
                <a href="#">{medicine.amount3}</a>
              ))}
            </p>
            <p>
              Price:{" "}
              {this.state.medicines.map((medicine) => (
                <a href="#">{medicine.price1}</a>
              ))}
            </p>
            <p>
              Address:{" "}
              {this.state.medicines.map((medicine) => (
                <a href="#">{medicine.address3}</a>
              ))}
            </p>
          </div>
        </div>
        <div class="row mt-5">
          <div class="col-12 text-center">
            <button
              class="btn btn-primary px-4 py-3"
              onClick={this.handleReload}
            >
              Reload Medicine
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default MedicineTable;
