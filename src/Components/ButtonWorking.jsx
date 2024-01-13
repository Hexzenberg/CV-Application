import React, { useState } from 'react';

const ButtonWorking = ({ formData }) => {
    const [isEditMode, setIsEditMode] = useState(true);

    const handleButtonClick = () => {
        const nameInput = document.getElementById('name');
        const dobInput = document.getElementById('dob');
        const genderInput = document.getElementById('gender');
        const schoolInput = document.getElementById('sname');
        const yopInput = document.getElementById('yop');
        const companyInput = document.getElementById('cname');
        const dojInput = document.getElementById('doj');
        if (isEditMode) {
            const allValuesPresent = Object.values(formData.generalInfo).every(value => value !== '' && value !== null && value !== undefined);

            if (allValuesPresent) {
                nameInput.readOnly = true;
                dobInput.readOnly = true;
                genderInput.readOnly = true;
                schoolInput.readOnly = true;
                yopInput.readOnly = true;
                companyInput.readOnly = true;
                dojInput.readOnly = true;

                setIsEditMode(false);
            } else {
                alert("Please fill in all the fields before submitting.");
            }
        } else {
            setIsEditMode(true);
            nameInput.readOnly = false;
            dobInput.readOnly = false;
            genderInput.readOnly = false;
            schoolInput.readOnly = false;
            yopInput.readOnly = false;
            companyInput.readOnly = false;
            dojInput.readOnly = false;
        }
    };

    return (
        <button id="work-button" onClick={handleButtonClick}>
            {isEditMode ? 'Submit' : 'Edit'}
        </button>
    );
};

export default ButtonWorking;