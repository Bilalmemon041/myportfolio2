// import Footer from "@/components/Footer";
import Image from "next/image";


export default function Home() {
  return (
    <main className="bg-slate-800  ">
      
      <div id="main" className="flex justify-between mb-10 ">
        {/* right section */}
        <section className="m-[150px]  text-slate-50 " >
          <div className="text-5xl font-bold text-white ">YOUR SITE  <div className="mt-4 text-yellow-300" > OUR RESPOSIBILTY </div> </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus ipsa veritatis repellat maiores alias in? .</p>
          <div className="mt-7 space-x-9">
            <button className="w-[150px] h-10 bg-white text-black" >Read More</button>
            <button className="w-[150px] h-10 bg-yellow-400 text-black hover:bg-gray-950 hover:text-yellow-400">Get a Quate</button>
          </div>
        </section> <br />
        {/* left side section */}
        <section className="hidden lg:block mr-[120px] " >
          <div className="w-[150%] mr-8" ><Image  width={500} layout="responsive" height={400} src="/bilal2.png" alt=""/></div>
        </section>
      </div>

       <section className="text-center text-white my-9 mt-[100px]">
        <h1 className="text-5xl font-bold mb-4">DEVELOPER</h1>
        <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus minus ea reprehenderit ratione excepturi cumque est unde harum explicabo quas accusantium voluptatibus fugiat omnis, nesciunt officiis facilis saepe deleniti magnam fugit eaque ipsum. Saepe voluptatibus eaque quos totam animi deleniti, velit quis, quam eius officiis, repudiandae maiores distinctio soluta in. Obcaecati perspiciatis expedita, autem magnam neque accusantium sit consequuntur dolorum cum corporis minima atque temporibus nulla odio voluptate, quas, quaerat tenetur reiciendis. Optio delectus voluptatem, rem distinctio commodi nemo obcaecati nulla fugit.</div>
       </section>

      <section className=" text-white my-[100px]">
        <div >
            <section>
              <h1 className="text-center  text-6xl font-mono">SERVICES</h1>
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
      </section>
      <div>
            <h1 className="text-4xl font-semibold text-center my-4 mt-8 text-yellow-100">GET IN TOUCH</h1>
            <div className="flex justify-center">
                <form action="" className="w-[40%] text-center">
                     <div className=" bg-white h-[50px] flex mt-6 items-center">
                         <label className="ml-3 font-semibold">Name</label>
                         <input type="text"  />
                     </div>
                     <div className=" bg-white h-[50px] items-center flex mt-6">
                         <label className="ml-3 font-semibold">EMAIL</label>
                         <input type="mail"  />
                     </div>
                     <div className=" bg-white h-[50px] items-center flex mt-6">
                         <label className="ml-3 font-semibold">Number</label>
                         <input type="number"  />
                     </div>
                     <div className=" bg-white h-[90px] items-center flex mt-6">
                         <label className="ml-3 font-semibold">Massege</label>
                         <input type="Massage"  />
                         
                     </div>
                     <button className="bg-gray-300 w-[150px] h-[40px] mt-10">SEND</button>

               </form>
            </div>
        </div>

      {/* footor */}
      {/* <Footer /> */}
    </main>
  );
}
 
