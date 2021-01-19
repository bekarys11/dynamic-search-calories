import React, { useState } from "react";

function Dropdown({ title, calories, img }) {
	const [open, setOpen] = useState(false);
	const toggle = () => setOpen(!open);

	return (
		<div className="dd-header">
			<div
				role="button"
				onKeyPress={() => toggle(!open)}
				onClick={() => toggle(!open)}
			>
				<h3 className="dd-header_title">{title}</h3>
			</div>
			<div className="calories-block">
				{open && (
					<div className="img-cal">
						<img src={img} alt="img" />
						<p>{parseInt(calories)} calories</p>
					</div>
				)}
			</div>
		</div>
	);
}

export default Dropdown;
