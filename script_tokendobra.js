window.addEventListener("DOMContentLoaded", function () {
    document.querySelector(".open-menu").addEventListener("click", function () {
        document.querySelector(".mobil-menu").classList.toggle("hidden");
    });

    document.body.addEventListener("click", function (e) {
        if (!e.target.closest(".open-menu")) {
            document.querySelector(".mobil-menu").classList.add("hidden");
        }
    });
    document.querySelector(".button-header").addEventListener("click", function(event){
        event.preventDefault();
        document.querySelector(".modal-overlay").classList.remove("hidden");
    
        setTimeout(function(){
            document.querySelector(".modal-content").classList.add("ready");
        });
    
    
    });
    
    document.querySelector(".close-menu-modal-btn").addEventListener("click", function(event){
        document.querySelector(".modal-content").classList.remove("ready");
        setTimeout(function(){
            document.querySelector(".modal-overlay").classList.add("hidden");
        }, 200);
        
        
    });
    document.querySelector(".button-header-raccoon").addEventListener("click", function(event){
        event.preventDefault();
        document.querySelector(".modal-overlay").classList.remove("hidden");
    
        setTimeout(function(){
            document.querySelector(".modal-content").classList.add("ready");
        });
    
    
    });
    
    document.querySelector(".close-menu-modal-btn").addEventListener("click", function(event){
        document.querySelector(".modal-content").classList.remove("ready");
        setTimeout(function(){
            document.querySelector(".modal-overlay").classList.add("hidden");
        }, 200);
        
        
    });
    document.querySelector(".button-header-mobil").addEventListener("click", function(event){
        event.preventDefault();
        document.querySelector(".modal-overlay").classList.remove("hidden");
    
        setTimeout(function(){
            document.querySelector(".modal-content").classList.add("ready");
        });
    
    
    });
    
    document.querySelector(".close-menu-modal-btn").addEventListener("click", function(event){
        document.querySelector(".modal-content").classList.remove("ready");
        setTimeout(function(){
            document.querySelector(".modal-overlay").classList.add("hidden");
        }, 200);
        
        
    });
    
    
});

