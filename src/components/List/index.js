import React from 'react';
import PropTypes from 'prop-types';
import CoreContext from '../../Context';

// Context


const List = props => {
    const renderUsers = users => users && users.map(
        user => <p key={user.id}>{user.first_name}</p>
    )
    return (
        <CoreContext.Consumer>
            {({ users }) => <div>{renderUsers(users)}</div>}
        </CoreContext.Consumer>
    );
};

List.propTypes = {
    
};

export default List;