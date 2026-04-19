export const checkValidData = (email,password)=>{
    const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
    const isPassValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W]).{8,16}$/.test(password);
    if(!isEmailValid){
        return "Email is not valid"
    }
    if(!isPassValid){
        return "Password is not valid"
    }
    return null;

}