import "./AboutPopup.css";

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";

function AboutPopup({ onCloseClick }) {
	return (
		<div className="popup">
			<FontAwesomeIcon
				icon={faClose}
				className="popup-close"
				onClick={onCloseClick}
			/>
			<div className="popup-container"></div>
		</div>
	);
}

export default AboutPopup;
