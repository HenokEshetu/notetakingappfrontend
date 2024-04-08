import React from "react";
import "./DeleteVerification.css";

function DeleteVerification({ deleteVerificationPopup, onClickDelete }) {
	return (
		<div className="delete-container">
			<div className="delete-main">
				<div className="delete-main-header">
					<span>Deletion Verification</span>
				</div>
				<div className="delete-main-content">
					<span>Are you sure?</span>
					<span>Do you want to delete the note?</span>
				</div>
				<div className="delete-main-footer">
					<button onClick={onClickDelete}>Yes</button>
					<button onClick={() => deleteVerificationPopup(false)}>No</button>
				</div>
			</div>
		</div>
	);
}

export default DeleteVerification;
