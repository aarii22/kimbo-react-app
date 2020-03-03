import React from "react";

export default function ExistingAddress() {
  return (
    <div>
      <div className="modal fade" id="exampleModalCenter_address_ack" tabindex="-1" role="dialog"
        aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
                <div className="modal-header">
                    <h4 className="modal-title primary-semibold" id="exampleModalLongTitle">INFO</h4>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <svg xmlns="http://www.w3.org/2000/svg" width="9" height="9" viewBox="0 0 6 6">
                            <defs>
                            </defs>
                            <path className="a"
                                d="M3.713,3,5.853.86A.5.5,0,1,0,5.139.147L3,2.286.861.147A.5.5,0,0,0,.148.86L2.287,3,.148,5.139a.5.5,0,0,0,.713.713L3,3.713,5.139,5.852a.5.5,0,1,0,.713-.713Z"
                                transform="translate(0 0)" />
                        </svg>
                    </button>
                </div>
                <div className="modal-body">
                    <div className="popup-card">
                        <p>Please confirm if your address is an approved business address. For residential address, URA requirements should be satisfied and a license must be obtained.</p>
                    </div>
                </div>
                <div className="modal-footer">
                    <button type="button" className="secondary-button">Cancel</button>
                    <button type="button" className="secondary-button">I Acknowledge</button>
                </div>
            </div>
        </div>
    </div>
    </div>
  );
}
