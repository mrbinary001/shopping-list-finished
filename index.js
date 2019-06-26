function main(){
    
    function updateCheckBtn(){
        $(".shopping-item").each(function(index, element){
            if($(element).hasClass("shopping-item__checked")){
                   $(this).siblings(".shopping-item-controls").find(".button-label")[0].innerHTML = "uncheck";
            }
        });
    }

    function addListItem(evt){
        
        evt.preventDefault();
    
        let newItem = $(this).find("#shopping-list-entry").val();
        
        if(newItem){
            $(".shopping-list").prepend(`<li><span class="shopping-item">${newItem}</span><div class="shopping-item-controls"><button class="shopping-item-toggle"><span class="button-label">check</span></button><button class="shopping-item-delete"><span class="button-label">delete</span></button></div>
        </li>`);

        $(this).find("#shopping-list-entry").val("");
        }
    }
    
    function toggleListItemCheck(evt){
        evt.preventDefault();
        $(this).closest("li").find(".shopping-item").toggleClass("shopping-item__checked");

        let btnText = $(this).find(".button-label");
      

        if (btnText.text() === "check") {
            btnText.text("uncheck");
        } else {
            btnText.text("check");
        }
    }
    
    function removeListItem(evt){
        evt.preventDefault();
        $(this).closest("li").remove();
    }

    $(".shopping-list").on("click",".shopping-item-delete", removeListItem);
    
    $(".shopping-list").on("click", ".shopping-item-toggle", toggleListItemCheck);

    $("#js-shopping-list-form").on("submit",addListItem);




    updateCheckBtn();
}

$(main);
