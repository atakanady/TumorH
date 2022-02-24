function saveDocument(){
    const element = document.getElementById('invoice');

    html2pdf().from(element).save();
}