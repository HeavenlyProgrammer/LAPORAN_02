function hide() {
    var jawaban = document.querySelector('.jawaban');
    
    if(jawaban.style.display === 'none') {
       
        jawaban.style.display = 'block';
    } else {
        
        var konfirmasi = confirm("Apakah Anda yakin ingin menyembunyikan jawaban?");
        
        if(konfirmasi) {
        
            jawaban.style.display = 'none';
        }
        
    }
}

function toggleMode() {
    var body = document.body;
    var toggle = document.getElementById('modeToggle')

    if(toggle.checked) {
        body.classList.add('messy')
    } else {
        body.classList.remove('messy')
    }
}