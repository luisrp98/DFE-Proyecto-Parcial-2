import {
    getTasks,
    getSpecificTask,
    createTask,
    deleteTask,
    updateTask,
} from './assets/scripts/functionsAPI.js'

// Initialize the task from the API
getTasks()

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
