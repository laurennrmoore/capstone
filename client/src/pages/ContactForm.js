import React, {useState} from 'react'
import '../contact.css';

import sky from "../img/contact-img/sky.jpg";


export default class Contact extends React.Component {

  

//   constructor(props) {
//       super(props);
//       this.state = {
//         name: '',
//         email: '',
//         subject:'',
//         message: ''
//       }
//   }

//   onNameChange(event) {
//     this.setState({name: event.target.value})
// }

// onEmailChange(event) {
//     this.setState({email: event.target.value})
// }

// onSubjectChange(event) {
//     this.setState({subject: event.target.value})
// }

// onMsgChange(event) {
//     this.setState({message: event.target.value})
// };

// submitEmail(e){
//   e.preventDefault();
//   axios({
//     method: "POST", 
//     url:"/send", 
//     data:  this.state
//   }).then((response)=>{
//     if (response.data.status === 'success'){
//         alert("Message Sent."); 
//         this.resetForm()
//     }else if(response.data.status === 'fail'){
//         alert("Message failed to send.")
//     }
//   })
// };

// resetForm(){
//   this.setState({name: '', email: '',subject:'', message: ''})
// };



// //verify connection configuration
// transporter.verify (function (error, success) {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log("Server is ready to take our messages");
//   };
// });



//   transporter.sendMail(mail, (err, data) => {
//     if (err) {
//       res.json({
//         status: 'fail'
//       })
//     } else {
//       res.json({
//        status: 'success'
//       })
//     }
//   });

render() {
  return (
      <div className="section">
          <div className="container">
          <img className="bg-contact-img" alt='' src= { sky } />
              <div className="row">
                  <div className="col-md-12">
                      <div className="section-title">

                <div className="bg-container">
               <h1 id="sky-title">Sky isn't limit<br /> to reach us</h1>
                  </div>
                    <div className="contact-container" id="contact-container">
                   
                          <h2 className="title">Shout us here!</h2>
                          <p className="text">Let us know what you think! In order to provide better service,<br />
                               please do not hesitate to give us your feedback. Thank you.</p><hr/>
                          <form id="contact-form" 
                        //   onSubmit={this.submitEmail.bind(this)} 
                              method="POST">
                          <div className="form-group">
                          <div className="row">
                          <div className="col-md-6">
                              <input placeholder = "Name"  id="name" type="text" 
                                //  className="form-control" required value={this.state.name} 
                                //  onChange={this.onNameChange.bind(this)}
                                />
                          </div>
                          
                          <div className="col-md-6">
                              <input placeholder = "Email"  id="email" type="email"
                                className="form-control" aria-describedby="emailHelp"
                                // required value={this.state.email} onChange=
                                // {this.onEmailChange.bind(this)}
                                />
                          </div>
                          </div>
                          </div>
                          <div className="form-group-subject">
                              <input placeholder = "Subject"  id="subject" type="text" 
                                // className="form-control" required value={this.state.subject}
                                />
                          </div>
                          <div className="form-group-message">
                              <textarea placeholder = "Message"  id="message" 
                                //  className="form-control" rows="1" 
                                //  required value={this.state.message}
                                //  onChange= {this.onMsgChange.bind(this)} 
                                />
                          </div>
                          <button className="btn-submit" type="submit" >Send now</button>
                          <p className="text">1819 Reading road, Cincinnati, Ohio 45255</p>
                          </form>
                          </div>
                          </div>
                      </div>
                  </div>

              </div>

          </div>
     
  );
}
}

