const Gallery = () => {
    return ( 
        <section class="overflow-hidden text-white bg-[#202836] rounded-xl">
        <div class="container px-4 py-2 mx-auto">
            <div className="flex items-center justify-center p-2">
                <span className="font-bold text-xl">Your Gallery</span>
            </div>
            <hr className="text-gray-500 mx-auto w-4/5 p-2"/>
          <div class=" columns-2">
            <div class="flex flex-wrap">
              <div class="w-full p-1 md:p-2">
                <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                  src="https://images.unsplash.com/photo-1676381901411-bd74b1292899?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1117&q=80"/>
              </div>
            </div>
            <div class="flex flex-wrap">
              <div class="w-full p-1 md:p-2">
                <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                  src="https://images.unsplash.com/photo-1533682805518-48d1f5b8cd3a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aG9uZ2tvbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"/>
              </div>
            </div>
            <div class="flex flex-wrap">
              <div class="w-full p-1 md:p-2">
                <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                  src="https://images.unsplash.com/photo-1542902093-d55926049754?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8aG9uZ2tvbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"/>
              </div>
            </div>
            <div class="flex flex-wrap">
              <div class="w-full p-1 md:p-2">
                <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                  src="https://images.unsplash.com/photo-1552620819-a99f6dc508ec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGhvbmdrb25nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"/>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center my-4">
            <div className="flex items-center justify-center p-2 w-fit bg-blue-600 rounded-xl px-4 hover:bg-gray-600 hover:scale-90 duration-500 cursor-pointer">
                <span className="font-bold text-md">Set Your Own Gallery</span>
            </div>
          </div>
        </div>
      </section>
     );
}
 
export default Gallery;