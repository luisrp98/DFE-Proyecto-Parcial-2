export function openModal() {
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
                        disabled
                    />
                </div>
                <!-- Priority, Tag, Date -->
                <div class="modal-form-row modal-form-tags">
                    <div class="modal-form-column">
                        <label for="modal-form-priority">Prioridad</label>
                        <select name="modal-form-priority" id="modal-form-priority">
                            <option value="default" disabled selected>Prioridad de la tarea</option>
                            <option value="low">Baja</option>
                            <option value="medium">Media</option>
                            <option value="high">Alta</option>
                        </select>
                    </div>

                    <div class="modal-form-column">
                        <label for="modal-form-tag">Etiqueta</label>
                        <input
                            type="text"
                            name="modal-form-tag"
                            id="modal-form-tag"
                            placeholder="Etiqueta de la tarea"
                        />
                    </div>

                    <div class="modal-form-column">
                        <label for="modal-form-date">Fecha</label>
                        <input type="date" name="modal-form-date" id="modal-form-date" />
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
                    ></textarea>
                </div>

                <!-- Buttons -->
                <div class="modal-form-buttons">
                    <button id="modal-form-button-cancel">Cancelar</button>
                    <button id="modal-form-button-save">Guardar</button>
                </div>
    `

    //
    modal_bg.appendChild(modal_content)

    // Append modal in the document
    const body = document.querySelector('body')
    body.appendChild(modal_bg)
}
