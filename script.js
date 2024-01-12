document.getElementById('registerform').addEventListener('submit',function (event) {
    event.preventDefault();
    const firstname = document.getElementById('fname').value;
    const lastname = document.getElementById('lname').value;
    const age = document.getElementById('age').value;
    const email = document.getElementById('email').value;
    const gender = document.querySelector('input[name="radio"]:checked').value;
    const language = []
    const checkboxes = document.querySelectorAll('input[name = "checkbox"]:checked');
    checkboxes.forEach((checkbox) => {
      language.push(checkbox.value);
    });
    const userInfoDiv = document.getElementById('userInfo');
    userInfoDiv.innerHTML=`
    <h3>User Information:</h3>
    <p><strong>First Name:</strong> ${firstname}</p>
    <p><strong>Last Name:</strong> ${lastname}</p>
    <p><strong>Age:</strong> ${age}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Gender:</strong> ${gender}</p>
    <p><strong>Known Languages:</strong> ${language.join(',')}</p>
    
    `;
});