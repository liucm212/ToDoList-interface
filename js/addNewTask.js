/*
add new task in index(my task) page
1. when click the add task button , the button hide and show the edit block
2. when click the Save button in edit block
  2-1. get title, deadline,file and comment data in that block 
  2-2. use above data to create a new task 
  show the add button, and hide the edit block.
*/ 

// structure of single task block
const singleTaskStructure = `<div
  class="d-flex align-items-start justify-content-between mb-8 pt-24 px-32"
  >
  <!-- 核取方塊 -->
  <input
    type="checkbox"
    name="taskFinshed"
    class="me-16 block-check"
  />
  <!-- block-header : 標題、星星、edit、deadline、file -->
  <div
    class="block-header w-100 d-flex flex-wrap justify-content-between align-items-center"
  >
    <div
      class="w-100 d-flex justify-content-between align-items-center"
    >
      <div class="d-flex align-items-center text-truncate">
        <div>
          <input
            type="text"
            name=""
            id=""
            placeholder="Type Something Here..."
            class="block-title me-16 mb-8 cursor-pointer"
            readonly="readonly"
          />
        </div>
      </div>
      <div class="d-flex align-items-center">
        <span
          class="starIcon material-symbols-outlined fill text-helper-300 me-32 cursor-pointer"
        >
          star
        </span>
        <span
          class="editIcon material-symbols-outlined fill text-helper-300 cursor-pointer"
        >
          edit
        </span>
      </div>
    </div>
    <div>
      <ul>
        <li>
          <span class="material-symbols-outlined me-8 title-icon">
            calendar_month
          </span>
          <span
            class="material-symbols-outlined me-8 title-icon cursor-pointer"
          >
            draft
          </span>
        </li>
      </ul>
    </div>
  </div>
  </div>
  <!-- block-body--primary : comment -->
  <div id="" class="block-body--primary d-none px-32">
  <p class="p-12">
    Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Laudantium corrupti temporibus cum? Odio animi doloribus ratione
    at ipsam voluptates dolorum obcaecati voluptatibus,
    consequuntur, quidem, facere inventore sunt minima alias.
    Provident.
  </p>
  </div>

  <!-- block-body--secondary : edit block  -->
  <div class="block-body--secondary d-none">
  <div class="block-body">
    <!-- Input : deadline -->
    <div class="mb-20">
      <div class="d-flex align-items-center body-title mb-8">
        <span class="material-symbols-outlined me-8 title-icon">
          calendar_month
        </span>
        <label for="">Deadline</label>
      </div>
      <div class="body-content d-flex flex-column flex-sm-row">
        <input
          id=""
          type="text"
          placeholder="yy/mm/dd"
          class="input-text text-dark me-8 mb-8 mb-sm-0"
        />
        <input
          type="text"
          placeholder="hh:mm"
          class="input-text text-dark"
        />
      </div>
    </div>

    <!-- taskBlock : file  -->
    <div class="mb-20">
      <div class="body-title d-flex align-items-center mb-8">
        <span class="material-symbols-outlined me-8 title-icon">
          draft
        </span>
        <label for="">File</label>
      </div>
      <div class="body-content">
        <div class="input-file position-relative">
          <span
            class="material-symbols-outlined transform-center-center"
          >
            add
          </span>
        </div>
      </div>
    </div>

    <!-- taskBlock : comment -->
    <div class="mb-20">
      <div class="d-flex align-items-center body-title mb-8">
        <span class="material-symbols-outlined me-8"> sms </span>
        <!-- 這裡試著新增UUID，並對應到下方textarea -->
        <label for="theIDOfThatTask">Comment</label>
      </div>
      <div class="body-content">
        <textarea
          name=""
          id="theIDOfThatTask"
          cols="30"
          rows="10"
          placeholder="Type your memo here..."
          class="w-100 input-text text-dark"
        ></textarea>
      </div>
    </div>
  </div>
  <div class="block-footer d-flex">
    <div class="w-50">
      <button
        type="button"
        class="footer-button footer-button--cancel d-flex align-items-center justify-content-center text-third bg-light py-16"
      >
        <!-- icon -->
        <span class="material-symbols-outlined me-16"> close </span>
        <!-- text -->
        <span class="footer-button-text--cancel">Cancel</span>
      </button>
    </div>
    <div class="w-50">
      <button
        type="button"
        class="footer-button footer-button--save d-flex align-items-center justify-content-center text-light bg-primary py-16"
      >
        <!-- icon -->
        <span class="material-symbols-outlined me-16"> save </span>
        <!-- text -->
        <span class="footer-button-text--save">Save Task</span>
      </button>
    </div>
  </div>
</div>`

// get the element of add task button
const addTaskButton = document.querySelector('#addTaskButton')

// get the edit block
const editBlock = document.querySelector('#mainTaskBlock')

// get the save button of edit block
const saveButton = document.querySelector('#editBlockSaveButton')

// get the save button of edit block
const cancelButton = document.querySelector('#editBlockCancelButton')

// get the section which store all the task blocks
const tasksSection = document.querySelector('#tasksSection')

document.addEventListener('DOMContentLoaded', function(){
  // when addTaskButton is clicked, hide button and show the editBlock
  addTaskButton.addEventListener('click', function(){
    addTaskButton.classList.add('d-none')
    editBlock.classList.remove('d-none')
  })

  //when the save button of the editBlock is click, create a new task, hide the editBlock and show the Add block (未做新task block)
  saveButton.addEventListener('click', function(){
    //create new task block (未做)
    const newTask = document.createElement('li')
    newTask.className = 'mt-8 taskBlock'
    console.log(newTask)
    newTask.innerHTML = singleTaskStructure
    tasksSection.appendChild(newTask)
    
    //hide the editBlock
    editBlock.classList.add('d-none')
    addTaskButton.classList.remove('d-none')
  })

  // when the cancel button of the editBlock is click, show Add button and hide the editBlock
  cancelButton.addEventListener('click', function(){
    addTaskButton.classList.remove('d-none')
    editBlock.classList.add('d-none')
  })
})