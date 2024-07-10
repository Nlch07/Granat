function showContent(num) {
    const contents = document.querySelectorAll('.content');
    contents.forEach(content => {
        content.style.display = 'none';
    });
    
    const selectedContent = document.getElementById('content' + num);
    selectedContent.style.display = 'block';
    
    window.scrollTo(0, 0);
}
