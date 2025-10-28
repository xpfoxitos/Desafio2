var config = {
    // style: 'mapbox://styles/mapbox/streets-v12',
    // leave commented to use Mapbox Standard Style
    accessToken: 'pk.eyJ1IjoieHBmb3hpdG9zIiwiYSI6ImNtZ2ptdnRjNjBqenQybHF3bWJtcWo4cGEifQ.U37waoaM-CaBrOOZG5G01g',
    showMarkers: true,
    markerColor: '#0b083bff',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    insetOptions: {
        markerColor: 'orange'
    },
    insetPosition: 'bottom-right',
    theme: 'dark',
    use3dTerrain: true, //set true for enabling 3D maps.
    auto: false,
    title: 'Una galaxia muy lejana en la Tierra',
    subtitle: 'El camino del héroe Anakin Skywalker.',
    byline: 'Por José Luis Santana Blasco. Desafío 2: Curso de Visualización de datos 3a Ed. de  Haz Instituto.RTVE',
    footer: 'Fuentes: <br> Creado usando <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template. <br> <a href="https://docs.google.com/document/d/1Tes1UAuybAllw3YLnJ1IQsacLIMhVHl78izFTKxBYBQ/edit?usp=sharing" target="_blank">Derechos de autor de las fotos mostradas</a>  ',
    chapters: [
        {
            id: '000-ExplicacionInicial',
            alignment: 'full',
            hidden: false,
            title: 'Aunque es dificil de creer, Naboo, Tatooine, Coruscant y otros planetas de la saga Star Wars se encuentran en la Tierra. Este pequeño recorrido por los lugares de rodaje del "Episodio I: La amenaza fantasma" y "Episodio II: El Ataque de los Clones ", en las escenas donde aparece Anakin Skywalker. Descubriremos donde se encuentran estos planetas en la Tierra.',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Tunesien-Sahara-Starwars-01b.jpg/960px-Tunesien-Sahara-Starwars-01b.jpgos-espa-e1374507376808.jpg',
            description: 'El Episodio I de Star Wars, "La amenaza fantasma", se filmó en varios lugares del mundo, pero muchos de sus escenarios más icónicos se encuentran en la Tierra. Por ejemplo, las escenas en el planeta Tatooine se rodaron en Túnez, específicamente en lugares como Matmata y Tataouine, que ofrecían el paisaje desértico adecuado para representar este planeta ficticio. Las escenas en Naboo se filmaron en lugares como el Palacio Real de Caserta en Italia y los estudios Leavesden en Inglaterra. Coruscant, la ciudad-planetaria, se creó principalmente mediante efectos visuales y CGI, pero algunas escenas interiores se filmaron en estudios de cine. Estos lugares reales proporcionaron el telón de fondo perfecto para dar vida al universo de Star Wars en la pantalla grande.',
            location: {
                center: [ 7.843347, 33.993932],
                zoom: 16.5,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: '001-E1-tallerWatto',
            alignment: 'left',
            hidden: false,
            title: 'Taller de respuestos mecanicos de Watto - primera aparición de Anakin, Planeta Tatooine (Eriguet dunes-Tataouine-Tunez)',
            image: '',
            //description: 'La nave que lleva a la princesa Padne tiene que hacer un aterrizaje de emergencia en el planeta Tatooine, en el Borde Exterior, para intentar conseguir piezas para reparar la nave. Para no levantar sospechas, aterrizan a las afueras del pueblo Mos Espa. Allí, localizan el taller de Watto, un comerciante de piezas, y allí también, se encuentran con Anakin Skywalker, un esclavo con grandes capacidades para la creación de todo tipo de ingenios mecánicos. <br><br> Mos Espa, es un escenario creado en el desierto de Ong Jemel, cerca de las dunas Eriguet. Se ha convertido en un lugar muy turístico, ya sea con tours específicos que recorren las múltiples localizaciones de Túnez relacionadas con Star Wars, o con visitas de turistas individuales fans de la saga. Al estar en pleno desierto, está siempre en peligro de ser devorado por las dunas móviles, pero de momento, con mejor o peor mantenimiento en los edificios y resto de componentes, aquí sigue, para disfrute de los fans.',
            description: `
            <img 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Tunesien-Sahara-Starwars-01b.jpg/960px-Tunesien-Sahara-Starwars-01b.jpgos-espa-e1374507376808.jpg" 
                alt="Taller de respuestos mecanicos de Watto - primera aparición de Anakin, Planeta Tatooine (Eriguet dunes-Tataouine-Tunez)" 
                style="width: 350px; height: 200px; object-fit: cover; display: block; margin-bottom: 15px;"
            >
            
            La nave que lleva a la princesa Padne tiene que hacer un aterrizaje de emergencia en el planeta Tatooine, en el Borde Exterior, 
            para intentar conseguir piezas para reparar la nave. Para no levantar sospechas, aterrizan a las afueras del pueblo Mos Espa. 
            Allí, localizan el taller de Watto, un comerciante de piezas, y allí también, se encuentran con Anakin Skywalker, 
            un esclavo con grandes capacidades para la creación de todo tipo de ingenios mecánicos. <br>
                       
            <br>
            
            <iframe width="560" height="315" src="https://www.youtube.com/embed/sO4saWbYZmw?si=o60KovQEMIKloOD1&amp;start=25" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

            <br> 
            
            Mos Espa, es un escenario creado en el desierto de Ong Jemel, cerca de las dunas Eriguet. Se ha convertido en un lugar muy turístico, 
            ya sea con tours específicos que recorren las múltiples localizaciones de Túnez relacionadas con Star Wars, o con visitas de turistas 
            individuales fans de la saga. Al estar en pleno desierto, está siempre en peligro de ser devorado por las dunas móviles, 
            pero de momento, con mejor o peor mantenimiento en los edificios y resto de componentes, aquí sigue, para disfrute de los fans.
 

        `,
            location: {
                center:  [7.84290, 33.99522],
                zoom: 17.41,
                pitch: 52.40,
                bearing: 98.40
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: '002-E1-casaAnakin',
            alignment: 'left',
            hidden: false,
            title: 'Casa de Anakin, barrio de los esclavos de Mos Espa, Planeta Tatooine (Ksar Hadada-Tatooine-Tunez)',
            image: '',
            //description: 'A la salida del taller, sin las piezas, el grupo, compuesto por la princesa Padme Amidala, de incógnito, Jar Jar Binks y el jedi Qui-Gon, se encuentran nuevamente con Anakin, que les invita a refugiarse en su casa, una humilde casa en el barrio de los esclavos de Mos Espa, donde vive con su madre. <br><br> El barrio de esclavos es un conjunto de casas en Ksar Hadada, a más de 250 kilómetros de Ksar . En la actualidad, después de 28 años desde el rodaje, las casas se encuentran en un estado bastante deteriorado, no han tenido la misma suerte de otras localizaciones.',
            description: `
            <img 
                src="https://upload.wikimedia.org/wikipedia/commons/a/ad/Ksar-ouled-soltane.jpg" 
                alt="Taller de respuestos mecanicos de Watto - primera aparición de Anakin, Planeta Tatooine (Eriguet dunes-Tataouine-Tunez)" 
                style="width: 350px; height: 200px; object-fit: cover; display: block; margin-bottom: 15px;"
            >
            
            A la salida del taller, sin las piezas, el grupo, compuesto por la princesa Padme Amidala (de incógnito), Jar Jar Binks y 
            el jedi Qui-Gon, se encuentran nuevamente con Anakin, que les invita a refugiarse en su casa, una humilde casa en el barrio de 
            los esclavos de Mos Espa, donde vive con su madre. No he encontrado el video de esta escena, pero la he sustituido por otra posterior, 
            cuando tras obtener su libertad, Anakin se despide de su madre y se va a Coruscant con Padme y los jedis.
                       
            <br>
            
            <iframe width="560" height="315" src="https://www.youtube.com/embed/iwtA1p0ayoA?si=vAlD9JeUvy8hfADw&amp;start=25&amp;clip=Ugkx4p58MiC1tuWaGJ7gsobxmk0jgWM-c7NY&amp;clipt=ELjJChiDhAs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

            <br> 
            
            El barrio de esclavos es un conjunto de casas en Ksar Hadada, a más de 250 kilómetros de Ksar . En la actualidad, después de 28 años
             desde el rodaje, las casas se encuentran en un estado bastante deteriorado, no han tenido la misma suerte de otras localizaciones.
 

        `,
            location: {
                center: [ 10.31355, 33.10017],
                zoom: 18.5,
                pitch: 27,
                bearing: 0,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
        id: '003-E1-carreraVainas',
        alignment: 'left',
        hidden: false,
        title: 'Carrera de váinas',
        // IMPORTANTE: Deja la propiedad 'image' vacía, ya que incrustaremos la imagen en 'description'.
        image: '', 
        description: `
            <img 
                src="https://upload.wikimedia.org/wikipedia/commons/b/bb/Sidi_Bouhlel_1.jpg" 
                alt="Carreras de Vainas de Mon Espa, Planeta Tatooine (Cañón de Sidi Bouhlel-Tatooine-Tunez)" 
                style="width: 350px; height: 200px; object-fit: cover; display: block; margin-bottom: 15px;"
            >
            
            Para obtener el dinero que Watto pide por las piezas que necesitan para reparar la nave, Anakin se ofrece a participar en 
            la Clásica de Boonta Eve, unas carreras de vainas que se celebraban en los alrededores de Mon Espa sobre vehículos 
            retropropulsores muy peligrosos. 
            
            <br>
            
            <iframe width="560" height="315" src="https://www.youtube.com/embed/fnQJx3bZA-M?si=JtomoSKQTwIIQn-o&amp;start=168&amp;clip=Ugkxsxb958LoB4V-BNnjZ7FEItsfQ33CGc4o&amp;clipt=EKTSBhiKngg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

            <br> 
            
            La carrera de vainas se filmó principalmente el en el desierto de Sidi Bouhlel, 
            cerca de Nefta, en Túnez, si bien también se grabaron escenas de relleno en el desierto de Yuma, en Arizona, Estados Unidos, 
            más conocido por ser el escenario de la escena del Sarlacc en el Retorno del Jedi. El cañón por donde corren las vainas es 
            conocido coloquialmente como cañón Star Wars, pues ha sido protagonista de míticas escenas de la saga, siendo la localización 
            de las escenas de la cueva de  Obi-Wan Kenobi, la pelea de este con los tusken para salvar a Luke Skywalker y otras.
 

        `,
        location: {
            center: [34.035040, 8.282089],
            zoom: 12.52,
            pitch: 8.01,
            bearing: 0.00
        },
        mapAnimation: 'flyTo',
        rotateAnimation: false,
        callback: '',
        onChapterEnter: [],
        onChapterExit: []
        },
        {
            id: '004-E1-consejoJedi',
            alignment: 'left',
            hidden: false,
            title: 'El consejo rechaza a Anakin en el Templo Jedi, planeta Coruscant (Fox Studios-Sidney-Australia)',
            //image: 'https://upload.wikimedia.org/wikipedia/commons/6/68/Fox_Studios_Australia_1.JPG',
            image: '',
            //description: ' La escena en la que el consejo jedi rechaza a Anakin como la mayoría de las escenas de Corruscan se han filmado en diferentes estudios, no tienen localizaciones reales. En este caso, segun la información obtenida, estas se filmaron en los estudios Fox, ahora Disney de Australia, loalizados en la ciudad de Sidney',
            description: ` <img 
                src="https://upload.wikimedia.org/wikipedia/commons/6/68/Fox_Studios_Australia_1.JPG" 
                alt="El consejo rechaza a Anakin en el Templo Jedi, planeta Coruscant (Fox Studios-Sidney-Australia)" 
                style="width: 350px; height: 200px; object-fit: cover; display: block; margin-bottom: 15px;"
            >
            
            Anakin gana la carrera de vainas y esto permite pagar las piezas a Watto y reparar la nave, y reemprender rumbo a Coruscant, 
            llevando con ellos a Anakin. El jedi Qui-Gon ha detectado que la fuerza es poderosa en Anakin y le pide a su madre que deje que 
            se lo lleve a Coruscant, una vez que ha comprado su libertad a Watto, para que Anakin se convierta en jedi. 
            <br>
            
            <iframe width="560" height="315" src="https://www.youtube.com/embed/DTGqZEp0u4k?si=uH0WCRuuug8ZDJ5J&amp;start=168&amp;clip=UgkxNyt22aLnjB-0xBP6IBihXraO2pX1JW2K&amp;clipt=EObaARjGrwU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

            <br> 
            La escena en la que el consejo jedi rechaza a Anakin como jedi, así como la mayoría de las escenas de Coruscant se han filmado en diferentes 
            estudios, no tienen localizaciones reales en esta película y las siguientes. En este caso, según la información obtenida, estas se 
            filmaron en los estudios Fox, ahora Disney de Australia, localizados en la ciudad de Sidney. En futuras apariciones de Coruscant, 
            dentro de la serie Andor, las localizaciones en la Ciudad de la Luz de Valencia serán omnipresentes. 
        `,
            location: {
                center: [ 151.22369, -33.89297],
                zoom: 18.08,
                pitch: 53,
                bearing: 92.78
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '005-E1-EncuentroGungans',
            alignment: 'left',
            hidden: false,
            title: 'Encuentro con los Gungans en los pantanos del planeta Naboo (Leavesden Studios-Inglaterra)',
            //image: 'https://upload.wikimedia.org/wikipedia/commons/6/68/Fox_Studios_Australia_1.JPG',
            image: '',
            //description: ' La escena en la que el consejo jedi rechaza a Anakin como la mayoría de las escenas de Corruscan se han filmado en diferentes estudios, no tienen localizaciones reales. En este caso, segun la información obtenida, estas se filmaron en los estudios Fox, ahora Disney de Australia, loalizados en la ciudad de Sidney',
            description: ` <img 
                src="https://upload.wikimedia.org/wikipedia/commons/b/bc/Harry_Potter_Leavesden_entrance.jpg" 
                alt="Encuentro con los Gungans en los pantanos del planeta Naboo (Leavesden Studios-Inglaterra)" 
                style="width: 350px; height: 200px; object-fit: cover; display: block; margin-bottom: 15px;"
            >
            
            La reina Padmé Amidala es forzada a regresar a Naboo para firmar un tratado que permitía la ocupación del planeta por la Federación 
            de Comercio. Vuelve junto con Anakin, los jedis Kenobi y Qui-Gon y el gungan Jar Jar con la idea de evitarla firma, para lo que piden 
            ayuda a los Gungans, la otra especie inteligente que vive en Naboo, antes enemigos, pero que aceptan unirse para rechazar a la 
            Federación de Comercio. 
            <br>
            
            <iframe width="560" height="315" src="https://www.youtube.com/embed/v5E8S6wFNOI?si=wBwa4lk4VkfscB0C&amp;start=168" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>    

            <br> 
            
            La escena se filmó en los estudios Leavesden, en Inglaterra, ahora más conocidos como los estudios 
            Harry Potter, si bien, cuando se finalizó el Episodio I aun no se había rodado ninguna película de Harry Potter. Son todo escenarios 
            digitales mezclados con imágenes de bosques obtenidas del cercano parque Whippendell Wood, donde se filmaron otras escenas del 
            planeta Naboo. 
        `,
            location: {
                center: [ -0.41727,  51.69076],
                zoom: 15.96,
                pitch: 65.15,
                bearing: -149.53
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '006-E1-BatallaNaboo',
            alignment: 'left',
            hidden: false,
            title: 'La batalla terrestre del planeta Naboo (Whippendell Wood-Inglaterra)',
            image: '',
            //description: ' La batalla de Naboo se produce en tres escenarios, el terrestre, donde los gungans luchan con los batallones robots , en el espacio, contra las naves de control de robots y los cazas de la Federación con gran éxito gracias a Anakin, y en el palacio real de Naboo, comando por los jedis y Padme. <br><br> Los tres escenarios de batalla tienen un número significativo de efectos digitales, si bien, para darle un mayor realismo a las batallas terrestres se emplearon tomas del extenso parque Whippendell Woods de Inglaterra, a sólo 5 kilómetros lineales de los estudios Leavesden.',
            description: ` <img 
                src="https://upload.wikimedia.org/wikipedia/commons/0/0c/Watford%2C_Whippendell_Wood_-_geograph.org.uk_-_70197.jpg" 
                alt="La batalla terrestre del planeta Naboo (Whippendell Woods-Inglaterra)" 
                style="width: 350px; height: 200px; object-fit: cover; display: block; margin-bottom: 15px;"
            >

            La batalla de Naboo se produce en tres escenarios, el terrestre, donde los gungans luchan con los batallones robots , en el espacio, 
            contra las naves de control de robots y los cazas de la Federación con gran éxito gracias a Anakin, y en el palacio real de Naboo, 
            comando por los jedis y Padme. 
            <br>
            
            <iframe width="560" height="315" src="https://www.youtube.com/embed/8oBEzKm9grM?si=7SjKvSQYC-r89hXt&amp;clip=UgkxBSpRSX3AfIOuTqd5jhAcAsHtG0U0zynI&amp;clipt=EKnCCBiAhAs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

            <br> 
            Los tres escenarios de batalla tienen un número significativo de efectos digitales, si bien, 
            para darle un mayor realismo a las batallas terrestres se emplearon tomas del extenso parque Whippendell Woods de Inglaterra, 
            a sólo 5 kilómetros lineales de los estudios Leavesden. 
        `,

            
            location: {
                center: [ -0.44457,  51.67589],
                zoom: 13.72,
                pitch: 50.52,
                bearing: 30.35
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '007-E1-batallaenpalacioNaboo',
            alignment: 'left',
            hidden: false,
            title: 'La batalla en el palacio de Naboo (Palacio Real de Caserta-Italia)',
            //image: 'https://upload.wikimedia.org/wikipedia/commons/6/68/Fox_Studios_Australia_1.JPG',
            image: '',
            //description: ' La escena en la que el consejo jedi rechaza a Anakin como la mayoría de las escenas de Corruscan se han filmado en diferentes estudios, no tienen localizaciones reales. En este caso, segun la información obtenida, estas se filmaron en los estudios Fox, ahora Disney de Australia, loalizados en la ciudad de Sidney',
            description: ` <img 
                src="https://upload.wikimedia.org/wikipedia/commons/2/2d/Campania_Caserta3_tango7174.jpg" 
                alt="Encuentro con los Gungans en los pantanos del planeta Naboo (Leavesden Studios-Inglaterra)" 
                style="width: 350px; height: 200px; object-fit: cover; display: block; margin-bottom: 15px;"
            >
            Dentro del palacio el grupo se divide. A Anakin para protegerlo, le obligan a que se quede dentro de la cabina de una nave. 
            Los jedis deben luchar contra Darth Maul, el caballero Sith que ya conocieran en Tatooine, consiguiendo matarle, pero él 
            también consigue matar a Qui-Gon Jinn. La princesa Padme, consigue reducir al virrey de la Federación de Comercio, gracias 
            a que Anakin ha destruido la nave controladora de robots. 
            
            <br>
            
            <iframe width="560" height="315" src="https://www.youtube.com/embed/FeAi69lloYk?si=tKqCm2ON3CpfV3pz&amp;clip=UgkxpgIE1XNomsGQhsFoCJjUfRaWowNhsudL&amp;clipt=EMT_ARik1AU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

            <br> 
            
            La batalla en el palacio de Naboo se filmó en los interiores 
            del Palacio Real de Caserta, en Italia. Es un palacio barroco, muy en la imagen que se le quiere dar al pueblo de la superficie 
            de Naboo. El palacio se seguirá usando como set en las siguientes películas. 
        `,
            location: {
                center: [  14.32555, 41.07264],
                zoom: 16.21,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '008-E2-LallegadaaNaboo-2',
            alignment: 'left',
            hidden: false,
            title: 'Padme se refugia en Naboo protegida por Anakin (Plaza de España de Sevilla - España)',
            //image: 'https://upload.wikimedia.org/wikipedia/commons/6/68/Fox_Studios_Australia_1.JPG',
            image: '',
            description: ` <img 
                src="https://images.pexels.com/photos/34336886/pexels-photo-34336886.jpeg" 
                alt="Padme se refugia en Naboo protegida por Anakin (Plaza de España de Sevilla - España)" 
                style="width: 350px; height: 200px; object-fit: cover; display: block; margin-bottom: 15px;"
            >
            
            Tras el intento de asesinato de la princesa Padme Amidala en Coruscan, el consejo jedi decide que se traslade al planeta 
            Naboo, junto al joven padawan jedi Anakin Skywalker. 
            
            <br>
            
            <iframe width="560" height="315" src="https://www.youtube.com/embed/5poZpBw9BHg?si=nmbt7B4SZBhC2x1E" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

            <br>
            
            La escena de llegada a Naboo se filmó en la Plaza de España 
            de Sevilla, en España. La plaza, construida para la Exposición Iberoamericana de 1929, da la imagen recargada que se quiere 
            dar a Naboo, ya iniciada con el palacio de Caserta.
        `,
            location: {
                center: [  -5.98700, 37.37674],
                zoom: 16.07,
                pitch: 56.01,
                bearing: -10.25
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '009-E2-ElRefugioNaboo',
            alignment: 'left',
            hidden: false,
            title: 'Padme y Anakin se enamoran (Villa del Balbiadello, lago Como - Lenno - Italia)',
            //image: 'https://upload.wikimedia.org/wikipedia/commons/6/68/Fox_Studios_Australia_1.JPG',
            image: '',
            description: ` <img 
                src="https://upload.wikimedia.org/wikipedia/commons/4/4d/Villa_del_Balbianello_Lago_di_Como_featured_in_Casino_Royale_and_in_Star_Wars_%2820063743160%29.jpg" 
                alt="Padme y Anakin se enamoran (Villa del Balbiadello, lago Como - Lenno - Italia)" 
                style="width: 350px; height: 200px; object-fit: cover; display: block; margin-bottom: 15px;"
            >
            
            Padme tiene que permanecer oculta en Naboo, sin llamar la atención. Los días juntos hace que crezca el amor entre ellos, 
            que saben prohibido pero al que finalmente caen.
            
            <br>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/vX7NRYGm2Wg?si=kFavB6cMaxT2vypp" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <br>
            
            Las diferentes escenas de retiro en Naboo de Padme y Anakin se 
            filmaron en Villa del Balbiadello, escenario de un gran numero de peliculas, como puede ser Casino Royale, Ocean's Twelve, 
            El otro hombre, etc. El resto de las escenas se filmaron también por la zona, el picnic en los prados entre Tremezzo y Griante, 
            y la boda de Padme y Anakin, nuevamente en la villa. 
        `,
            location: {
                center: [ 9.20265, 45.96481],
                zoom: 17.49,
                pitch: 26.83,
                bearing: -21.31
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '010-E2-AnakinBuscaAsumadre-Interiores',
            alignment: 'left',
            hidden: false,
            title: 'Anakin vuelve a Tatooine a buscar a su madre (Hotel Sidi Driss-Matmata-Tunez)',
            //image: 'https://upload.wikimedia.org/wikipedia/commons/6/68/Fox_Studios_Australia_1.JPG',
            image: '',
            description: ` <img 
                src="https://upload.wikimedia.org/wikipedia/commons/4/4d/H%C3%B4tel%2C_Sidi_Driss%2C_Star_Wars%2C_mars_2022%2C_DSC_2269.jpg" 
                alt="Anakin vuelve a Tatooine a buscar a su madre (Hotel Sidi Driss-Matmata-Tunez)" 
                style="width: 350px; height: 200px; object-fit: cover; display: block; margin-bottom: 15px;"
            >
            
            Anakin, aun estando viviendo su historia de amor con Padme, sigue teniendo los sueños de su madre sufriendo, por lo que decide volver a 
            Tatooine a buscarla. Se reune con el hombre que la liberó, que le informa que fue secuestrada por los moradores de las montañas, 
            los tusken. 
            
            <br>
            
            <iframe width="560" height="315" src="https://www.youtube.com/embed/QeqEvT0UNnE?si=y7aiOp29--N_3-fq" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

            <br>
            
            Las escenas interiores de la casa de Anakin se filmaron en el Hotel Sidi Driss, en Matmata, en Túnez, 
            ya empleado para las escenas de la casa de Luke Skywalker en el Episodio IV. El hotel está construido en una antigua casa troglodita. 
            La ilusión del cine hace que los exteriores de esta casa, visible en la siguiente escena cuando Anakin va a buscar a los Tusken sean de 
            un escenario montado a más de 200 kilometros lineales del interior. 
        `,
            location: {
                center: [ 9.96705, 33.54254],
                zoom: 17.99,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '011-E2-rescatedeobwanBatalladelaArena',
            alignment: 'left',
            hidden: false,
            title: 'Rescate de Obi-Wan y Batalla de la Arena en el planeta Genosis (Fox Studios-Sidney-Australia)', 
            //image: 'https://upload.wikimedia.org/wikipedia/commons/6/68/Fox_Studios_Australia_1.JPG',
            image: '',
            description: ` <img 
                src="https://upload.wikimedia.org/wikipedia/commons/c/c4/Entertainment_Quarter_Cinema.JPG" 
                alt="Rescate de Obi-Wan y Batalla de la Arena en el planeta Genosis (Fox Studios-Sidney-Australia)" 
                style="width: 350px; height: 200px; object-fit: cover; display: block; margin-bottom: 15px;"
            >
            
            Anakin tras ver morir a su madre y matar a toda la tribu Tuskan que la había raptado, tanto hombres, como niños y mujeres, vuelve junto a Padme a la que le confiesa el 
            odio que ha desplegado. Tras el entierro de la madre, recibe el mensaje de Obi-Wan Kenobi, y Padme le convence para ir en su rescate, 
            pero este no es como se espera y finalmente se convierte en una gran batalla de jedis y clones contra la huestes del Conde Doku. 
            
            <br>

            <iframe width="560" height="315" src="https://www.youtube.com/embed/T4F-FIGrCOg?si=9Ho-98wwAm4EC9-c&amp;clip=UgkxsNcgYnfdi040wjrc0u8_Wr2teLPZED1T&amp;clipt=EMSjARjcmAI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            
            <br>
            Las escenas del rescate de Obi-Wan y la batalla en la arena del planeta Genosis se filmaron en los estudios Fox, ahora Disney de Australia, 
            localizados en la ciudad de Sidney. En estas escenas se emplearon multitud de efectos digitales para crear el escenario del planeta 
            Genosis y las tropas de clones y droides.

            
        `,
            location: {
                center: [ 151.22369, -33.89297],
                zoom: 18.08,
                pitch: 53,
                bearing: 92.78
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '012-E2-bodaAnakinPadme',
            alignment: 'left',
            hidden: false,
            title: 'Boda de Anakin y Padne (Villa del Balbiadello, lago Como - Lenno - Italia)',
            //image: 'https://upload.wikimedia.org/wikipedia/commons/6/68/Fox_Studios_Australia_1.JPG',
            image: '',
            description: ` <img 
                src="https://upload.wikimedia.org/wikipedia/commons/9/9e/06VillaBalbianello.jpg" 
                alt="Boda de Anakin y Padne (Villa del Balbiadello, lago Como - Lenno - Italia)" 
                style="width: 350px; height: 200px; object-fit: cover; display: block; margin-bottom: 15px;"
            >
            
            Padne y Anakin, una vez finaliza la batalla de Genosis, y ajenos a las repercusión de esta batalla, con el conciller Supremos de 
            la Republica Galactica desplegando el ejercito de clones por toda la Galaxia, sellan su amor con una boda secreta en el lugar donde 
            nació este: Naboo, en su retiro escondido.
            
            <br>

            <iframe width="560" height="315" src="https://www.youtube.com/embed/SkHCOxst6XY?si=SeY180KiEKH-KXrf" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            
            <br>
                       
            Las escenas de la boda secreta de Anakin y Padme se filmaron nuevamente en Villa del Balbiadello, 
            en el lago Como, Italia, creando un cierre romántico a la historia de amor iniciada en este lugar, y dando una falsa esperanza tras las imagenes del
            inicio de las guerras clone iniciadas por el futuro Emperador.
        `,
            location: {
                center: [ 9.20265, 45.96481],
                zoom: 17.49,
                pitch: 26.83,
                bearing: -21.31
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
    ]
};
