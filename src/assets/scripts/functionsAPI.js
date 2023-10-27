import { generatePostIt } from './generatePostIt.js'
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
            // ! Delete after
            // With the task info, create a post it in the container
            console.log(task)
            generatePostIt(task)
        })
    })
}

// PUT function
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
        // Aquí puedes manejar la respuesta después de crear una tarea
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
