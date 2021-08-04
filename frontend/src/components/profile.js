import React, { useState } from 'react'
import { addProfile } from '../actions/profiles/profileaction'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css/dist/js/materialize.min.js'

const Profile = ({ addProfile , history }) => {


    const [firstname, setFirstName] = useState("");
    const [lastname, setLastName] = useState("");
    const [email, setemail] = useState("");
    const [phonenumber, setphonenumber] = useState("")
    const [location, setlocation] = useState("")
    const [file, setfile] = useState("");
    const [filename, setfilename] = useState('Choose File')

    const onChange = e => {
        setfile(e.target.files[0]);
        setfilename(e.target.files[0].name);


    };
    const onsubmit = async (e) => {

        e.preventDefault();


        if (firstname == '' || lastname == '' || email == '' || file == '') {
            M.toast({ html: `Please Fill in All Fields` })

        } else {

            const formData = new FormData();
            formData.append('file', file);
            formData.append('filename', filename);
            formData.append('firstname', firstname);
            formData.append('lastname', lastname);
            formData.append('email', email);
            formData.append('phonenumber', phonenumber);
            formData.append('location', location);


            addProfile(formData)
            alert('Are You Sure ?')
           

            M.toast({ html: 'Thank You For Your Responce' })
           
        }
       
    }
    



    return (
        <div className='container'>
                <h5 className='text-center'>Apply Now</h5>
            <form onSubmit={onsubmit}>

                <div className='container col-md-6'>
                    <div className='form-group'>

                        <input type='text' placeholder='First Name' className='form-control' onChange={(e) => {
                            setFirstName(e.target.value)
                        }} />

                    </div>


                    <div className='form-group'>

                        <input type='text' placeholder='Last Name' className='form-control' onChange={(e) => {
                            setLastName(e.target.value);
                        }} />


                    </div>


                    <div className='form-group'>

                        <input type='email' placeholder='Email Address' className='form-control'
                            onChange={(e) => {
                                setemail(e.target.value)
                            }} />

                    </div>


                    <div className='form-group'>

                        <input type='text' placeholder='Phone Number' className='form-control'
                            onChange={(e) => {
                                setphonenumber(e.target.value)
                            }} />

                    </div>


                    <div className='form-group'>

                        <input type='text' placeholder='Location' className='form-control'
                            onChange={(e) => {
                                setlocation(e.target.value)
                            }} />
                    </div>



                    <div className='form-group mb-3'>
                        <h6>Add Your Resume</h6>

                        <input type='file' alt='Resume' className='form-control' id="inputGroupFile02" onChange={onChange}></input>
                        <span>only .pdf .docs and .docx format is allowed</span>
                    </div>


                    <button type='submit' className='btn btn-primary btn-block'>submit</button>
                </div>
            </form>



        </div>
    )
}
Profile.propTypes = {
    addProfile: PropTypes.func.isRequired,
}
export default connect(null, { addProfile })(Profile)
