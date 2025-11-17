import React from "react"

function Loader() {
  return (
    <div className="h-screen flex bg-primary items-center justify-center fixed inset-0 ">
        <div className="flex gap-5 text-8xl font-semibold sm:text-5xl">
        <h1 className="text-secondary s">S</h1>
        <h1 className="text-white i">I</h1>
        <h1 className="text-tertiary n">N</h1>
    </div>
</div>
  )
}

export default Loader