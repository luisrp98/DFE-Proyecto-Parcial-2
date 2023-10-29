export function closeModal() {
    const modal_bg = document.querySelector('.modal-bg')
    if (modal_bg !== null) {
        modal_bg.remove()
    }
}
