const Post = () => {
    return (  
        <div className="w-full">
            <form action="">
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-1 gap-2">
                    <div className="mb-4 w-full">
                        <div className="mt-2 bg-gray-50 border border-gray-300 rounded-md p-2 w-full">
                            <select className="outline-0 w-full pl-4 pr-2 bg-transparent text-gray-500">
                                <option value="" disabled selected>Category</option>
                                    <option value="technology">technology</option>
                                    <option value="world">world</option>
                                    <option value="energy">energy</option>
                                    <option value="ai">ai</option>
                                    <option value="education">education</option>
                                    <option value="finance">finance</option>
                                    <option value="health">health</option>
                                    <option value="sports">sports</option>
                                    <option value="culture">culture</option>
                            </select>
                        </div>
                    </div>
                    <div className="mb-4 w-full">
                        <div className="mt-2 bg-gray-50 border border-gray-300 rounded-md p-2 w-full">
                            <input
                                type="text"
                                placeholder="Title"
                                className="outline-0 w-full pl-4 placeholder-gray-500 text-gray-900"
                            />
                        </div>
                    </div>
                    <div className="mb-4 w-full">
                        <div className="mt-2 bg-gray-50 border border-gray-300 rounded-md p-2 w-full">
                            <textarea
                                type="text" placeholder="Details"
                                className="outline-0 w-full pl-4 placeholder-gray-500 text-gray-900">
                            </textarea>
                        </div>
                    </div>
                    <div className="mb-4 w-full">
                        <div className="mt-2 bg-gray-50 border border-gray-300 rounded-md p-2 w-full">
                            <textarea
                                type="text" placeholder="Description"
                                className="outline-0 w-full pl-4 placeholder-gray-500 text-gray-900">
                            </textarea>
                        </div>
                    </div>
                </div>    
                <div className="max-w-xl mx-auto">
                    <div className="mt-2 bg-gray-50 border border-gray-300 rounded-md p-2 w-full">
                        <input
                            type="file"
                            className="outline-0 w-full pl-2 text-gray-500 cursor-pointer"
                            accept="image/*"
                        />
                    </div>
                </div>
                <div className="w-full mt-4">
                    <button className="w-full uppercase bg-gradient-to-r from-blue-600 to-sky-400 hover:from-blue-800 hover:to-sky-600 active:from-blue-800 active:to-sky-600 p-2 font-semibold hover:bg-black active:bg-black transition-colors duration-300 shadow-sm cursor-pointer">Add Post</button>
                </div>
            </form>
        </div>
    );
}
 
export default Post;