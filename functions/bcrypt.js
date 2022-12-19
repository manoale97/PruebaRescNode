import bcrypt from "bcrypt";

// Entre más rondas, mejor protección, pero más consumo de recursos. 10 está bien
const rondasDeSal = 10;

export const encriptador = async(textoPlano) => {
    var palabraSecretaEncriptada=await bcrypt.hash(textoPlano, rondasDeSal);
    return palabraSecretaEncriptada;
}

export const desencriptador = async(textoPlano ,encriptado) => {
    var resultado = await bcrypt.compare(textoPlano, encriptado);
    return resultado;
}