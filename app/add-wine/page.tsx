export default function AddWine() {
  return (
    <main className="p-4">
      <form
        className="max-w-md mx-auto p-6 rounded-md shadow-md"
      >
     <h1 className="text-4xl font-bold text-center text-white mb-4">
            Add Your Wine
          </h1>
          <hr />

        <div className="mb-4">
          <label htmlFor="name" className="block text-white-600 text-sm font-semibold mb-2">
            Wine Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full px-3 py-2 border rounded-md"
 
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="year" className="block text-white-600 text-sm font-semibold mb-2">
            Year:
          </label>
          <input
            type="number"
            id="year"
            name="year"
            className="w-full px-3 py-2 border rounded-md"
       
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="type" className="block text-white-600 text-sm font-semibold mb-2">
            Type:
          </label>
          <select
            id="type"
            name="type"
            className="w-full px-3 py-2 border rounded-md text-black"
       
            required
          >
            {<option value="">Type of Wine</option>}
            {<option value="Red">Red</option>}
            {<option value="White">White</option>}
            {<option value="Rosé">Rosé</option>}
            {<option value="White Blend">White Blend</option>}
            {<option value="Red Blend">Red Blend</option>}
          </select>
        </div>

        <div className="mb-4">
          <label htmlFor="varietal" className="block text-white-600 text-sm font-semibold mb-2">
            Varietal:
          </label>
          <select
            id="varietal"
            name="varietal"
            className="w-full px-3 py-2 border rounded-md text-black"
      
            required
          >
            
            {<option value="">Type of Varietal</option>}
            {<option value=" Cabernet Sauvignon">Cabernet Sauvignon</option>}
            {<option value="Merlot">Merlot</option>}
            {<option value="Shiraz,">Shiraz,</option>}
            {<option value="Chenin Blanc">Chenin Blanc</option>}
            {<option value="Sauvignon Blanc,">Sauvignon Blanc</option>}
          </select>
        </div>

        <div className="mb-4">
          <label htmlFor="rating" className="block text-white-600 text-sm font-semibold mb-2">
            Rating:
          </label>
          <input
            type="number"
            id="rating"
            name="rating"
            min="1"
            max="5"
            step="0.1"
            className="w-full px-3 py-2 border rounded-md"
           
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="consumed" className="block text-white-600 text-sm font-semibold mb-2">
            Consumed:
          </label>
          <select
            id="consumed"
            name="consumed"
            className="w-full px-3 py-2 border rounded-md text-black"
         
            required
          >
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>

        <div className="mb-4">
          <label htmlFor="dateConsumed" className="block text-white-600 text-sm font-semibold mb-2">
            Date Consumed:
          </label>
          <input
            type="date"
            id="dateConsumed"
            name="dateConsumed"
            className="w-full px-3 py-2 border rounded-md"
           
          />
        </div>

        <div className="mb-4">
          <button type="submit" className="w-full bg-sky-500 text-white p-3 rounded-md hover:bg-sky-600">
            Save 
          </button>
        </div>
      </form>
    </main>
  );
};


