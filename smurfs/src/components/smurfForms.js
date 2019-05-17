import React from 'react';
import "./smurfList.css"
import { addSmurf } from '../actions';
import { connect } from 'react-redux';


class SmurfForm extends React.Component {
   constructor(props) {
       super(props);
       this.state = {
         name: '',
         age: '',
         height: ''

       };
     }

     addSmurf = e => {
       e.preventDefault();
       const newSmurf = {
         name: this.state.name,
         age: this.state.age,
         height: this.state.height
       }

       this.props.addSmurf(newSmurf);

       this.setState({
         name: '',
         age: '',
         height: ''
       })
     }

     handleInputChange = e => {
       this.setState({ [e.target.name]: e.target.value });
     };

     render() {
       return (

       <div  className = "form">
           <form  className onSubmit={this.addSmurf}>
           <div className = "friendform">
           <input
           className='inputtype'
               onChange={this.handleInputChange}
               placeholder="name"
               value={this.state.name}
               name="name"
               type='text'
             />
           </div>
             <div>
             <input
             className='inputtype'
               onChange={this.handleInputChange}
               placeholder="age"
               value={this.state.age}
               name="age"
               type='number'
             />
             </div>
             <div>
             <input
               className='inputtype'
               onChange={this.handleInputChange}
               placeholder="height"
               value={this.state.height}
               name="height"
               type='number'
             />
             </div>

             <button className='button' type="submit">Add Friend</button>
           </form>
       </div> 
       );
   };
}

const mapStateToProps = state => {
   return {
       addingSmurf: state.addingSmurf,
       error: state.error
   }
}

export default connect(mapStateToProps, {addSmurf})(SmurfForm);























































