var i = 0, text;
text = 'Informatics Engineering Student';

function ngetik(){
  if (i <text.length) {
    document.getElementById('efek').innerHTML += text.charAt(i);
    i++;
    setTimeout(ngetik, 50)
  }
}
ngetik();

const btn = document.getElementById('button');
document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Sending...';

   const serviceID = 'default_service';
   const templateID = 'template_moy4baf';
   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Send Email';
      alert('Pesan Sudah Terkirim Ke Email Terimakasih!');
    }, (err) => {
      btn.value = 'Send Email';
      alert(JSON.stringify(err));
    });
});
