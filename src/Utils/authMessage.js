const Messages=(email,Url,firstName)=>{

const resetMessage ={
    to: email,
    from: 'E-Shop@gmail.com',
    subject: 'Barefoot Nomad Reset password Link',
    html: `<div style="font-family:Avenir,Helvetica,sans-serif;box-sizing:border-box;padding:35px;">
      <h1 style="color: #848484;">Barefoot Nomad</h1>
      <p style="font-family:Avenir,Helvetica,sans-serif;box-sizing:border-box;color:#74787e;font-size:16px;line-height:1.5em;margin-top:0;text-align:left">Welcome ${firstName},<br> We are happy to be with you. Please you can reset your password now.<br> Click the button below to reset your password.</p>
      <p><a style="background-color: #3097d1; border: 2px solid #3097d1; padding: 8px; color: #fff; font-size: 16px; text-decoration: none;cursor: pointer;" href="${Url}">Reset password</a>
      </a></p>
      <p style="color:#74787e;font-size:16px;line-height:1.5em;margin-top:0;text-align:left">Thank you for using our application!</p>
      <p style="color:#74787e;font-size:16px;line-height:1.5em;margin-top:0;">Regards,<br>Barefoot Nomad Caret Team</p>
      </div>`
  },

verifyMessage ={
    to:'sabin6341@gmail.com',
    from: 'E-Shop@gmail.com',
    subject: 'Account Verification',
    html: `<div style="font-family:Avenir,Helvetica,sans-serif;box-sizing:border-box;padding:35px;">
      <h1 style="color: #848484;">Barefoot Nomad</h1>
      <p style="font-family:Avenir,Helvetica,sans-serif;box-sizing:border-box;color:#74787e;font-size:16px;line-height:1.5em;margin-top:0;text-align:left">Welcome ${firstName},<br> We are happy to be with you. Please verify your mail .<br> Click the button below to verify your new account.</p>
      <p><a style="background-color: #3097d1; border: 2px solid #3097d1; padding: 8px; color: #fff; font-size: 16px; text-decoration: none;cursor: pointer;" href="${Url}">Verify Account</a>
      </a></p>
      <p style="color:#74787e;font-size:16px;line-height:1.5em;margin-top:0;text-align:left">Thank you for using our system!</p>
      <p style="color:#74787e;font-size:16px;line-height:1.5em;margin-top:0;">Regards,<br>E-Shopt Team</p>
      </div>`
  }
};
export default Messages;
