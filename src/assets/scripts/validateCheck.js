export function validateCheck() {
    // Check the form to see if complete
    const form = document.querySelector('.modal-content')
    const titleInput = document.getElementById('modal-form-title')
    const prioritySelect = document.getElementById('modal-form-priority')
    const tagInput = document.getElementById('modal-form-tag')
    const dateInput = document.getElementById('modal-form-date')

    if (titleInput.value.trim() === '') {
        alert('Agrega un título')
        return
    }
    if (prioritySelect.value === 'default') {
        alert('Selecciona una prioridad')
        return
    }

    if (tagInput.value.trim() === '') {
        alert('Agrega una etiqueta')
        return
    }

    if (dateInput.value === '') {
        alert('Agrega una fecha')
        return
    }
    alert('Formulario enviado con éxito.')
    return true
}
