
import './App.css';
import image_1 from './assets/calvin_and_hobbes_comics_____j_1920x1200.jpg';
function App() {
  return (
    
    <>
    <div class="sm:space-y-0 sm:space-x-6 sm:py-4 sm:flex items-center py-8 px-8 justify-center mx-auto from-green-400 to-blue-600 
    bg-gradient-to-r text-white w-full flex flex-col" >

      <div class="my-4 text-2xl font-bold"> Hotel Search </div>
         <div class="p-3 md:w4/5 sm:w-full bg-white flex items-center rounded-full shadow-xl my-0.5">
            <input class=" rounded-l-full w-full px-6 text-gray-700 leading-tight focus:outline-none" id="serch type" placeholder='Search...'/>
            <div class='p-1'>
              <button class='bg-blue-400 text-white rounded-full p-2 hover:bg-blue-900 focus:outline-none w-12 h-12 flex
              items-center justify-center'> icon</button>
            </div>
          </div> 
    </div>

          <div class='container md:w-4/5  py-2 px-2 mx-auto'>
            <div class='flex sm:flex-col md:flex-row  justify-between'> 
                <div class='bg-white shadow p-3 rounded lg:w-64 mx-2 py-2'>
                    
                    <div  class='bg-cover bg-gray-300 h-32 rounded-md'>
                      <img src={image_1}/>  
                    </div>  

                    <div class='mt-6'>
                      <p class='text-lg text-bold tracking-wide text-gray-600 mg-2'>Title</p>
                      <p class='text-sm text-gray-600  fond-hairline'> Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                    </div>

                </div>

                <div class='bg-white shadow p-3 rounded lg:w-64 mx-2 py-2'>
                    
                    <div  class='bg-cover bg-gray-300 h-32 rounded-md'>
                      <img src={image_1}/>  
                    </div>  

                    <div class='mt-6'>
                      <p class='text-lg text-bold tracking-wide text-gray-600 mg-2'>Title</p>
                      <p class='text-sm text-gray-600  fond-hairline'> Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                    </div>

                </div>


                <div class='bg-white shadow p-3 rounded lg:w-64 mx-2 py-2'>
                    
                    <div  class='bg-cover bg-gray-300 h-32 rounded-md'>
                      <img src={image_1}/>  
                    </div>  

                    <div class='mt-6'>
                      <p class='text-lg text-bold tracking-wide text-gray-600 mg-2'>Title</p>
                      <p class='text-sm text-gray-600  fond-hairline'> Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                    </div>

                </div>


                <div class='bg-white shadow p-3 rounded lg:w-64 mx-2 py-2'>
                    
                    <div  class='bg-cover bg-gray-300 h-32 rounded-md'>
                      <img src={image_1}/>  
                    </div>  

                    <div class='mt-6'>
                      <p class='text-lg text-bold tracking-wide text-gray-600 mg-2'>Title</p>
                      <p class='text-sm text-gray-600  fond-hairline'> Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                    </div>

                </div>


                <div class='bg-white shadow p-3 rounded lg:w-64 mx-2 py-2'>
                    
                    <div  class='bg-cover bg-gray-300 h-32 rounded-md'>
                      <img src={image_1}/>  
                    </div>  

                    <div class='mt-6'>
                      <p class='text-lg text-bold tracking-wide text-gray-600 mg-2'>Title</p>
                      <p class='text-sm text-gray-600  fond-hairline'> Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                    </div>

                </div>

            </div>
          </div>

          

    </>
  );
}

export default App;
