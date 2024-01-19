import { Mapa, Rating } from "../components"

export const NosotrosPage = () => {
    return (
        <>
            <img
                className="lg:h-96 lg:w-full object-cover object-center"
                src="/assets/empresa/hero.webp"
                alt="nature image"
            />
            <div className="container mx-auto">
                <div className="grid lg:grid-cols-2 gap-8 mt-20 mb-8 mx-4 sm:mx-8 md:mx-16 lg:mx-20">
                    <div className="row-start-2 row-end-3 lg:row-start-1 lg:row-end-2">
                        <Mapa />
                    </div>

                    <div>
                        <h2 className="text-center font-bold text-3xl">¿Quiénes Somos?</h2>
                        <p className="text-justify mt-2 ">
                            En DogsBrothersStore, somos más que una tienda online de tecnología; somos la puerta de acceso al futuro digital. Nacimos con la firme convicción de que la tecnología puede transformar vidas, y estamos aquí para ofrecerte lo último y lo mejor en el mundo digital.
                        </p>
                        <p className="text-justify mt-2 ">
                            Nos especializamos en curar una selección de productos de alta calidad, desde dispositivos innovadores hasta accesorios de última generación. Nuestra misión es simple: acercarte a la innovación de manera accesible y sin complicaciones. Buscamos posicionarnos en el pináculo de la industria tecnológica, ofreciendo no solo productos, sino experiencias que redefinan tu relación con la tecnología.
                        </p>
                        <p className="text-justify mt-2 ">
                            En DogsBrothersStore, cada clic es una oportunidad para explorar un nuevo horizonte digital. Únete a nosotros mientras construimos el futuro, un dispositivo a la vez. ¡Bienvenido a la revolución tecnológica con DogsBrothersStore!
                        </p>
                    </div>
                </div>

                <Rating />
            
            </div>
        </>

    )
}
