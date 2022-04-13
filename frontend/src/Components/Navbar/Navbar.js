import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import Profile from '../../Assets/img/Profile.jpg';
import { Link } from 'react-router-dom';

const user = {
  name: 'Tom Cook',
  email: 'tom@example.com',
}
const navigation = [
  { name: 'Dashboard', to: '#', current: true },
  { name: 'Customer Sevice', to: '#', current: false },
  { name: 'Reporting', to: '#', current: false },
]
const userNavigation = [
  { name: 'Your Profile', to: '#' },
  { name: 'Settings', to: '#' },
  { name: 'Sign out', to: '#' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
    return (
        <>
        <div className="min-h-full">
            <Disclosure as="nav" className="border shadow-md">
            {({ open }) => (
                <>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center">
                            <div className="flex-shrink-0">
                                <img
                                    className="h-8 w-8"
                                    src={Profile}
                                    alt="Workflow"
                                />
                            </div>
                            <div className="hidden md:block">
                                <div className="ml-10 flex items-baseline space-x-4">
                                    {navigation.map((item) => (
                                        <Link
                                            key={item.name}
                                            to={item.to}
                                            className={classNames(
                                            item.current
                                                ? 'bg-gray-900 text-white'
                                                : 'text-gray-900 hover:bg-gray-700 hover:text-white',
                                            'px-3 py-2 rounded-md text-sm font-medium'
                                            )}
                                            aria-current={item.current ? 'page' : undefined}
                                        >
                                            {item.name}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="hidden md:block">
                            <div className="ml-4 flex items-center md:ml-6">
                                {/* Profile dropdown */}
                                <Menu as="div" className="ml-3 relative">
                                    <div>
                                        <Menu.Button className="max-w-xs bg-gray-800 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                                            <span className="sr-only">Open user menu</span>
                                            <img className="h-8 w-8 rounded-full" src={Profile} alt="" />
                                        </Menu.Button>
                                    </div>
                                    <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                                        {userNavigation.map((item) => (
                                            <Menu.Item key={item.name}>
                                                {({ active }) => (
                                                    <Link
                                                        to={item.to}
                                                        className={classNames(
                                                        active ? 'bg-gray-100' : '',
                                                        'block px-4 py-2 text-sm text-gray-700'
                                                        )}
                                                    >
                                                        {item.name}
                                                    </Link>
                                                )}
                                            </Menu.Item>
                                        ))}
                                    </Menu.Items>
                                </Menu>
                            </div>
                        </div>
                        <div className="-mr-2 flex md:hidden">
                            {/* Mobile menu button */}
                            <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                                <span className="sr-only">Open main menu</span>
                                {open ? (
                                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                                ) : (
                                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                                )}
                            </Disclosure.Button>
                        </div>
                    </div>
                </div>

                <Disclosure.Panel className="md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {navigation.map((item) => (
                            <Disclosure.Button
                                key={item.name}
                                as="a"
                                href={item.href}
                                className={classNames(
                                    item.current ? 'bg-gray-900 text-white' : 'text-gray-900 hover:bg-gray-700 hover:text-white',
                                    'block px-3 py-2 rounded-md text-base font-medium'
                                )}
                                aria-current={item.current ? 'page' : undefined}
                                >
                                {item.name}
                            </Disclosure.Button>
                        ))}
                    </div>
                    <div className="pt-4 pb-3 border-t border-gray-700">
                        <div className="flex items-center px-5">
                            <div className="flex-shrink-0">
                                <img className="h-10 w-10 rounded-full" src={Profile} alt="" />
                            </div>
                            <div className="ml-3">
                                <div className="text-base font-medium leading-none text-white">{user.name}</div>
                                <div className="text-sm font-medium leading-none text-gray-900">{user.email}</div>
                            </div>
                        </div>
                        <div className="mt-3 px-2 space-y-1">
                            {userNavigation.map((item) => (
                            <Disclosure.Button
                                key={item.name}
                                as="a"
                                to={item.to}
                                className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:text-white hover:bg-gray-700"
                            >
                                {item.name}
                            </Disclosure.Button>
                            ))}
                        </div>
                    </div>
                </Disclosure.Panel>
                </>
            )}
            </Disclosure>
        </div>
        </>
    )
}