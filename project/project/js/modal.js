// //MODAL
//
// const modal = document.querySelector('.modal');
// const modalTrigger = document.querySelector('#btn-get');
// const closeIcon = document.querySelector('.modal_close');
//
// const openModal = () => {
//     modal.style.display = 'block';
//     document.body.style.overflow = 'hidden';
// }
//
// const closeModal = () => {
//     modal.style.display = 'none';
//     document.body.style.overflow = '';
// }
//
// modalTrigger.onclick = () => openModal()
// closeIcon.onclick = () => closeModal()
// modal.onclick = (event) => {
//     if (event.target === modal) {
//         closeModal()
//     }
// }
//
// //DZ 3 task 2 & 3
// let isModalOpened = false;
//
// const showModalOnScroll = () => {
//     if (window.innerHeight + window.scrollY >= document.body.offsetHeight && !isModalOpened) {
//         openModal();
//         isModalOpened = true;
//         window.removeEventListener('scroll', showModalOnScroll);
//     }
// };
//
// window.addEventListener('scroll', showModalOnScroll);
//
// setTimeout(openModal, 10000);