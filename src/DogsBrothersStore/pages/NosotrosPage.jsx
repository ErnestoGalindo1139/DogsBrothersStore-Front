import { Mapa, Rating } from "../components"

export const NosotrosPage = () => {
    return (
        <div>
            <img
                className="lg:h-96 lg:w-full object-cover object-center"
                src="/assets/empresa/hero.webp"
                alt="nature image"
            />

            <div className="grid lg:grid-cols-2 gap-8 m-10">
                <div className="row-start-2 row-end-3 lg:row-start-1 lg:row-end-2">
                    <Mapa />
                </div>

                <div>
                    <h2 className="text-center font-bold text-3xl">¿Quiénes Somos?</h2>
                    <p className="text-justify mt-2 ">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit iusto obcaecati temporibus placeat, facilis amet. In, suscipit est eum velit fuga sit quibusdam illum, fugiat nostrum amet repellendus laborum quia? Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quae beatae vero incidunt illum cumque doloribus facere esse veritatis facilis quos atque, ratione distinctio veniam eligendi ipsa quis dolorem molestiae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit iusto obcaecati temporibus placeat, facilis amet. In, suscipit est eum velit fuga sit quibusdam illum, fugiat nostrum amet repellendus laborum quia? Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quae beatae vero incidunt illum cumque doloribus facere esse veritatis facilis quos atque, ratione distinctio veniam eligendi ipsa quis dolorem molestiae.
                    </p>
                </div>
            </div>

            <Rating />
            
        </div>
    )
}
