

export default function validarId(req){
    if(isNaN(req.params.id))
        throw new Error("Id informado não é válido")
}