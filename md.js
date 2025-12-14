document.addEventListener('DOMContentLoaded', () => {
 
    const markdownInput = document.getElementById('markdown-input');
    const htmlOutput = document.getElementById('html-output');
    const preview = document.getElementById('preview');

    
    
    function convertMarkdown(markdownText) {
        let htmlText = markdownText;


        htmlText = htmlText.replace(/^>\s*(.*)$/gm, '<blockquote>$1</blockquote>');

      
        htmlText = htmlText.replace(/^###\s*(.*)$/gm, '<h3>$1</h3>');
        htmlText = htmlText.replace(/^##\s*(.*)$/gm, '<h2>$1</h2>');
        htmlText = htmlText.replace(/^#\s*(.*)$/gm, '<h1>$1</h1>');
        
       

       
        htmlText = htmlText.replace(/!\[([^\]]+)\]\(([^)]+)\)/g, '<img alt="$1" src="$2">');

       
        htmlText = htmlText.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>');

      
        htmlText = htmlText.replace(/(\*\*|__)(.+?)\1/g, '<strong>$2</strong>');
        
        
        htmlText = htmlText.replace(/(\*|_)(.+?)\1/g, '<em>$2</em>');


        return htmlText;
    }

   
    function updatedOutPut() {
        const markdown = markdownInput.value;
        const convertedHTML = convertMarkdown(markdown);


        preview.innerHTML = convertedHTML;

     
        htmlOutput.textContent = convertedHTML;
    }

   
    markdownInput.addEventListener('input', updatedOutPut);

    updatedOutPut(); 
});