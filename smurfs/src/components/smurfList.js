import React from 'react';
import { connect } from 'react-redux';
import { fetchSmurfs } from '../actions';
import "./smurfList.css"

class Smurfs extends React.Component {
    
    componentDidMount() {
        this.props.fetchSmurfs();
    }

    render() {
        return (
            <div>
                {this.props.smurfs.map(smurf =>
                    <div  className="smurfs"key={smurf.id}>
                        <h1>{smurf.name}</h1>
                        <h3>{smurf.age}</h3>
                        <h3>{smurf.height}</h3>
                        
                    </div>
                )}
            </div>
        );
    }
}


const mapStateToProps = state => ({
    smurfs: state.smurfs
  }); 

export default connect(mapStateToProps, { fetchSmurfs })(Smurfs);

