import React from 'react'

function LeftSider() {
  return (
    <div className='fixed left-0 bottom-0 sm:static'>
        <div className='flex flex-col items-center px-10 sm:flex-row'>
            <div className='flex flex-col gap-3'>
                <a href='https://github.com/sebonaifa6417' rel="noreferrer" target="_blank">
                    <i class="ri-github-line text-gray-400 text-xl"></i>
                </a>
                <a href='https://linkedin.com/in/sebonaifa' rel="noreferrer" target="_blank">
                    <i class="ri-linkedin-line text-gray-400 text-xl"></i>
                </a>
                <a href='mailto:sebonaifa777@gmail.com' rel="noreferrer" target="_blank">
                    <i class="ri-mail-line text-gray-400 text-xl"></i>
                </a>
                <a href='https://t.me/telegram/sebonaifa6418' rel="noreferrer" target="_blank">
                    <i class="ri-telegram-line text-gray-400 text-xl"></i>
                </a>
                <a href='https://instagram.com/sebonaifa' rel="noreferrer" target="_blank">
                    <i class="ri-instagram-line text-gray-400 text-xl"></i>
                </a>
        </div>
        <div className='w-[1px] h-52 bg-[#125f63] sm:hidden'>
        </div>
        </div>
    </div>
  )
}

export default LeftSider;