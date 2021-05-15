import React from "react";
import * as Api from "typescript-fetch-api";

const api = new Api.DefaultApi();

class LocationTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = { locations: [] };

    this.handleReload = this.handleReload.bind(this);
  }

  async handleReload(location) {
    const response = await api.locations({ date: "" });
    this.setState({ locations: response });
  }

  render() {
    return (
      <div>
        <div class="row">
          <div class="col-sm-6 col-lg-4 text-center item mb-4">
            <a href="#">
              {" "}
              <div class="image_city1"></div>
            </a>
            <h3 class="text-dark">
              {this.state.locations.map((location) => (
                <a href="#">{location.country1}</a>
              ))}
            </h3>
            <p>
              City:{" "}
              {this.state.locations.map((location) => (
                <a href="#">{location.city1}</a>
              ))}
            </p>
            <p>
              Street:{" "}
              {this.state.locations.map((location) => (
                <a href="#">{location.street1}</a>
              ))}
            </p>
            <p>
              Address:{" "}
              {this.state.locations.map((location) => (
                <a href="#">{location.address1}</a>
              ))}
            </p>
          </div>

          <div class="col-sm-6 col-lg-4 text-center item mb-4">
            <a href="shop-single.html">
              {" "}
              <div class="image_city2"></div>
            </a>
            <h3 class="text-dark">
              {this.state.locations.map((location) => (
                <a href="#">{location.country2}</a>
              ))}
            </h3>
            <p>
              City:{" "}
              {this.state.locations.map((location) => (
                <a href="#">{location.city2}</a>
              ))}
            </p>
            <p>
              Street:{" "}
              {this.state.locations.map((location) => (
                <a href="#">{location.street2}</a>
              ))}
            </p>
            <p>
              Address:{" "}
              {this.state.locations.map((location) => (
                <a href="#">{location.address2}</a>
              ))}
            </p>
          </div>

          <div class="col-sm-6 col-lg-4 text-center item mb-4">
            <a href="shop-single.html">
              {" "}
              <div class="image_city3"></div>
            </a>
            <h3 class="text-dark">
              {this.state.locations.map((location) => (
                <a href="#">{location.country3}</a>
              ))}
            </h3>
            <p>
              City:{" "}
              {this.state.locations.map((location) => (
                <a href="#">{location.city3}</a>
              ))}
            </p>
            <p>
              Street:{" "}
              {this.state.locations.map((location) => (
                <a href="#">{location.street3}</a>
              ))}
            </p>
            <p>
              Address:{" "}
              {this.state.locations.map((location) => (
                <a href="#">{location.address3}</a>
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
              Reload Location
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default LocationTable;
