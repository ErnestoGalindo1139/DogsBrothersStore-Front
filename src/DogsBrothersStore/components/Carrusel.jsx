import { Carousel } from "@material-tailwind/react";
import { productos } from "../../data/productos";


export const Carrusel = () => {
    return (
        <div className="flex justify-center items-center h-full mt-16">
            <Carousel
                autoplay = {true}
                loop = {true}
                autoplayDelay = {3000}
                className="rounded-xl overflow-hidden h-5/6 w-5/6 sm:h-4/6 sm:w-4/6"
                navigation={({ setActiveIndex, activeIndex, length }) => (
                    <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
                        {new Array(length).fill("").map((_, i) => (
                            <span
                                key={i}
                                className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                                    activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                                }`}
                                onClick={() => setActiveIndex(i)}
                            />
                        ))}
                    </div>
                )}
            >
                {productos.map((producto) => (
                    <img
                        key={producto.id}
                        src={`../../../assets/Carrusel/Carrusel-${producto.id}.webp`}
                        alt={producto.name}
                        className="object-cover h-full w-full"
                    />
                ))}
            </Carousel>
        </div>
    );
};
