import { useState } from 'react';
import { datosFaq } from "../../data/preguntasfrecuentes";

export const PreguntasFrecuentesPage = () => {
    const [openQuestionId, setOpenQuestionId] = useState(null);
    const [searchTerm, setSearchTerm] = useState("");

    const toggleQuestion = (id) => {
        setOpenQuestionId(openQuestionId === id ? null : id);
    };

    const handleSummaryClick = (event, id) => {
        event.preventDefault();
    };

    const filtrarPreguntas = datosFaq.filter( (preguntaFiltrada) =>
        preguntaFiltrada.pregunta.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="bg-blue-300 py-20">
            <div className="container mx-auto ">
                <div className="flex flex-col items-center">
                    <h2 className="font-bold text-5xl mt-5 tracking-tight">FAQ</h2>
                    <p className="text-neutral-500 text-xl mt-3">Preguntas Frecuentes</p>
                </div>
                
                <div className='flex items-center justify-center p-4'>
                    <div className="flex w-full mx-10 rounded">
                        <input 
                            className="w-full p-4 text-black text-lg outline-none rounded" 
                            type="search" 
                            name="search" 
                            placeholder="Search..."
                            value={searchTerm}
                            onChange={ (e) => setSearchTerm(e.target.value) }
                        />
                        {/* <button type="submit" className="m-2 rounded bg-blue-600 px-4 py-2 text-white">
                            <svg className="fill-current h-6 w-6" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 56.966 56.966" style={{ enableBackground: 'new 0 0 56.966 56.966' }} xmlSpace="preserve" width="512px" height="512px">
                                <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
                            </svg>
                        </button> */}
                    </div>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 w-11/12 mx-auto my-8">
                    {
                        filtrarPreguntas.map((pregunta) => (
                            <div
                                key={pregunta.id}
                                className="p-3 md:p-5 bg-blue-gray-50 cursor-pointer rounded-2xl"
                                onClick={ () => toggleQuestion(pregunta.id) }
                            >
                                <details className="group" open={openQuestionId === pregunta.id}>
                                    <summary
                                        className="flex justify-between items-center font-medium cursor-pointer list-none"
                                        onClick={(event) => handleSummaryClick(event, pregunta.id)}
                                    >
                                        <span className="font-bold text-xl xl:text-2xl">{pregunta.pregunta}</span>
                                        <span className="transition group-open:rotate-180">
                                            <svg
                                                fill="none"
                                                height="24"
                                                shapeRendering="geometricPrecision"
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="1.5"
                                                viewBox="0 0 24 24"
                                                width="24"
                                            >
                                            <path d="M6 9l6 6 6-6"></path>
                                            </svg>
                                        </span>
                                    </summary>
                                    <p className="text-base lg:text-lg mt-3 group-open:animate-fadeIn">
                                        { pregunta.respuesta }
                                    </p>
                                </details>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};
