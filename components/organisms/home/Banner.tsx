import React from 'react'
const Banner = () => (
  <>
    <div className="w-full bg-cover bg-center bg-home-banner">
      <div className="flex flex-col justify-center items-center p-16 lg:p-40 text-center h-full">
        <h1 className="text-6xl sm:text-8xl font-serif text-white">
          Imagine your ideal outdoor space and{' '}
          <span className="sub-title block text-7xl sm:text-9xl font-bold">start living it</span>
        </h1>
      </div>
    </div>
    <style jsx>{`
      h1 {
        text-shadow: 2px 3px 8px #000;
      }
      .sub-title {
        color: #f7ea72;
      }

      .bg-home-banner {
        min-height: 55vh;
      }

      @media (min-width: 640px) {
        .bg-home-banner {
          min-height: 70vh;
        }
      }
    `}</style>
  </>
)

export default Banner
