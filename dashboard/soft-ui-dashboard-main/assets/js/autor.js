class Author {
    constructor(nombre, correo, foto, puesto, area, fechaIngreso, estado) {
        this.nombre = nombre;
        this.correo = correo;
        this.foto = foto;
        this.puesto = puesto;
        this.area = area;
        this.fechaIngreso = fechaIngreso;
        this.estado = estado;
    }
    getNombre() {
        return this.nombre;
    }
    setNombre(name) {
        this.nombre = name;
    }
    getCorreo() {
        return this.correo;
    }
    setCorreo(correo) {
        this.correo = correo;
    }
    getFoto() {
        return this.foto;
    }
    setFoto(foto) {
        this.foto = foto;
    }
    getPuesto() {
        return this.puesto;
    }
    setPuesto(post) {
        this.puesto = post;
    }
    getArea() {
        return this.area;
    }
    setArea(area) {
        this.area = area;
    }
    getFecha() {
        return this.fechaIngreso;
    }
    setFecha(date) {
        this.fechaIngreso = date;
    }
    getEstado() {
        return this.estado;
    }
    setEstado(status) {
        this.estado = status;
    }
}
//# sourceMappingURL=autor.js.map