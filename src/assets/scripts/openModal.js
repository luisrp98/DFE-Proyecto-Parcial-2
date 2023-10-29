import { listenerAddTask } from '../../script.js'

export function openModal(params = null, editing = false) {
    if (params == null) {
        params = {}
        params.title = ''
        params.completed = false
        params.priority = 'default'
        params.tag = ''
        params.description = ''
        params.dueDate = ''
    }

    // Convert API info into HTML
    // Completed status
    if (params.completed) {
        params.completed = 'checked'
    } else if (editing) {
        params.completed = ''
    } else {
        params.completed = 'disabled'
    }

    // Priority
    let selected1 = '',
        selected2 = '',
        selected3 = '',
        selected4 = ''
    // Set the option select value depending on the priority tag value
    switch (params.priority) {
        default:
            selected1 = 'selected'
            ;(selected2 = ''), (selected3 = ''), (selected4 = '')
            break
        case 'Baja':
            selected2 = 'selected'
            ;(selected1 = ''), (selected3 = ''), (selected4 = '')
            break
        case 'Media':
            selected3 = 'selected'
            ;(selected1 = ''), (selected2 = ''), (selected4 = '')
            break
        case 'Alta':
            selected4 = 'selected'
            ;(selected1 = ''), (selected2 = ''), (selected3 = '')
            break
    }

    // Create modal background
    const modal_bg = document.createElement('div')
    modal_bg.classList.add('modal-bg')

    // Create modal content
    const modal_content = document.createElement('div')
    modal_content.classList.add('modal-content')
    modal_content.innerHTML = `
                <!-- Title -->
                <div class="modal-form-row">
                    <div class="modal-form-column">
                        <label for="modal-form-title">Título</label>
                        <input
                            type="text"
                            ${params.title}
                            name="modal-form-title"
                            id="modal-form-title"
                            placeholder="Título de la tarea"
                        />
                    </div>
                </div>
                <!-- Completed -->
                <div class="modal-form-row">
                    <label for="modal-form-complete">Completada</label>
                    <input
                        type="checkbox"
                        name="modal-form-complete"
                        id="modal-form-complete"
                        ${params.completed}
                    />
                </div>
                <!-- Priority, Tag, Date -->
                <div class="modal-form-row modal-form-tags">
                    <div class="modal-form-column">
                        <label for="modal-form-priority">Prioridad</label>
                        <select name="modal-form-priority" id="modal-form-priority">
                            <option value="default" disabled ${selected1} hidden>Prioridad de la tarea</option>
                            <option value="low" ${selected2}>Baja</option>
                            <option value="medium" ${selected3}>Media</option>
                            <option value="high" ${selected4}>Alta</option>
                        </select>
                    </div>

                    <div class="modal-form-column">
                        <label for="modal-form-tag">Etiqueta</label>
                        <input
                            type="text"
                            ${params.tag}
                            name="modal-form-tag"
                            id="modal-form-tag"
                            placeholder="Etiqueta de la tarea"
                        />
                    </div>

                    <div class="modal-form-column">
                        <label for="modal-form-date">Fecha</label>
                        <input type="date" name="modal-form-date" id="modal-form-date" ${params.dueDate}/>
                        </div>
                </div>

                <!-- Description -->
                <div class="modal-form-row">
                    <label for="modal-form-description">Descripción</label>
                    <textarea
                        name="modal-form-description"
                        id="modal-form-description"
                        rows="6"
                        placeholder="Descripción de la tarea"
                    >${params.description}</textarea>
                </div>

                <!-- Buttons -->
                <div class="modal-form-buttons">
                    <button id="modal-form-button-cancel">Cancelar</button>
                    <button id="modal-form-button-delete">Borrar</button>
                    <button id="modal-form-button-save">Guardar</button>
                </div>
    `

    //
    modal_bg.appendChild(modal_content)

    // Append modal in the document
    const body = document.querySelector('body')
    body.appendChild(modal_bg)

    if (editing) {
        console.log(params.id)
        listenerAddTask(params.id, editing)
    } else if (!editing) {
        listenerAddTask()
    }
}
