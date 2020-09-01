import React, { Component } from "react";

export default class Buttons extends Component {
  render() {
    return (
      <div className="col-sm">
        <div className="form-row">
          <div className="col-md-6">
            <button
              type="button"
              className="btn form-control btn-outline-primary"
              data-toggle="modal"
              data-target="#cancelModal"
            >
              Close
            </button>

            <div
              className="modal fade"
              id="cancelModal"
              tabIndex="-1"
              role="dialog"
              aria-labelledby="cancelModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog" role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="cancelModalLabel">
                      Cancel
                    </h5>
                    <button
                      type="button"
                      className="close"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div className="modal-body">
                    Do you want to cancel changes?
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-dismiss="modal"
                    >
                      No
                    </button>
                    <button type="button" className="btn btn-primary">
                      Yes
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="form-group col-md-6">
            <button
              type="button"
              className="btn form-control btn-outline-primary"
              data-toggle="modal"
              data-target="#saveModal"
            >
              Save
            </button>

            <div
              className="modal fade"
              id="saveModal"
              tabIndex="-1"
              role="dialog"
              aria-labelledby="saveModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog" role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="saveModalLabel">
                      Save
                    </h5>
                    <button
                      type="button"
                      className="close"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div className="modal-body">Do you want to save changes?</div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-dismiss="modal"
                    >
                      No
                    </button>
                    <button type="button" className="btn btn-primary">
                      Yes
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
