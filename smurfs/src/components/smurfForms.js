import React from 'react';
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

       <div className="smurfForm">
         <div className='header-text'>
             <h1>Join the Smurf Family</h1>
         </div>
           <form onSubmit={this.addSmurf}>
           <div>
           <input
           className='name'
               onChange={this.handleInputChange}
               placeholder="name"
               value={this.state.name}
               name="name"
               type='text'
             />
           </div>
             <div>
             <input
             className='age'
               onChange={this.handleInputChange}
               placeholder="age"
               value={this.state.age}
               name="age"
               type='number'
             />
             </div>
             <div>
             <input
               className='height'
               onChange={this.handleInputChange}
               placeholder="height"
               value={this.state.height}
               name="height"
               type='number'
             />
             </div>

             <button className='button' type="submit">Add to the village</button>
           </form>
       </div> // smurfForm end here //
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























































// import  React from "reducer"

// import {addSmurf} from "../action";
// import {connect } from "react-redux"



// class SmurfForm extends React.Component{
//     construction (props){
//         super(props);
//         this.state = {
//             name:"",
//             age:"",
//             height:""
//         }
//     }

//     addSmurf = e => {
//         e.preventDefault();
//         const newSmurf = {
//             name:this.state.name,
//             age:thi.state.age,
//             height:this.state.height
//         }
//     }

//     this.props.addSmurf(newSmurf);

//     this.setState({
//         name:"",
//         age:"",
//         height:""
//     })
// }


// handleInputChange = e => {
//     this.setState({
//         [e.target.name] : e.target.value
//     })

//     render(){
//         return(
//             <div>
//                 <form onSubmit = {this.addSmurf}>
//                 <input
//                 onChange= {this.handleInputChange}
//                 placeHolder="name"
//                 value={this.state.name}
//                 name="name"
//                 type="text"
//                 />

// <input
//                 onChange= {this.handleInputChange}
//                 placeHolder="age"
//                 value={this.state.age}
//                 name="age"
//                 type="number"
//                 />

// <input
//                 onChange= {this.handleInputChange}
//                 placeHolder="height"
//                 value={this.state.height}
//                 name="height"
//                 type="text"
//                 />

//                 <button tpe="submit">Add Friends</button>
//                 </form>
//             </div>

//         )
//     }
// }



// const mapStateToProps = state => {
//     return {
//         addingSmurf: state.addingSmurf,
//         error:state.error
//     }
// }


// export default connect (mapStateToProps, {addSmurf}) (SmurfForm);