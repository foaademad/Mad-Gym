
        
document.getElementById('login-form').addEventListener('submit', function(event) {
event.preventDefault(); // منع الإرسال الافتراضي للنموذج

const age = document.getElementById('age').value;

if (age >= 8 && age <= 12) {
window.location.href = './main.html';
} else if (age >= 13 && age <= 100) {
window.location.href = './main.html';
} else {
alert('Age not in the specified range. Please enter a valid age.');
}
});

        
