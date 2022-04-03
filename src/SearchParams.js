import { useState } from "react";
const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];

const SearchParams = () => {
  const [location, setLocation] = useState("Seattle, WA");
  const [animal, setAnimal] = useState("");
  const [breed, setBreed] = useState("");
  const breeds = [];

  const handleChangeEvent = (e) => {
    setLocation(e.target.value);
  };

  // handleChangeEvent in the input (controlled) creates a new fn anytime the re-render fn gets called
  // good for validation
  return (
    <div className="search-params">
      <form onSubmit={handleChangeEvent}>
        {" "}
        {/* capture the entire event and pull out eth out of the form and submit it */}
        <label htmlFor="location">
          Location {location}
          <input
            id="location"
            // value={location}
            placeholder="Location"
            // onChange={handleChangeEvent}
          />
        </label>
        <label htmlFor="animal">
          Animal
          <select
            id="animal"
            value={animal}
            onChange={(e) => {
              setAnimal(e.target.value);
              setBreed("");
            }}
            onBlur={(e) => {
              {
                /* use both onChange and onBlur event */
                /* when browsers navigates away from a select sth or via a different tools like a screen reader / accessibilty tool, they will not fire the change event sth*/
              }
              setAnimal(e.target.value);
              setBreed("");
            }}
          >
            <option />
            {ANIMALS.map((animal) => (
              <option key={animal} value={animal}>
                {animal}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="breed">
          Breed
          <select
            disabled={!breeds.length}
            id="breed"
            value={breed}
            onChange={(e) => setBreed(e.target.value)}
            onBlur={(e) => setBreed(e.target.value)}
          >
            <option />
            {breeds.map((breedsItem) => (
              <option key={breedsItem} value={breedsItem}>
                {breedsItem}
              </option>
            ))}
          </select>
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;
