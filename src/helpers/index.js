export const generarId = () => {
    const ramdom = Math.random().toString(36).substr(2);
    const fecha = Date.now().toString(36);
    const id = ramdom + fecha;
    return id;
}