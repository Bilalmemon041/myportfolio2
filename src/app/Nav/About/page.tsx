// import Footer from "@/components/Footer";

export default function About(){
    return (
        <section className=" bg-gray-800 text-white">
        <div >
            <section>
              <h1 className="text-center text-6xl font-mono">SERVICES</h1>
            </section>
            <section className="flex justify-evenly mt-6">
              <div className="border-2 rounded-lg w-[390px] h-[250px]"> 
                <h1 className="ml-5 my-4 text-xl font-bold">01</h1>
                <h1 className="text-center my-4 text-xl font-bold">WEB DEVELOPER</h1>
                <p className="my-3 mx-6">Get custom web development solutions with modern designs, responsive layouts, and smooth animations tailored to your needs.</p>
                <button className="mx-6 mt-5 border rounded w-[120px] h-[30px]" >Contact ME</button>
              </div>
              <div className="border-2 rounded-lg w-[390px] h-[250px]"> 
                <h1 className="ml-5 my-4 text-xl font-bold">02</h1>
                <h1 className="text-center my-4 text-xl font-bold">WEB DESIGN</h1>
                <p className="my-3 mx-6">Get custom web development solutions with modern designs, responsive layouts, and smooth animations tailored to your needs.</p>
                <button className="mx-6 mt-5 border rounded w-[120px] h-[30px]" >Contact ME</button>
              </div>
              <div className="border-2 rounded-lg w-[390px] h-[250px]"> 
                <h1 className="ml-5 my-4 text-xl font-bold">03</h1>
                <h1 className="text-center my-4 text-xl font-bold">WEB MANAGER</h1>
                <p className="my-3 mx-6">Get custom web development solutions with modern designs, responsive layouts, and smooth animations tailored to your needs.</p>
                <button className="mx-6 mt-5 border rounded w-[120px] h-[30px]" >Contact ME</button>
              </div>
            </section>
             
        </div>
        {/* <Footer /> */}
      </section>
    )
}