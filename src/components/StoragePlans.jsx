import { useState } from "react";


function StoragePlans({amount, setAmount}) {
    
const onOptionChange = (e) => {
    setAmount(parseInt(e.target.value));
}

  return (
    <div>
        <form class="w-full max-w-screen-md mx-auto">
            <fieldset class="space-y-6">
            <div class="grid sm:grid-cols-4 gap-6">
                <label for="plan-hobby" class="relative flex flex-col bg-white p-5 rounded-lg shadow-md cursor-pointer">
                <span class="font-semibold text-gray-500 leading-tight uppercase mb-3">Portfolio</span>
                <span class="font-bold text-gray-900">
                    <span class="text-4xl">100</span>
                    <span class="text-2xl uppercase">Mo</span>
                </span>
                <input type="radio" name="plan" id="plan-hobby" checked={amount === 100} onChange={onOptionChange} value="100" class="absolute h-0 w-0 appearance-none" />
                <span aria-hidden="true" class="hidden absolute inset-0 border-2 border-green-500 bg-green-200 bg-opacity-10 rounded-lg">
                    <span class="absolute top-4 right-4 h-6 w-6 inline-flex items-center justify-center rounded-full bg-green-200">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5 text-green-600">
                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                    </svg>
                    </span>
                </span>
                </label>
                <label for="plan-growth" class="relative flex flex-col bg-white p-5 rounded-lg shadow-md cursor-pointer">
                <span class="font-semibold text-gray-500 leading-tight uppercase mb-3">Mini projet</span>
                <span class="font-bold text-gray-900">
                    <span class="text-4xl">500</span>
                    <span class="text-2xl uppercase">Mo</span>
                </span>
                <input type="radio" name="plan" id="plan-growth" checked={amount === 500} value="500" onChange={onOptionChange} class="absolute h-0 w-0 appearance-none" />
                <span aria-hidden="true" class="hidden absolute inset-0 border-2 border-green-500 bg-green-200 bg-opacity-10 rounded-lg">
                    <span class="absolute top-4 right-4 h-6 w-6 inline-flex items-center justify-center rounded-full bg-green-200">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5 text-green-600">
                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                    </svg>
                    </span>
                </span>
                </label>
                <label for="plan-business" class="relative flex flex-col bg-white p-5 rounded-lg shadow-md cursor-pointer">
                <span class="font-semibold text-gray-500 leading-tight uppercase mb-3">Appli</span>
                <span class="font-bold text-gray-900">
                    <span class="text-4xl">1</span>
                    <span class="text-2xl uppercase">Go</span>
                </span>
                <input type="radio" name="plan" id="plan-business" checked={amount === 1024} onChange={onOptionChange} value="1024" class="absolute h-0 w-0 appearance-none" />
                <span aria-hidden="true" class="hidden absolute inset-0 border-2 border-green-500 bg-green-200 bg-opacity-10 rounded-lg">
                    <span class="absolute top-4 right-4 h-6 w-6 inline-flex items-center justify-center rounded-full bg-green-200">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5 text-green-600">
                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                    </svg>
                    </span>
                </span>
                </label>
                <label for="plan-enterprise" class="relative flex flex-col bg-white p-5 rounded-lg shadow-md cursor-pointer">
                <span class="font-semibold text-gray-500 leading-tight uppercase mb-3">Modern App</span>
                <span class="font-bold text-gray-900">
                    <span class="text-4xl">4</span>
                    <span class="text-2xl uppercase">Go</span>
                </span>
                <input type="radio" name="plan" id="plan-enterprise" value="4096" checked={amount === 4096} onChange={onOptionChange} class="absolute h-0 w-0 appearance-none" />
                <span aria-hidden="true" class="hidden absolute inset-0 border-2 border-green-500 bg-green-200 bg-opacity-10 rounded-lg">
                    <span class="absolute top-4 right-4 h-6 w-6 inline-flex items-center justify-center rounded-full bg-green-200">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5 text-green-600">
                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                    </svg>
                    </span>
                </span>
                </label>
            </div>
            </fieldset>
        </form>
    </div>
  )
}

export default StoragePlans