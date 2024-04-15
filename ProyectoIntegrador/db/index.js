let db = {

    usuario: {
        email: 'MirthaSeñoraConEstilo@gmail.com',
        usuario: 'MirthaLaEmpoderada',
        contraseña: 'MirthitaLlegamosALos100',
        fechaDeNacimiento: '23/02/1927', 
        documento: '11111',
        fotoDePerfil: '/images/users/Mirtha.png',
    },

    productos: [
        {
            id: 1,
            imagen: '/images/products/BlusaAura.png', 
            nombre: 'Blusa Aura',
            descripcion: 'Color beige con tirantes y bordado floral.',
            comentarios: [
                {
                    usuario: '@maria.sanchez',
                    texto: 'Amé la blusa Aura, fui el centro de atencion en mi fiesta de cumpleaños',
                    fotoDePerfil: '/images/users/usuario1.png'
                },
                {
                    usuario: '@amparo123',
                    texto: 'Muy buena calidad, volveré a comprar!!',
                    fotoDePerfil: '/images/users/usuario2.png'
                },
                {
                    usuario: '@UnicornioFeliz',
                    texto: 'Me encantó!!! Se lo recomende a una amiga y tambien se lo compró :)',
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
                    usuario: '@sabrina.ok',
                    texto: 'Muy buen calce!!',
                    fotoDePerfil: '/images/users/usuario3.png'
                },
                {
                    usuario: '@cande1aria.figueroa',
                    texto: 'Muy buena calidad',
                    fotoDePerfil: '/images/users/usuario4.png'
                },
                {
                    usuario: '@agusbenavent',
                    texto: 'me conecta con la naturaleza cada vez que lo uso.',
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
                    usuario: '@EspírituNaturalista',
                    texto: 'Ya las recomendé :))',
                    fotoDePerfil: '/images/users/usuario5.png'
                },
                {
                    usuario: '@ViajeroCósmico',
                    texto: 'Me encantó!!!',
                    fotoDePerfil: '/images/users/usuario3.png'
                },
                {
                    usuario: '@AlimentandoElAlma',
                    texto: 'Muy lindo todo y muy comodo',
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
                    usuario: '@VibraAlto',
                    texto: 'El tejido de esta pantalon de cáñamo es un abrazo de Madre Tierra. Sostenible y cómodo. ',
                    fotoDePerfil: '/images/users/usuario2.png'
                },
                {
                    usuario: '@cande.martinez',
                    texto: 'Quede encantada',
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
                    usuario: '@MantraMágico',
                    texto: 'Quede enamorada de esta pollera!!!',
                    fotoDePerfil: '/images/users/usuario5.png'
                },
                {
                    usuario: '@DanzaCósmica',
                    texto: 'Me encantó:)',
                    fotoDePerfil: '/images/users/usuario3.png'
                },
                {
                    usuario: '@UniversoFlotante',
                    texto: "¿Quién necesita etiquetas cuando puedes ser auténticamente hippie?  #LibertadDeExpresión",
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
                    usuario: '@SoyAmaAlmendra',
                    texto: 'Muy comoda y fresca',
                    fotoDePerfil: '/images/users/usuario2.png'
                },
                {
                    usuario: '@PerroPilaAlRescate',
                    texto: "El amor es el hilo conductor de nuestro estilo hippie. ",
                    fotoDePerfil: '/images/users/usuario2.png'
                },
                {
                    usuario: '@AmaYPerroPila',
                    texto: 'La moda hippie: una celebración de la individualidad y la creatividad.',
                    fotoDePerfil: '/images/users/usuario2.png'
                }
            ]
        },
        {
            id: 7, 
            imagen: '/images/products/VestidoSofia.png',
            nombre: 'Vestido Sofia',
            descripcion: 'Vestido con vuelos, fresco y juvenil. Colores calidos.',
            comentarios: [
                {
                    usuario: '@AmaElPapel',
                    texto: 'El amor es el hilo conductor de nuestro estilo hippie.',
                    fotoDePerfil: '/images/users/usuario2.png'
                },
                {
                    usuario: '@FlorDelaLuna',
                    texto: ' ideal para el verano.',
                    fotoDePerfil: '/images/users/usuario2.png'
                },
                {
                    usuario: '@ArcoirisVibra',
                    texto: 'Me sorprendió lo bien que queda este vestido',
                    fotoDePerfil: '/images/users/usuario2.png'
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
                    usuario: '@Espiritualidad',
                    texto: 'Combinable y atemporal',
                    fotoDePerfil: '/images/users/usuario2.png'
                },
                {
                    usuario: '@VivaLaVida',
                    texto: 'Muy original',
                    fotoDePerfil: '/images/users/usuario2.png'
                },
                
                {
                    usuario: '@Pachamama',
                    texto: 'Práctico y estiloso',
                    fotoDePerfil: '/images/users/usuario2.png'
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
                    usuario: '@MuchoEstilo',
                    texto: 'Es hermoso',
                    fotoDePerfil: '/images/users/usuario2.png'
                },
                {
                    usuario: '@Felicidad__',
                    texto: 'Muy trendy',
                    fotoDePerfil: '/images/users/usuario2.png'
                },
                {
                    usuario: '@Iconic123_',
                    texto: 'Encantada con la ropa que muestran',
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
                    texto: "Viste tu espíritu libre con la exuberancia del estilo bohemio. ",
                    fotoDePerfil: '/images/users/usuario2.png'
                },
                {
                    usuario: '@DanzaEspiral',
                    texto: "La moda bohemia: un tributo a la creatividad y la individualidad. ",
                    fotoDePerfil: '/images/users/usuario2.png'
                },
                {
                    usuario: '@MariposaMágica',
                    texto: "Muy bonito",
                    fotoDePerfil: '/images/users/usuario2.png'
                }
            ]
        }
    ]

}

module.exports = db;