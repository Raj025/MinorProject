import React, { useState , useEffect} from 'react'
import "./Profile_style.css";
import { Link } from "react-router-dom";

export default function Profile() {

    

    const [name,setName]=useState('Loading..');
    const [email,setEmail]=useState('Loading..');
    const [password,setPassword]=useState('Loading..');
    const [gender,setGender]=useState('Loading..');
    const [bio,setBio]=useState('Loading..');
    const [year,setYear]=useState('Loading..');
    const [signupas,setSignupas]=useState('Loading..');
    const [pic,setPic]=useState('Loading..');
    const [tag,setTag]=useState('Loading..');
    const [__v,set__V]=useState('Loading..');
    const [id,setId]=useState('Loading..');
    const [mobile,setMobile]=useState('Loading..');
    
    useEffect(() => {
        console.log('use effect ran');
        
        fetch('http://localhost:3002/register_get_email/abc@xyz.com')
          .then(res => {
            return res.json();
          })
          .then(data => {
            setName(data.user[0].name);
            setEmail(data.user[0].email);
            setGender(data.user[0].gender);
            setId(data.user[0].id);
            setMobile(data.user[0].mobno);
            setPassword(data.user[0].password);
            setPic("http://localhost:3002/"+data.user[0].pic);
            setTag(data.user[0].tag);
            setYear(data.user[0].year);
            set__V(data.user[0].__v);
            setBio(data.user[0].bio);
            setSignupas(data.user[0].signupas);
            console.log(data);
            
            
          })
      }, [])

      


    



    return (
        <div>
            <div className="container emp-profile">
            <form method="post">
                <div className="row">
                    <div className="col-md-4">
                        <div className="profile-img">
                        {/* "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS52y5aInsxSm31CvHOFHWujqUx_wWTS9iM6s7BAm21oEN_RiGoog" */}
                            <img src={pic}  alt="error"/>
                            <div className="file btn btn-lg btn-primary">
                                Change Photo
                                <input type="file" name="file"/>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="profile-head">
                                    <h5>
                                        {name}
                                    </h5>
                                    <h6>
                                        Web Developer and Designer
                                    </h6>
                                    <p className="proile-rating">ROLE : <span>{signupas}</span></p>
                            <ul className="nav nav-tabs" id="myTab" role="tablist">
                                <li className="nav-item">
                                    <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">About</a>
                                </li>
                                {/* <li className="nav-item">
                                    <a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Bio</a>
                                </li> */}
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <Link to="/edit" className="profile-edit-btn" name="btnAddMore" value="Edit Profile">Edit Profile</Link>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        
                    </div>
                    <div className="col-md-8">
                        <div className="tab-content profile-tab" id="myTabContent">
                            <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>Name</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>{name}</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>Email Id</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>{email}</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>Password</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>{password}</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>Gender</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>{gender}</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>Mobile no.</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>{mobile}</p>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>Year</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>{year}</p>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>Post Count</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>{__v}</p>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>Tags</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>{tag}</p>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>Bio</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>{bio}</p>
                                            </div>
                                        </div>
                            </div>
                            <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>Experience</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>Expert</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>Hourly Rate</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>10$/hr</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>Total Projects</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>230</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>English Level</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>Expert</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>Availability</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>6 months</p>
                                            </div>
                                        </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <label>Your Bio</label><br/>
                                        <p>Your detail description</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>           
        </div>
        </div>
    )
}
