export const ProductsCard = ({ producto }) => {
    const { image, name, color, price, availableColors } = producto;

    return (
        <li className="inline-flex w-64 flex-col items-center text-center lg:w-auto">
            <div className="group relative">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md">
                    <img
                        src={image}
                        alt={name}
                        className="h-full object-cover object-center group-hover:opacity-75"
                    />
                </div>
                <div className="mt-6">
                    <p className="text-sm text-gray-500">{color}</p>
                    <h3 className="mt-1 font-semibold text-gray-900">
                    <a href="#">
                        <span className="absolute inset-0"></span>
                        {name}
                    </a>
                    </h3>
                    <p className="mt-1 text-gray-900">{price}</p>
                </div>
            </div>
    
            <h4 className="sr-only">Available colors</h4>
    
            <ul
            role="list"
            className="mt-auto flex items-center justify-center space-x-3 pt-6"
            >
            {availableColors.map((availableColor) => (
                <li
                    key={availableColor.colorCode}
                    className="h-4 w-4 rounded-full border border-black border-opacity-10"
                    style={{ backgroundColor: availableColor.colorCode }}
                >
                <span className="sr-only">Black</span>
                </li>
            ))}
            </ul>
        </li>
    );
};