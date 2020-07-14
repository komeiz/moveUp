(function(){
  let listItems = document.querySelectorAll('.list');
  let listItemArr = Array.from(listItems);

  //console.log(listItemArr);
  let listParent = document.querySelector('.list-parent');

  listParent.addEventListener('click',event =>{
    const index = listItemArr.indexOf(event.target);

    if(event.target.classList.contains('list')){
    let removedItem = listItemArr.splice(index,1)
    let item = removedItem[0];

    listItemArr.unshift(item);

  listParent.prepend(event.target);


   listItemArr[0].classList.toggle('focus');


   listItemArr.map((el,index) =>
   {
    if(listItemArr.indexOf(el) !== 0){
      listItemArr[index].classList.remove('focus')
    }
  });

  };
  });

})
();
