import CerrarModalBtn from '../img/cerrar.svg'
const Modal = ({setModal}) => {

    const handleCerrarModal = (e) => {
        e.preventDefault();
        setModal(false)

    }
  return (
    <div className="modal">
      <img className='cerrar-modal' src={CerrarModalBtn} alt="Cerrar modal" onClick={handleCerrarModal}/>
    </div>
  )
}

export default Modal
