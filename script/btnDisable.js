let CompleteBtns = document.querySelectorAll(".complete-btn");
CompleteBtns.forEach((btn) => {
    btn.addEventListener("click", function(){

        this.disabled = true;
        this.innerText = "Disabled";
        
    });
});