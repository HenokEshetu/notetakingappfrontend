import React from "react";
import "./SuccessPopup.css";

function SuccessPopup({ onClickOk, title, message1, message2 }) {
	return (
		<div className="success-container">
			<div className="success-main">
				<div className="success-main-header">
					<span>{title}</span>
				</div>
				<div className="success-main-content">
					<span>{message1}</span>
					<span>{message2}</span>
				</div>
				<div className="success-main-footer">
					<button onClick={onClickOk}>Ok</button>
				</div>
			</div>
		</div>
	);
}

export default SuccessPopup;
