/*
build function of each task block
1. when click editIcon, show the edit block of that task block
2. when click the cancel button of that task block, hide the edit block.
3. when click the save button of that task block, render the task block with update data.
4. when click the title of the task block, show the comment of that task.
5. when click the starIcon of taht task block, change the color of starIcon
6. when click the checkBox, change block bgc, d-none the starIcon & editIcon and line-through the blockTitle
*/


// get the tasksSection to control all the taskBlock
const tasksSection = document.querySelector('#tasksSection')

// use tasksSection to get all taskBlock
let taskBlocks = tasksSection.querySelectorAll('.taskBlock')

document.addEventListener('DOMContentLoaded', function(){
  // use taskBlock to get all the inner elements I what and do the operation
  taskBlocks.forEach(function(block,){
    // get editIcon
    const editIcon = block.querySelector('.editIcon')
    
    // get starIcon
    const starIcon = block.querySelector('.starIcon')
    
    // get block title of that task block
    const blockTitle = block.querySelector('.block-title')

    // get the comment block of the task
    const commentBlock = block.querySelector('.block-body--primary')

    // get the check input
    const checkBox = block.querySelector('.block-check')

    // get  .block-body--secondary of that block
    const  taskEditBlock = block.querySelector('.block-body--secondary')

    // get the cancel button
    const taskCancelButton = block.querySelector('.footer-button--cancel')

    // get the text of cancel button
    // const cancelText = taskCancelButton.querySelector('span')

    // get the save button
    const taskSaveButton = block.querySelector('.footer-button--save')

    // get the text of cancel button
    // const saveText = taskCancelButton.querySelector('span')
    
    tasksSection.addEventListener('click', function(e){
      console.log(e.target)
      //1. when the editIcon is clicked, toggle d-none the edit block of that block
      if(e.target == editIcon){
        // show the edit block of that task block
        taskEditBlock.classList.toggle('d-none')

        // change the color of editIcon
        editIcon.classList.toggle('text-helper-300')
        editIcon.classList.toggle('text-primary')
      }
      //2. when cancel button or it's text is clicked , hide the edit block of taht task block
      //! 點到文字會沒有效果
      else if(e.target == taskCancelButton){
        taskEditBlock.classList.add('d-none')
        editIcon.classList.toggle('text-helper-300')
        editIcon.classList.toggle('text-primary')
      }
      //3. when save button or it's text is clicked , hide the edit block of taht task block
      //! 點到文字會沒有效果
      else if(e.target == taskSaveButton){
        // render update data of that block.

        // hide the edit block
        taskEditBlock.classList.add('d-none')
        editIcon.classList.toggle('text-helper-300')
        editIcon.classList.toggle('text-primary')
      }
      //4. when blockTitle is clicked, toggle d-none the comment block
      else if(e.target == blockTitle){
        commentBlock.classList.toggle('d-none')
      }
      //5. when click the starIcon of taht task block, 
      else if(e.target == starIcon){
        // change the color of starIcon
        starIcon.classList.toggle('text-helper-300')
        starIcon.classList.toggle('text-fourth')
      }
      //6. when checkBox is clicked, toggle the input
      else if(e.target == checkBox){
        // toggle line-through property
        blockTitle.classList.toggle('line-through')
        // change bgc of that block
        block.classList.toggle('bg-helper-300')
        editIcon.classList.toggle('d-none')
        starIcon.classList.toggle('d-none')
      }
    })
  })

})