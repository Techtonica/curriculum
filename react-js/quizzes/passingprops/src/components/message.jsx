function Message({email}) {
  
    return (
      <div>
        {!email ? null : <p> Thank you for submiting your email: {email} </p>}
      </div>
    );
  }
  
  export default Message;