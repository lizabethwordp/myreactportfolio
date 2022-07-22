import { query } from 'express'
import React, { Component } from 'react'

export class Formcomponent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         email: ''
        //  query: '',
        //  inquirytime: ''
      }
    }
    onChangeEmail = (event) =>{
        //gives the data entered into the input box
        console.log(event.target.value)
        this.setState({
            email: event.target.value
           
        })
    }
    // onChangeQuery = (event) =>{
    //     //gives the data entered into the input box
    //     console.log(event.target.value)
    //     this.setState({
    //         query: event.target.value
           
    //     })
    // }
    // onChangeInquirytime = (event) =>{
    //     //gives the data entered into the input box
    //     console.log(event.target.value)
    //     this.setState({
    //         inquirytime: event.target.value
           
    //     })
    // }
    
    
  render() {
    return (
      <div>
       Enquiry Form
        <form>
            <div>
                <label>Email</label>
                <input type='email' value={this.state.email} onChange={this.onChangeEmail}>
                 
                </input>
            </div>
            {/* <div>
                <label>Query</label>
                <textarea value={this.state.query} onChange={this.onChangeQuery}></textarea>
            </div>
            <div>
                <label>Default Inquiry time</label>
                <select value={this.state.inquirytime} onChange={this.onChangeInquirytime}>
                    <option value='morning'>morning</option>
                    <option value='afternoon'>afternoon</option>
                    <option value='evening'>evening</option>

                </select>
            </div> */}
        </form>
      </div>
    )
  }
}

export default Formcomponent
