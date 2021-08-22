import React, { useEffect, useState } from "react";
import AddItem from "../AddItem/AddItem";

function Index() {
  const [item, setItem] = useState();
  useEffect(() => {
    item && AddItem(item);
  }, [item]);
  const handleSubmit = async (event) => {
    event.preventDefault();
    const { name, desc, img, price, pDate } = event.target.elements;
    await setItem({
      name: name.value,
      description: desc.value,
      image: img.value,
      price: price.value,
      publishDate: pDate.value,
    });
  };
  return (
    <form method="post" onSubmit={(e) => handleSubmit(e)}>
      <div>
        <label htmlFor="name">Name</label>
        <br />
        <input id="name" name="name" type="text" placeholder="name" />
      </div>
      <div>
        <label htmlFor="description">description</label>
        <br />
        <input
          id="description"
          name="desc"
          type="text"
          placeholder="description"
        />
      </div>
      <div>
        <label htmlFor="image">image</label>
        <br />
        <input id="image" name="img" type="text" placeholder="image" />
      </div>
      <div>
        <label htmlFor="price">price</label>
        <br />
        <input id="price" name="price" type="text" placeholder="price" />
      </div>
      <div>
        <label htmlFor="publishDate">publishDate</label>
        <br />
        <input
          id="publishDate"
          name="pDate"
          type="text"
          placeholder="publishDate"
        />
      </div>
      <button>Submit</button>
    </form>
  );
}

export default Index;
