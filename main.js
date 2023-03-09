function run() {
    let apellido = prompt("ingrese apellido");
    let nombre = prompt("ingrese nombre");
    let edad = prompt("ingrese edad");
    let peso = prompt("ingrese peso en kilos");
    let altura = prompt((parseFloat = "ingrese altura en metros"));

    const imc = peso / altura;
    const mensaje = `el indice de masa corporal de ${apellido} ${nombre} de ${edad} años es ${imc}`;
    alert(mensaje);
}
