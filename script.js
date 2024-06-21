function toggleMenu(){
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

function openPDF() {
    // Replace 'yourfile.pdf' with the path to your PDF file
    window.open('/assets/resume-example.pdf', '_blank');
}