
import React from 'react';

class User extends React.Component
{
    constructor(props, context)
    {
        this.state = 
        {
            name: this.props.name,
            followers: this.props.followers,
            following: this.props.following,
            imgPath: this.props.imgPath
        }
    }
    // render()
    // {
    //     <div className="User">
            
    //     </div>
    // }
}
export default User;