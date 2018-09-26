import React, { Component } from 'react';

class Loader extends Component {
    
    render() {
        const { loading } = this.props;
        return(
            <div className='loader-container'>
                {loading && (
                <div className='loader-content'>
                    <div className="loader"></div>    
                </div>)}
            </div>
        ) 
            
        
    }
}

export default Loader;