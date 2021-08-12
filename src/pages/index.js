import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';

export default function Home() {
  let [isOpen, setIsOpen] = useState(true);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <div className="bg-hero-pattern fixed inset-0 flex items-center justify-center">
        <button
          type="button"
          onClick={openModal}
          className="px-4 py-2 text-lg font-medium text-white bg-red-900 rounded-md  hover:bg-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-100"
        >
          YOUR SOUL WILL BE MINE !!
        </button>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={closeModal}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                <Dialog.Title
                  as="h3"
                  className="text-center text-lg font-medium leading-6 text-gray-900"
                >
                  Welcome to{' '}
                  <p>
                    Supreme Mortal Kombat Tournament {new Date().getFullYear()}
                  </p>
                </Dialog.Title>
                <div className="mt-2">
                  <p className="text-sm text-gray-500">
                    Due to covid restrictions our tournament will be postponed
                    until future notice
                  </p>
                  <p>Shang Tsung</p>
                </div>
                <div className="mt-4">
                  <button
                    type="button"
                    className="inline-flex justify-center px-4 py-2 text-sm font-medium text-red-900 bg-red-100 border border-transparent rounded-md hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-red-500"
                    onClick={closeModal}
                  >
                    Dare to Disagree
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
