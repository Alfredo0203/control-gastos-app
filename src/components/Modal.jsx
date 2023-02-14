import CerrarModalBtn from '../img/cerrar.svg'
const Modal = ({setModal, animarModal, setAnimarModal}) => {

    const handleCerrarModal = () => {
        setAnimarModal(false)
        setTimeout(() => {
            setModal(false)
          }, 500);
        

    }
  return (
    <div className="modal">
        <div className='cerrar-modal'>
        <img  src={CerrarModalBtn} alt="Cerrar modal" onClick={handleCerrarModal}/>
        </div>
        <form className={`formulario ${animarModal ? "animar" : 'cerrar'}`}>
            <legend>Gasto</legend>
        </form>
     </div>
  )
}

export default Modal
