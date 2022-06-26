import React from 'react';
import blankAvatar from '../images/blank-profile.png'

const AvatarDisplay = ({ticket}) => {
    return (
        <div className="avatar-container">
            <div className="img-container">
                <img alt={'avatar-img of' + ticket.owner} src={ticket.avatar ? ticket.avatar : blankAvatar} />
            </div>
        </div>
    );
}

export default AvatarDisplay;