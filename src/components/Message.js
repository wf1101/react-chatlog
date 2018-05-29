import React from 'react';
import Timestamp from './Timestamp';

const Message = (props) => (
	<div className={`chat-entry ${props.type}`}>
		<h4 className="entry-name">{ props.sender }</h4>
    <div className="entry-bubble">
			<p className="entry-body">{ props.body }</p>
			<div className="entry-time"><Timestamp time={ props.time }/></div>
		</div>
	</div>
)
export default Message;
