import React from 'react'
import "./form.css"


class Form extends React.Component {
    constructor() {
        super()
        this.state={}
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(event) {
        event.preventDefault()


    }

    render() {
        return (
        <div className="form"  onSubmit={this.handleSubmit}>
            <h3>Income Prediction Form</h3> 
            <div> 
                <form action="/result" method="POST"> 
                <label for="age">Age</label> 
                <input type="text" id="age" name="age" />
                <br /> 
                <label for="w_class">Working Class</label> 
                <select id="w_class" name="w_class"> 
                    <option value="0">Federal-gov</option> 
                    <option value="1">Local-gov</option> 
                    <option value="2">Never-worked</option> 
                    <option value="3">Private</option> 
                    <option value="4">Self-emp-inc</option> 
                    <option value="5">Self-emp-not-inc</option> 
                    <option value="6">State-gov</option> 
                    <option value="7">Without-pay</option> 
                </select> 
                <br /> 
                <label for="edu">Education</label> 
                <select id="edu" name="edu"> 
                    <option value="0">10th</option> 
                    <option value="1">11th</option> 
                    <option value="2">12th</option> 
                    <option value="3">1st-4th</option> 
                    <option value="4">5th-6th</option> 
                    <option value="5">7th-8th</option> 
                    <option value="6">9th</option> 
                    <option value="7">Assoc-acdm</option> 
                    <option value="8">Assoc-voc</option> 
                    <option value="9">Bachelors</option> 
                    <option value="10">Doctorate</option> 
                    <option value="11">HS-grad</option> 
                    <option value="12">Masters</option> 
                    <option value="13">Preschool</option> 
                    <option value="14">Prof-school</option> 
                    <option value="15">16 - Some-college</option> 
                </select> 
                <br /> 
                <label for="martial_stat">Marital Status</label> 
                <select id="martial_stat" name="martial_stat"> 
                    <option value="0">divorced</option> 
                    <option value="1">married</option> 
                    <option value="2">not married</option> 
                </select> 
                <br /> 
                <label for="occup">Occupation</label> 
                <select id="occup" name="occup"> 
                    <option value="0">Adm-clerical</option> 
                    <option value="1">Armed-Forces</option> 
                    <option value="2">Craft-repair</option> 
                    <option value="3">Exec-managerial</option> 
                    <option value="4">Farming-fishing</option> 
                    <option value="5">Handlers-cleaners</option> 
                    <option value="6">Machine-op-inspct</option> 
                    <option value="7">Other-service</option> 
                    <option value="8">Priv-house-serv</option> 
                    <option value="9">Prof-specialty</option> 
                    <option value="10">Protective-serv</option> 
                    <option value="11">Sales</option> 
                    <option value="12">Tech-support</option> 
                    <option value="13">Transport-moving</option> 
                </select> 
                <br /> 
                <label for="relation">Relationship</label> 
                <select id="relation" name="relation"> 
                    <option value="0">Husband</option> 
                    <option value="1">Not-in-family</option> 
                    <option value="2">Other-relative</option> 
                    <option value="3">Own-child</option> 
                    <option value="4">Unmarried</option> 
                    <option value="5">Wife</option> 
                </select> 
                <br /> 
                <label for="race">Race</label> 
                <select id="race" name="race"> 
                    <option value="0">Amer Indian Eskimo</option> 
                    <option value="1">Asian Pac Islander</option> 
                    <option value="2">Black</option> 
                    <option value="3">Other</option> 
                    <option value="4">White</option> 
                </select> 
                <br /> 
                <label for="gender">Gender</label> 
                <select id="gender" name="gender"> 
                    <option value="0">Female</option> 
                    <option value="1">Male</option> 
                </select> 
                <br /> 
                <label for="c_gain">Capital Gain </label> 
                <input type="text" id="c_gain" name="c_gain" />btw:[0-99999] 
                <br /> 
                <label for="c_loss">Capital Loss </label> 
                <input type="text" id="c_loss" name="c_loss" />btw:[0-4356] 
                <br /> 
                <label for="hours_per_week">Hours per Week </label> 
                <input type="text" id="hours_per_week" name="hours_per_week" />btw:[1-99] 
                <br/> 
                <label for="native-country">Native Country</label> 
                <select id="native-country" name="native-country"> 
                    <option value="0">Cambodia</option> 
                    <option value="1">Canada</option> 
                    <option value="2">China</option> 
                    <option value="3">Columbia</option> 
                    <option value="4">Cuba</option> 
                    <option value="5">Dominican Republic</option> 
                    <option value="6">Ecuador</option> 
                    <option value="7">El Salvadorr</option> 
                    <option value="8">England</option> 
                    <option value="9">France</option> 
                    <option value="10">Germany</option> 
                    <option value="11">Greece</option> 
                    <option value="12">Guatemala</option> 
                    <option value="13">Haiti</option> 
                    <option value="14">Netherlands</option> 
                    <option value="15">Honduras</option> 
                    <option value="16">HongKong</option> 
                    <option value="17">Hungary</option> 
                    <option value="18">India</option> 
                    <option value="19">Iran</option> 
                    <option value="20">Ireland</option> 
                    <option value="21">Italy</option> 
                    <option value="22">Jamaica</option> 
                    <option value="23">Japan</option> 
                    <option value="24">Laos</option> 
                    <option value="25">Mexico</option> 
                    <option value="26">Nicaragua</option> 
                    <option value="27">Outlying-US(Guam-USVI-etc)</option> 
                    <option value="28">Peru</option> 
                    <option value="29">Philippines</option> 
                    <option value="30">Poland</option> 
                    <option value="11">Portugal</option> 
                    <option value="32">Puerto-Rico</option> 
                    <option value="33">Scotland</option> 
                    <option value="34">South</option> 
                    <option value="35">Taiwan</option> 
                    <option value="36">Thailand</option> 
                    <option value="37">Trinadad&Tobago</option> 
                    <option value="38">United States</option> 
                    <option value="39">Vietnam</option> 
                    <option value="40">Yugoslavia</option> 
                </select> 
                <br /> 
                <br /> 
                <input type="submit" value="Submit" /> 
                </form> 
            </div>
        </div>
         ) 
    }  
  
}
export default Form