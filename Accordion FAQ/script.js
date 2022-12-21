const headings=document.querySelectorAll('.heading')

headings.forEach((panel) =>{
    panel.addEventListener('click', () => {
        removeAll()
        panel.classList.add('active')
    })
})

function removeAll(){
    headings.forEach((panel)=>{
        panel.classList.remove('active')
    })
}


//کدهای فعال شدن پنل بدون بسته شدن پنل های اکتیو دیگه
// const headings = document.querySelectorAll('.heading')

// headings.forEach((panel) => {
//     panel.addEventListener('click', () =>{
//         panel.classList.toggle('active')
//     })
// })
