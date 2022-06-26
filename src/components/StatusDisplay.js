import React from 'react';

const StatusDisplay = ( {status}) => {
    const getColor = (status) => {
        let color
        switch (status) {
            case 'done':
                color='rgb(126,248,151)'
                break
            case 'pending':
                color='rgb(253,212,159)'
                break
            case 'in progress':
                color ='rgb(255,152,161)'
                break
            default:
                color='rgb(150,222,222)'
        }
        return color
    }
    return (
        <div className='status-display' style={{backgroundColor: getColor(status)}}>
            {status}
        </div>
    );
}

export default StatusDisplay;