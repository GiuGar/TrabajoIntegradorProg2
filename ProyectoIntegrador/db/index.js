let db = {

    usuario: {
<<<<<<< HEAD
        email: 'hola',
        usuario: '@Pachamama',
        contraseña: 'hola',
        fechaDeNacimiento: 'hola', 
        documento: 'hola',
        fotoDePerfil: 'hola',
=======
        email: 'mirthaseñoraconestilo@gmail.com',
        usuario: 'MirthaLaEmpoderada',
        contraseña: 'MirthitaLlegamosALos100',
        fechaDeNacimiento: '23/02/1927', 
        documento: '1111111',
        fotoDePerfil: '/images/users/Mirtha.png',
>>>>>>> de905ca46e4f95d203848d3c2ea08c1ed8457822
    },

    productos: [
        {
            id: 1,
            imagen: '/images/products/BlusaAura.png', 
            nombre: 'Blusa Aura',
            descripcion: 'Color beige con tirantes y bordado floral.',
            comentarios: [
                {
                    usuario: '@Felicidad__',
                    texto: 'Amé la blusa Aura, fui el centro de atencion en mi fiesta de cumpleaños.',
                    fotoDePerfil: '/images/users/usuario1.png'
                },
                {
                    usuario: '@DanzaEspiral',
                    texto: 'Muy buena calidad, volveré a comprar!!!',
                    fotoDePerfil: '/images/users/usuario2.png'
                },
                {
                    usuario: '@ViajeroCósmico',
                    texto: 'Me encantó!!! Se lo recomendé a una amiga y también se lo compró :)',
                    fotoDePerfil: '/images/users/usuario3.png'
                },
            ]
        },
        {
            id: 2,
            imagen: '/images/products/BlusaCairo.png',
            nombre: 'Blusa Cairo',
            descripcion: 'Alta calidad, tela suave y colores vibrantes',
            comentarios: [
                {
                    usuario: '@ViajeroCósmico',
                    texto: 'Muy buen calce!!!',
                    fotoDePerfil: '/images/users/usuario3.png'
                },
                {
                    usuario: '@NubeNomada',
                    texto: 'Muy buena calidad',
                    fotoDePerfil: '/images/users/usuario4.png'
                },
                {
                    usuario: '@MadreTierra',
                    texto: 'Me conecta con la naturaleza cada vez que lo uso.',
                    fotoDePerfil: '/images/users/usuario5.png'
                }
            ]
        },
        {
            id: 3,
            imagen: '/images/products/TopCora.png',
            nombre: 'Top Cora',
            descripcion: 'Color morado, tela de gabardina.',
            comentarios: [
                {
                    usuario: '@MadreTierra',
                    texto: 'Ya las recomendé :))',
                    fotoDePerfil: '/images/users/usuario5.png'
                },
                {
                    usuario: '@DanzaEspiral',
                    texto: 'Me encantó!!!',
                    fotoDePerfil: '/images/users/usuario2.png'
                },
                {
                    usuario: '@NubeNomada',
                    texto: 'Muy lindo todo y muy cómodo.',
                    fotoDePerfil: '/images/users/usuario4.png'
                }
            ]
        },
        {
            id: 4,
            imagen: '/images/products/PantalonLea.png',
            nombre: 'Pantalon Lea',
            descripcion: 'Distintas estampas, colores vibrantes.',
            comentarios: [
                {
                    usuario: '@DanzaEspiral',
                    texto: 'El tejido de esta pantalón de cáñamo es un abrazo de Madre Tierra.',
                    fotoDePerfil: '/images/users/usuario2.png'
                },
                {
                    usuario: '@Felicidad__',
                    texto: 'Quedé encantada',
                    fotoDePerfil: '/images/users/usuario1.png'
                },
                {
                    usuario: '@MadreTierra',
                    texto: 'Me encantan los bolsillos de estos pantalones, son súper prácticos y cómodos',
                    fotoDePerfil: '/images/users/usuario5.png'
                }
            ]
        },
        {
            id: 5,
            imagen: '/images/products/PolleraCala.png',
            nombre: 'Pollera Cala',
            descripcion: 'Pollera larga, tela tusor, aporta frescura y comodidad.',
            comentarios: [
                {
                    usuario: '@NubeNomada',
                    texto: 'Estoy enamorada de esta pollera!!!',
                    fotoDePerfil: '/images/users/usuario4.png'
                },
                {
                    usuario: '@ViajeroCósmico',
                    texto: 'Me encantó :)',
                    fotoDePerfil: '/images/users/usuario3.png'
                },
                {
                    usuario: '@Felicidad__',
                    texto: "¿Quién necesita etiquetas cuando puedes ser auténticamente hippie? #LibertadDeExpresión",
                    fotoDePerfil: '/images/users/usuario1.png'
                }
            ]
        },
        {
            id: 6,
            imagen: '/images/products/PolleraMuna.png',
            nombre: 'Pollera Muna',
            descripcion: 'Colores vibrantes, con diseños de flores y mandalas.',
            comentarios: [
                {
                    usuario: '@DanzaEspiral',
                    texto: 'Muy cómoda y fresca',
                    fotoDePerfil: '/images/users/usuario2.png'
                },
                {
                    usuario: '@Felicidad__',
                    texto: "Es super versátil!",
                    fotoDePerfil: '/images/users/usuario1.png'
                },
                {
                    usuario: '@NubeNomada',
                    texto: 'La moda hippie: una celebración de la individualidad y la creatividad.',
                    fotoDePerfil: '/images/users/usuario4.png'
                }
            ]
        },
        {
            id: 7, 
            imagen: '/images/products/VestidoSofia.png',
            nombre: 'Vestido Sofia',
            descripcion: 'Vestido con vuelos, fresco y juvenil. Colores cálidos.',
            comentarios: [
                {
                    usuario: '@MadreTierra',
                    texto: 'Me sorprendió lo bien que queda este vestido.',
                    fotoDePerfil: '/images/users/usuario5.png'
                },
                {
                    usuario: '@DanzaEspiral',
                    texto: 'Ideal para el verano.',
                    fotoDePerfil: '/images/users/usuario2.png'
                },
                {
                    usuario: '@ViajeroCósmico',
                    texto: 'El amor es el hilo conductor de nuestro estilo hippie.',
                    fotoDePerfil: '/images/users/usuario3.png'
                }
            ]
        },
        {
            id: 8,
            imagen: '/images/products/VestidoFiona.png',
            nombre: 'Vestido Fiona',
            descripcion: 'Vestido largo, con encajes en la parte superior. 100% lino.',
            comentarios: [
                {
                    usuario: '@Felicidad__',
                    texto: 'Combinable y atemporal',
                    fotoDePerfil: '/images/users/usuario1.png'
                },
                {
                    usuario: '@NubeNomada',
                    texto: 'Lo quiero llevar a todos mis viajes!',
                    fotoDePerfil: '/images/users/usuario4.png'
                },
                
                {
                    usuario: '@ViajeroCósmico',
                    texto: 'Práctico y estiloso',
                    fotoDePerfil: '/images/users/usuario3.png'
                }
            ]
        },
        {
            id: 9,
            imagen: '/images/products/VestidoAmelia.png',
            nombre: 'Vestido Amelia',
            descripcion: 'Color verde militar, diseños minimalistas florales',
            comentarios: [
                {
                    usuario: '@Felicidad__',
                    texto: 'Es hermoso',
                    fotoDePerfil: '/images/users/usuario1.png'
                },
                {
                    usuario: '@MadreTierra',
                    texto: 'Es tan elegante! Me encanta!',
                    fotoDePerfil: '/images/users/usuario5.png'
                },
                {
                    usuario: '@DanzaEspiral',
                    texto: 'Encantada con la ropa que venden',
                    fotoDePerfil: '/images/users/usuario2.png'
                }
            ]
        },
        {
            id: 10,
            imagen: '/images/products/BolsoLuisa.png',
            nombre: 'Bolso Luisa',
            descripcion: 'Bolso pequeño con diseños de mandalas.',
            comentarios: [
                {
                    usuario: '@NubeNomada',
                    texto: "Lo amo. Lo llevo a todos lados.",
                    fotoDePerfil: '/images/users/usuario4.png'
                },
                {
                    usuario: '@ViajeroCósmico',
                    texto: "Super amplio. Entra de todo!!!",
                    fotoDePerfil: '/images/users/usuario3.png'
                },
                {
                    usuario: '@MadreTierra',
                    texto: "Muy bonito",
                    fotoDePerfil: '/images/users/usuario5.png'
                }
            ]
        }
    ]

}

module.exports = db;