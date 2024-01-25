import { Fragment, useState } from 'react'
import { Dialog, Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, ChevronDownIcon, FunnelIcon, MinusIcon, PlusIcon, Squares2X2Icon } from '@heroicons/react/20/solid'

const sortOptions = [
  { name: 'Mas popular', href: '#', current: true },
  { name: 'Mejor calificacion', href: '#', current: false },
  { name: 'Lo mas nuevo', href: '#', current: false },
  { name: 'Precio: Mas bajo al mas alto', href: '#', current: false },
  { name: 'Precio: Mas alto al mas bajo', href: '#', current: false },
]
const subCategories = [
  { name: 'Totes', href: '#' },
  { name: 'Backpacks', href: '#' },
  { name: 'Travel Bags', href: '#' },
  { name: 'Hip Bags', href: '#' },
  { name: 'Laptop Sleeves', href: '#' },
]
const filters = [
  {
    id: 'accesorios',
    name: 'Accesorios',
    iconClass: 'material-symbols-outlined',
    iconLabel: 'mouse',
    options: [
      { value: 'mousePad', label: 'Mouse Pad', checked: false },
      { value: 'mochilas', label: 'Mochilas', checked: false },
      { value: 'escritorios', label: 'Escritorios', checked: false },
      { value: 'cargadores', label: 'Cargadores', checked: false },
      { value: 'bateriasPortatil', label: 'Baterias Portatil', checked: false },
      { value: 'sillas', label: 'Sillas', checked: false },
    ],
  },
  {
    id: 'computadoras',
    name: 'Computadoras',
    iconClass: 'material-symbols-outlined',
    iconLabel: 'desktop_windows',
    options: [
      { value: 'escritorio', label: 'Escritorio', checked: false },
      { value: 'portatiles', label: 'Portatiles', checked: false },
      { value: 'servidor', label: 'Servidor', checked: false },
    ],
  },
  {
    id: 'componentes',
    name: 'Componentes',
    iconClass: 'material-symbols-outlined',
    iconLabel: 'memory',
    options: [
      { value: 'procesadores', label: 'Procesadores', checked: false },
      { value: 'tarjetasVideo', label: 'Tarjetas de Video', checked: false },
      { value: 'tarjetasMadre', label: 'Tarjetas Madre', checked: false },
      { value: 'memoriaRAM', label: 'Memoria RAM', checked: false },
      { value: 'unidadesSSD', label: 'Unidades SSD', checked: false },
      { value: 'discosDuros', label: 'Discos Duros Internos', checked: false },
      { value: 'gabinetes', label: 'Gabinetes', checked: false },
      { value: 'disipadores', label: 'Disipadores', checked: false },
      { value: 'pastasTermicas', label: 'Pastas Termicas', checked: false },
    ],
  },
  {
    id: 'celulares',
    name: 'Celulares',
    iconClass: 'material-symbols-outlined',
    iconLabel: 'phone_iphone',
    options: [
      { value: 'android', label: 'Android', checked: false },
      { value: 'ios', label: 'iOS', checked: false },
    ],
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function CategoriasProductos() {

  const categorias = document.querySelector('.categoriasMostrar');
  const [bandera, setBandera] = useState(false);

  const mostrarCategorias = () => {
    setBandera(!bandera);
  }

  return (
    <div className="bg-gray-100 rounded-md mr-2 ml-2 lg:mr-0 lg:ml-0">
      <div>
        <main className="mx-auto max-w-7xl">
          <div className="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-6 pl-3 pr-3 gap-8 categoriasHeader px-4 sm:px-4 lg:px-4">
            <h1 className="text-4xl font-bold tracking-tight text-white">Categorías</h1>

            <div className="flex items-center">
              <Menu as="div" className="relative inline-block text-left">
                <div>
                  <Menu.Button className="group inline-flex justify-center text-sm font-medium text-white">
                    Ordenar
                    <ChevronDownIcon
                      className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-white group-hover:text-white"
                      aria-hidden="true"
                    />
                  </Menu.Button>
                </div>

                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                      {sortOptions.map((option) => (
                        <Menu.Item key={option.name}>
                          {({ active }) => (
                            <a
                              href={option.href}
                              className={classNames(
                                option.current ? 'font-medium text-gray-900' : 'text-gray-500',
                                active ? 'bg-gray-100' : '',
                                'block px-4 py-2 text-sm'
                              )}
                            >
                              {option.name}
                            </a>
                          )}
                        </Menu.Item>
                      ))}
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>

              <button type="button" className="-m-2 ml-5 p-2 text-gray-400 hover:text-gray-500 sm:ml-7" onClick={mostrarCategorias}>
                <Bars3Icon className="h-6 w-6"/>
              </button>
            </div>
          </div>

          <section aria-labelledby="products-heading">

            <div className="grid grid-cols-1 gap-y-10">
              {/* Filters */}
              <form className={`${bandera ? '' : 'hidden'} lg:block px-4 sm:px-4 lg:px-4 categoriasMostrar`}>

                {filters.map((section) => (
                  <Disclosure as="div" key={section.id} className="border-b border-gray-200 py-6">
                    {({ open }) => (
                      <>
                        <h3 className="-my-3 flow-root">
                          <Disclosure.Button className="flex w-full items-center justify-between py-3 text-sm text-gray-400 hover:text-gray-500">
                            <div className="categoriaProducto flex items-center">
                              <span className={`text-black text-4xl ${section.iconClass}`}>
                                {section.iconLabel}
                              </span>
                              <span className="font-medium text-gray-900 ml-5">{section.name}</span>
                            </div>
                            
                            <span className="flex items-center">
                              {open ? (
                                <MinusIcon className="h-5 w-5" aria-hidden="true" />
                              ) : (
                                <PlusIcon className="h-5 w-5" aria-hidden="true" />
                              )}
                            </span>
                          </Disclosure.Button>
                        </h3>
                        <Disclosure.Panel className="pt-6">
                          <div className="space-y-4">
                            {section.options.map((option, optionIdx) => (
                              <div key={option.value} className="flex items-center">
                                <input
                                  id={`filter-${section.id}-${optionIdx}`}
                                  name={`${section.id}[]`}
                                  defaultValue={option.value}
                                  type="checkbox"
                                  defaultChecked={option.checked}
                                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                />
                                <label
                                  htmlFor={`filter-${section.id}-${optionIdx}`}
                                  className="ml-3 text-sm text-gray-600"
                                >
                                  {option.label}
                                </label>
                              </div>
                            ))}
                          </div>
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                ))}
              </form>

              {/* Product grid */}
              <div className="lg:col-span-3">{/* Your content */}</div>
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}
