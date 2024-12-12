const sign_up = document.getElementById("signUp");
sign_up.addEventListener('submit', function (e) {
    e.preventDefault()

    const user = document.getElementById("User").value;
    const image = document.getElementById("imageInput")
    const file = image.files[0]
    const fileType = file.type.split('/')[1];

    const bucket_name = 'registrate-storage'
    const api_url = `https://xl0lcefokd.execute-api.ap-southeast-2.amazonaws.com/my_stage/${bucket_name}/${user}.${fileType}`;

    fetch(api_url, {
        method: 'PUT',
        body: file,
    })

    console.log("Successfully!!!");
});