function diaSemana() {
    diaSem = fecha.getDay()
    semana = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sábado"]
    return semana[diaSem]    
}

function nombreMes() {
    fecha=new Date()
    mes=fecha.getMonth()
    meses=["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto",
           "Septiembre","Octubre","Noviembre","Diciembre"]
    return meses[mes]    
}

function zonaHoraria() {
     zonaHoraria=Intl
                    .DateTimeFormat()
                    .resolvedOptions()
                    .timeZone
    zonaHoraria=zonaHoraria.replace("/"," ")
    zonaHoraria=zonaHoraria.replace("/", " ")
    zonaHoraria = zonaHoraria.replace("_", " ")
    return zonaHoraria;
}

function sensasionTemperatura(temperatura){
    frase = " "
    if(temperatura<=5)                      frase+="hay frio polar"
    if(temperatura>5 && temperatura<=10)    frase+="hay frio"
    if(temperatura>10 && temperatura<=15)   frase+="esta fresco"
    if(temperatura>15 && temperatura<=25)   frase+="esta agradable"
    if(temperatura>25 && temperatura<=30)   frase+="hace calor"
    if (temperatura > 30)                   frase += "esta muy caluroso"
    return frase   
}

function momento() {
    fecha = new Date()
    hora = fecha.getHours()
    momentos=[
        " Es momento de dormir",             //0
        " Es momento de dormir",             //1
        " Es momento de dormir",             //2
        " Es momento de dormir",             //3
        " Es momento de dormir",             //4
        " Es momento de dormir",             //5
        " Es momento de dormir",             //6
        " Es momento de dormir",             //7
        " Es momento de despertar",          //8
        " Es momento de desayunar",          //9
        " ",                                 //10
        " ",                                 //11
        " Es momento de almorfar",           //12
        " Es momento de almorfar",           //13
        " Es momento de dormir la siesta",   //14
        " Es momento de dormir la siesta",   //15
        " Es momento de dormir la siesta",   //16
        " Es momento de merendar",           //17
        " ",                                 //18
        " ",                                 //19
        " Es momento de cenar",              //20
        " Es momento de cenar",              //21
        " Es momento de ver series",         //22
        " Es momento de ver series"          //23
    ]
    return momentos[hora]

}

function estacion() {
    frase = " "
        switch(mes){
        case 0: case 1: frase+="verano";        break
        case 3: case 4: frase+="otoño";         break
        case 6: case 7: frase+="invierno";      break
        case 9: case 10:frase+="primavera";     break
        case 2: 
                if(diaMes<21)   frase+="verano" 
                else            frase+="otoño";       break     
        case 5: 
                if(diaMes<21)   frase+="otoño" 
                else            frase+="invierno";    break 
        case 8: 
                if(diaMes<21)   frase+="invierno" 
                else            frase+="primavera";   break   
        case 11: 
                if(diaMes<21)   frase+="primavera" 
                else            frase+="verano";      break  
    }
    return frase
}

function sensacionClima(clima) {
    frase = " "
    if(clima.includes("lluv") || clima.includes("llov"))
            frase+=" salir con paraguas! "
    if(temperatura>28 && clima.includes("sol"))
        frase += " cuidado con la radiación solar!"
    return frase 
}

function laboral() {
    fecha = new Date()
    diaSem = fecha.getDay()
     laborales=[
        "Hoy es día de descansar",                          //0
        "Odio los lunes porque hay que ir a trabajar!",     //1
        "hoy hay que trabajar",                             //2
        "hoy hay que trabajar",                             //3
        "hoy hay que trabajar",                             //4 
        "Hoy es viernes y tu cuerpo lo sabe",               //5 
        "Hoy es día de descansar"                           //6             
    ]
    return laborales [diaSem]
    
}