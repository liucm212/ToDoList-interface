/*
build function of each task block
1. when click editIcon, show the edit block of that task block
2. when click the cancel button of that task block, hide the edit block.
3. when click the save button of that task block, render the task block with update data.
4. when click the title of the task block, show the comment of that task.
5. when click the starIcon of taht task block, change the color of starIcon
6. when click the checkBox, change block bgc, d-none the starIcon & editIcon and line-through the blockTitle
*/


// // get the tasksSection to control all the taskBlock
// const tasksSection = document.querySelector('#tasksSection')

// // get editIcon
// const editIcon = block.querySelector('.editIcon')
    
// // get starIcon
// const starIcon = block.querySelector('.starIcon')

// // get block title of that task block
// const blockTitle = block.querySelector('.block-title')

// // get the comment block of the task
// const commentBlock = block.querySelector('.block-body--primary')

// // get the check input
// const checkBox = block.querySelector('.block-check')

// // get  .block-body--secondary of that block
// const  taskEditBlock = block.querySelector('.block-body--secondary')

// // get the cancel button
// const taskCancelButton = block.querySelector('.footer-button--cancel')

// // get the save button
// const taskSaveButton = block.querySelector('.footer-button--save')

document.addEventListener('DOMContentLoaded', function(){
  // use ul.tasksSection to listen the event of li elements
  tasksSection.addEventListener('click', function(e){
    const target = e.target
    console.log('目前target : ',target.className)

    // find the outside block of the target
    let node = target;
    while (node && !(node.classList.contains('taskBlock'))) {
        node = node.parentNode;
    }
    // asign taskBlock to node
    const taskBlock = node

    //1. when the editIcon is clicked, toggle d-none the edit block of that block
    if(target.classList.contains('editIcon')){
      // get editIcon 
      const editIcon = target
      // get taskEditBlock
      const taskEditBlock = taskBlock.querySelector('.block-body--secondary')

      // show the edit block of that task block
      taskEditBlock.classList.toggle('d-none')

      // change the color of editIcon
      editIcon.classList.toggle('text-helper-300')
      editIcon.classList.toggle('text-primary')
    }
    //2. when cancel button or it's text is clicked , hide the edit block of taht task block
    else if(target.classList.contains('footer-button--cancel') || target.classList.contains('footer-button-text--cancel')){
      // get editIcon
      const editIcon = taskBlock.querySelector('.editIcon')
      // get taskEditBlock
      const taskEditBlock = taskBlock.querySelector('.block-body--secondary')

      taskEditBlock.classList.add('d-none')
      editIcon.classList.toggle('text-helper-300')
      editIcon.classList.toggle('text-primary')
    }
    //3. when save button or it's text is clicked , hide the edit block of taht task block
    else if(target.classList.contains('footer-button--save') || target.classList.contains('footer-button-text--save')){
      // get editIcon
      const editIcon = taskBlock.querySelector('.editIcon')
      // get taskEditBlock
      const taskEditBlock = taskBlock.querySelector('.block-body--secondary')

      //! 資訊更新（尚未做）

      // hide taskEditBlock and toggle bgc of editIcon
      taskEditBlock.classList.add('d-none')
      editIcon.classList.toggle('text-helper-300')
      editIcon.classList.toggle('text-primary')
    }
    //4. when blockTitle is clicked, toggle d-none the comment block
    else if(target.classList.contains('block-title')){
      // get commentBlock
      const commentBlock = taskBlock.querySelector('.block-body--primary')

      // toggle d-none of commentBlock
      commentBlock.classList.toggle('d-none')
    }
    //5. when click the starIcon of taht task block, 
    else if(target.classList.contains('starIcon')){
      // get starIcon
      const starIcon = taskBlock.querySelector('.starIcon')

      // change the color of starIcon
      starIcon.classList.toggle('text-helper-300')
      starIcon.classList.toggle('text-fourth')
    }
    //6. when checkBox is clicked, toggle the input
    else if(target.classList.contains('block-check')){
      // get block-title
      const blockTitle = taskBlock.querySelector('.block-title')
      // editIcon
      const editIcon = taskBlock.querySelector('.editIcon')
      // starIcon
      const starIcon = taskBlock.querySelector('.starIcon')

      // toggle line-through property
      blockTitle.classList.toggle('line-through')
      // change bgc of that block
      taskBlock.classList.toggle('bg-helper-300')
      editIcon.classList.toggle('d-none')
      starIcon.classList.toggle('d-none')
    }
  })
})


// event delegation example:
// let list = document.querySelector('.list');
// list.addEventListener('click', function(e) {
//     if(e.target.classList.contains('item')) {
//         console.log('Item clicked!');
//     }
// });