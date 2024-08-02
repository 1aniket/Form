

const Validator = (info)=>{


    const {firstName , lastName , location,email,teamSize,message}=info;

    if(firstName==="")
    {
        alert("First Name Cannot Be Empty");
        return false;
    }
    if(lastName==="")
    {
        alert("Last Name Cannot Be Empty");
        return false;
    }
    if(email==="")
    {
        alert("Email is must");
        return false;
    }

return true;
}

export default Validator;