import React from 'react'

const Footer = () => {
  return (
    <footer class="bg-dark pb-7">
      <div class="container">
        <div class="w-full border-t border-slate-700 pt-7">
          <p class="text-center text-xs font-medium text-slate-500">
          © 2023 Copyright: build with
            <a href="https://tailwindcss.com/" target="_blank" class="font-bold text-primary" rel="noreferrer"
              > Tailwind CSS & React Js</a>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer