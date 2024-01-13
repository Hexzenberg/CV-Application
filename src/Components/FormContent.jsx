import React, { useState } from 'react';
import ButtonWorking from "./ButtonWorking";

const FormContent = () => {
    const [generalInfo, setGeneralInfo] = useState({
        name: '',
        dateOfBirth: '',
        gender: '',
    });

    const [educationExperience, setEducationExperience] = useState({
        schoolName: '',
        yearOfPassing: '',
    });

    const [workExperience, setWorkExperience] = useState({
        companyName: '',
        dateOfJoining: '',
    });

    return (
        <>
            <p>General Information</p>
            <div id="first-div" className='a-input'>
                <p>Name </p>
                <input type="text" required id="name" onChange={(e) => setGeneralInfo({ ...generalInfo, name: e.target.value })} />
                <p>Date of Birth</p>
                <input type="text" required id="dob" onChange={(e) => setGeneralInfo({ ...generalInfo, dateOfBirth: e.target.value })} />
                <p>Gender</p>
                <input type="text" required id="gender" onChange={(e) => setGeneralInfo({ ...generalInfo, gender: e.target.value })} />
            </div>
            <p>Educational Experience</p>
            <div id="second-div" className='a-input'>
                <p>Name of the School</p>
                <input type="text" required id="sname" onChange={(e) => setEducationExperience({ ...educationExperience, schoolName: e.target.value })} />
                <p>Year of Passing</p>
                <input type="text" required id="yop" onChange={(e) => setEducationExperience({ ...educationExperience, yearOfPassing: e.target.value })} />
            </div>
            <p>Work Experience</p>
            <div id="third-div" className='a-input'>
                <p>Name of the Company</p>
                <input type="text" required id="cname" onChange={(e) => setWorkExperience({ ...workExperience, companyName: e.target.value })} />
                <p>Date of Joining</p>
                <input type="text" required id="doj" onChange={(e) => setWorkExperience({ ...workExperience, dateOfJoining: e.target.value })} />
            </div>
            <ButtonWorking formData={{ generalInfo, educationExperience, workExperience }} />
        </>
    );
};

export default FormContent;
