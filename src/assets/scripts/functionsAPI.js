import { generatePostIt } from './generatePostIt.js'
import { openModal } from './openModal.js'

const apiUrl = 'https://653485e2e1b6f4c59046c7c7.mockapi.io/api/users/217209736/tasks'

function fetchData(url, options) {
    return fetch(url, options)
        .then((response) => {
            if (!response.ok) {
                throw new Error('La solicitud no se completó correctamente')
            }
            return response.json()
        })
        .catch((error) => {
            console.error('Ocurrió un error:', error)
        })
}

// GET function
export function getTasks() {
    fetchData(apiUrl).then((data) => {
        console.log('Datos de la API (GET):', data)
        data.forEach((task) => {
            // With the task info, create a post it in the container
            generatePostIt(task)
        })
    })
}
// GET a specific task function
export function getSpecificTask(title) {
    let url = new URL(apiUrl)
    url.searchParams.append('title', title)
    fetchData(url).then((data) => {
        data.forEach((task) => {
            console.log(task)
            const param = {
                title: `value="${task.title}"`,
                completed: task.completed,
                priority: task.priority,
                tag: `value="${task.tag}"`,
                description: task.description,
                dueDate: `value="${task.dueDate}"`,
                id: task.id,
            }

            openModal(param, true)
        })
    })
}

// POST function
export function createTask(taskData) {
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(taskData),
    }

    fetchData(apiUrl, options).then((data) => {
        console.log('Datos de la API (POST):', data)
    })
}

// DELETE function
export function deleteTask(taskId) {
    const deleteUrl = `${apiUrl}/${taskId}`
    const options = {
        method: 'DELETE',
    }

    fetchData(deleteUrl, options).then(() => {
        console.log('Tarea eliminada con éxito')
        // Puedes realizar acciones adicionales después de eliminar la tarea
    })
}

// PUT function
export function updateTask(taskId, updatedTaskData) {
    const updateUrl = `${apiUrl}/${taskId}`
    const options = {
        method: 'PUT', // Puedes usar 'PATCH' si la API admite actualizaciones parciales
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedTaskData),
    }

    fetchData(updateUrl, options).then((data) => {
        console.log('Datos de la API (PUT):', data)
        // Aquí puedes manejar la respuesta después de editar la tarea
    })
}

// Ejemplos de uso:
// getTasks() // Realizar una solicitud GET
// createTask({ title: 'Nueva tarea', description: 'Descripción de la tarea' }) // Realizar una solicitud POST
// deleteTask('taskIdToDelete') // Realizar una solicitud DELETE
// updateTask(taskIdToUpdate, updatedTaskData); // Realizar una solicitud PUT para editar la tarea
