const sign_up = document.getElementById("signUp");
const send_otp = document.getElementById("otp");

function generateOTP() {
    return Math.floor(100000 + Math.random() * 900000); // Mã OTP 6 chữ số
}
const otp_code = generateOTP();

send_otp.addEventListener('click', function(e)
{
    alert("The OTP will be sent to your email.")
    e.preventDefault();    
    const to_Email = 'dangkhoa123.2004@gmail.com'
    emailjs.send("service_r39cr7m","template_p8ez63k",{
        message: otp_code.toString(),
        to_Email: to_Email,
    });
});

sign_up.addEventListener('submit', function (e) {
    e.preventDefault();
    // Get Name of User
    const firstName = document.getElementById("FirstName").value;
    const lastName = document.getElementById("LastName").value;
    // File Image Handling
    const image = document.getElementById("imageInput");
    const file = image.files[0];
    const fileType = file.type.split('/')[1];
    // OTP Code
    const code = document.getElementById("CodeOTP").value;
    // Bucket to storge Image and API of Bucket
    const bucket_name = 'registrate-storage'
    const api_url = `https://xl0lcefokd.execute-api.ap-southeast-2.amazonaws.com/my_stage/${bucket_name}/${firstName}_${lastName}.${fileType}`;
    if (code == otp_code)
    {
        fetch(api_url, {
            method: 'PUT',
            body: file,
        }).then(response => {
            alert("File uploaded successfully!");
        }).catch(error => {
            alert("Error uploading file:", error);
        });
    }
    else
    {
        alert("Error Code!!!!!");
    }
});