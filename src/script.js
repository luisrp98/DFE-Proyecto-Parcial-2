import {
    getTasks,
    getSpecificTask,
    createTask,
    deleteTask,
    updateTask,
} from './assets/scripts/functionsAPI.js'
import { openModal } from './assets/scripts/openModal.js'
import { closeModal } from './assets/scripts/closeModal.js'
import { validateCheck } from './assets/scripts/validateCheck.js'
import { clearPostIt } from './assets/scripts/clearPostIt.js'

// Initialize the task from the API
getTasks()

// #region Create task section
const buttonAddTask = document.querySelector('#control-add-task')
buttonAddTask.addEventListener('click', function () {
    openModal()
})
export function listenerAddTask(id = null, editing = false) {
    // Define the event handler function
    function clickHandler(e) {
        if (e.target && e.target.id === 'modal-form-button-save') {
            if (validateCheck()) {
                const titleInput = document.getElementById('modal-form-title').value
                const prioritySelect =
                    document.getElementById('modal-form-priority').selectedOptions[0].text
                const tagInput = document.getElementById('modal-form-tag').value
                const dateInput = document.getElementById('modal-form-date').value
                const descriptionTextArea = document.getElementById(
                    'modal-form-description'
                ).value

                const formData = {
                    title: titleInput,
                    description: descriptionTextArea,
                    completed: false,
                    priority: prioritySelect,
                    tag: tagInput,
                    dueDate: dateInput,
                }
                if (editing) {
                    updateTask(id, formData)
                } else {
                    createTask(formData)
                }
                clearPostIt()
                setTimeout(function () {
                    getTasks()
                }, 1000)

                closeModal()

                // Remove the event listener after it's used
                document.body.removeEventListener('click', clickHandler)
            }
        }

        if (e.target && e.target.id === 'modal-form-button-cancel') {
            closeModal()

            // Remove the event listener after it's used
            document.body.removeEventListener('click', clickHandler)
        }
    }

    // Add the event listener to the body
    document.body.addEventListener('click', clickHandler)
}
// #endregion

// Edit and delete task section
// #region Edit task section
// This listener await to the click in the post its
const postItContainer = document.querySelector('.post-its-container')
postItContainer.addEventListener('click', function (e) {
    const postIt = e.target.closest('.post-it')

    if (postIt) {
        const postItTitle = postIt.querySelector('.post-it-title')
        // Get the text of the .title tag and remove the blank spaces and line breaks
        getSpecificTask(postItTitle.textContent.trim())
    }
})
// #endregion
