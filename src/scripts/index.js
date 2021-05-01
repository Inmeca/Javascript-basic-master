//------------------------------------EJERCICIO 1---------------------------------------------------
/*Crear una funcion que reciba como parametros empresa y descripcion de servicio.
* La funcion debe buscar en la constante corridasWeb las corridas que coincidan con
  los parametros enviados en la función.
* El parametro empresa debe ser opcional y en caso de no enviarlo asignar como default el valor "AEF"
* La funcion debe regresar un arreglo de objetos de tipo corrida con los siguientes atributos.
 - numeroCorrida. String
 - descripcionServicio. String
 - empresa. String
 - descripcionEmpresa: String
 - tienePromoción. Boolean. Deberá ir en true en caso de que una de las corridas
   web tenga lista de descuetos "listaDescuentos"
* En caso de no encontrar corridas, regresar un error con el mensaje "No hay corridas disponibles" */
//import '../styles/index.scss';
//import {corridasWeb} from './corridasWeb';
import { directory, users, corridasWeb } from './arreglos';
{
    function ObtenerCorridasWeb(descripcionServicio, empresa = "AEF") {
        var corridas = [{}];
        var band = false;
        corridasWeb.forEach(corrida => {
            if (corrida.empresa == empresa && corrida.descripcionServicio == descripcionServicio) {
                var c = {
                    "numeroCorrida": corrida.numeroCorrida,
                    "descripcionServicio": corrida.descripcionServicio,
                    "empresa": empresa,
                    "descripcionEmpresa": corrida.descripcionEmpresa,
                    "tienePromocion": corrida.hasOwnProperty("listaDescuentos") ? "true" : "false"
                };
                corridas.push(c);
                band = true;
            }
        });
        if (!band) {
            console.log("No hay corridas disponibles");
        }
        return corridas;
    }
    console.log("Ejercicio 1");
    console.log(ObtenerCorridasWeb("PRIMERA SELECT", "TCH"));
    //console.log(ObtenerCorridasWeb("PRIMERA SELECT"));
    //console.log(ObtenerCorridasWeb("PRIMERA LUJO"));
    //console.log(ObtenerCorridasWeb("", ""));
}
//------------------------------------EJERCICIO 2---------------------------------------------------
/*
Crear una clase llamada User que implemente una interface llamada IUser con una funcion que
devuelva un objeto usuario.
La funcion debe tener las siguientes consideraciones.
* Recibir como parametro un correo.
* Buscar en la constante directory el correo y devolver el id.
* Con el id que se haya obtenido de la constante directory. Buscar en la constante users el
  usurio con ese mismo id.
* El objeto user debe contener los siguienres atributos
- id
- name. name + lastName
- dateBirth. en formato dd/mm/yyyy
- yearsOld. Calcular a partir de la fecha, del día, del mes y del año de nacimiento

*/
class User {
    constructor() { }
    calcularEdad(dia, mes, anio) {
        const dateNow = new Date();
        var anioNumber = +anio;
        var mesNumber = +mes;
        var diaNumber = +dia;
        var anios;
        var anios = dateNow.getFullYear() - anioNumber;
        var m = dateNow.getMonth() - mesNumber;
        if (m < 0) {
            anios--;
        }
        return anios;
    }
    obtenerUsuario(correo) {
        var id;
        var datosUsuario;
        id = "0";
        directory.forEach(d => {
            if (d.email == correo) {
                id = d.id;
            }
        });
        const resultDatos = users.filter(u => u.id == id);
        var dia = resultDatos[0].dayBirth;
        var mes = resultDatos[0].monthBirth;
        var anio = resultDatos[0].yearBirth;
        var nombre = resultDatos[0].name + " " + resultDatos[0].lastName;
        var date = dia + "/" + mes + "/" + anio;
        var anios = this.calcularEdad(dia, mes, anio);
        const datosUser = [
            {
                "id": resultDatos[0].id,
                "name": nombre,
                "dateBirth": date,
                "yearsOld": anios
            },
        ];
        return datosUser;
    }
}
const u = new User();
console.log("Ejercicio 2");
console.log("User ", u.obtenerUsuario("laura.perez@axity.com"));
