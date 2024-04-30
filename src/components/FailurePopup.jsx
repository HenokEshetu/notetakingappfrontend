import React from "react";
import "./FailurePopup.css";

function FailureErrorPopup({ onClickOk, title, message1, message2 }) {
	return (
		<div className="failure-container">
			<div className="failure-main">
				<div className="failure-main-header">
					<span>{title}</span>
				</div>
				<div className="failure-main-content">
					<span>{message1}</span>
					<span>{message2}</span>
				</div>
				<div className="failure-main-footer">
					<button onClick={onClickOk}>Ok</button>
				</div>
			</div>
		</div>
	);
}

export default FailureErrorPopup;
