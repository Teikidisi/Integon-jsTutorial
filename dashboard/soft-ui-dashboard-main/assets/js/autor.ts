
class Author{
    public nombre:string;
    public correo:string;
    public foto:string;
    public puesto:string;
    public area:string;
    public fechaIngreso:string;
    public estado:string;
    
    constructor(nombre: string, correo: string, foto: string, puesto: string, area: string, fechaIngreso: string, estado: string){
        this.nombre = nombre;
        this.correo = correo;
        this.foto = foto;
        this.puesto = puesto;
        this.area = area;
        this.fechaIngreso = fechaIngreso;
        this.estado = estado;
    }

    getNombre(){
        return this.nombre
    }
    setNombre(name:string){
        this.nombre = name
    }
    getCorreo(){
        return this.correo
    }
    setCorreo(correo:string){
        this.correo = correo 
    }
    getFoto(){
        return this.foto
    }
    setFoto(foto:string){
        this.foto =foto 
    }
    getPuesto(){
        return this.puesto
    }
    setPuesto(post:string){
        this.puesto = post 
    }
    getArea(){
        return this.area
    }
    setArea(area:string){
        this.area =area 
    }
    getFecha(){
        return this.fechaIngreso
    }
    setFecha(date:string){
        this.fechaIngreso = date 
    }
    getEstado(){
        return this.estado
    }
    setEstado(status:string){
        this.estado = status 
    }


}
