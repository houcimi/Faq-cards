const faqsEl = document.querySelectorAll('.faq')
faqsEl.forEach( (faq ,idx) => {
    faq.addEventListener('click' , () => {
        if(faq.classList.contains('active')){
            faq.classList.remove('active')
        }else {
            faq.classList.add('active')

        }
        
        
    })
})