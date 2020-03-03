import React from "react";
import DirectorShareholdersBox from "../DirectorShareholdersBox";

export default function Directors() {
  const onClickAddDirectors = () => {
    alert("here");
  };
  return (
    <div>
      <h1>Directors</h1>
      <div className="onboarding-user-add-card">
        <div
          className="onboarding-user-add-card-head"
          //onClick={onClickAddDirectors}
          data-toggle="modal" data-target="#exampleModalCenter_address_ack"
        >
          <div>
            <p>
              <b>Add Directors</b>
            </p>
          </div>
        </div>
        <DirectorShareholdersBox />
      </div>

      <div className="modal fade" id="exampleModalCenter_address_ack" tabindex="-1" role="dialog"
        aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
                <div className="modal-body">
                    <div className="popup-card">
                        <div className="row pop-up pop-up-2">
                            <div className="col-md-12 workflow-form-dropdown">
                                <label>Pick an existing contact</label>
                                <select>
                                    <option>1</option>
                                    <option>2</option>
                                </select>
                            </div>
                            <div className="col-md-6">
                                <form>
                                    <div className="label1">
                                        <input className="text-box" type="text" />
                                        <label className="label2">First Name</label>
                                        <p className="warning-label">First name is required</p>
                                    </div>
                                </form>
                            </div>
                            <div className="col-md-6">
                                <form>
                                    <div className="label1">
                                        <input className="text-box" type="text" />
                                        <label className="label2">Last Name</label>
                                        <p className="warning-label">Last name is required</p>
                                    </div>
                                </form>
                            </div>
                            <div className="col-md-12">
                                <form>
                                    <div className="label1">
                                        <input className="text-box" type="email" />
                                        <label className="label2">Email</label>
                                        <p className="warning-label">Email is required</p>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="modal-footer">
                    <button type="button" className="secondary-button">ADD</button>
                </div>
            </div>
        </div>
    </div>
    </div>
  );
}
