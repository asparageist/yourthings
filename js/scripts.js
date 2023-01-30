window.onload = function() {
  document.querySelector("form").onsubmit = function(event) {
    event.preventDefault();

    const thing1 = document.querySelector("input#thing1").value;
    const thing2 = document.querySelector("input#thing2").value;
    const thing3 = document.querySelector("input#thing3").value;
    const thing4 = document.querySelector("input#thing4").value;
    const thing5 = document.querySelector("input#thing5").value;
    const allThings = [thing1, thing2, thing3, thing4, thing5];
    const iLike1 = allThings[1];
    const iLike0 = allThings[0];
    const iLike2 = allThings[2];
    const iLikeThese = [];
    iLikeThese.push(iLike1);
    iLikeThese.push(iLike0);
    iLikeThese.push(iLike2);
//==============================================================================convollusions!
    const display = document.createElement("ul");
    const where = document.querySelector("body");
    where.append(display);
    const likeList1 = document.createElement("li");
    likeList1.append(iLike1);
    const likeList2 = document.createElement("li");
    likeList2.append(iLike0);
    const likeList3 = document.createElement("li");
    likeList3.append(iLike2);
    display.append(likeList1, likeList2, likeList3);
  }  
}