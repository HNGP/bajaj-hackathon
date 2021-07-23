import React from "react";
import { Card } from "antd";
import "./otherCard.css";
import { Button } from "antd";

const OtherDocCard = (props) => {
	return (
		<>
			<Card size="small" style={{ width: 280 }} className="otherCard">
				<img
					src="https://c.ndtvimg.com/2021-05/8uc4ac3o_hyderabad-doctor-charges-rs-10-twitter_625x300_31_May_21.jpeg"
					alt="Doctor"
				/>
				<div className="text">
					<p>
						<span>
							<strong> Dr. Aboobacker</strong>
						</span>
						<span id="price">₹800 Per Hour</span>
					</p>
					<Button type="primary" size={20} className="button">
						Replace & Reschedule
					</Button>
				</div>
			</Card>
		</>
	);
};

export default OtherDocCard;
