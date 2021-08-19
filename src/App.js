import "./App.css";
import { db } from "./firebase/firebase";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";

function App() {
  const [item, setItem] = useState({});
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [img, setImg] = useState("");
  const [price, setPrice] = useState("");
  const [pDate, setPDate] = useState("");
  let idSelect = document.getElementById("select");
  const addItem = () => {
    const addItemRef = db.collection("Items").doc(uuidv4());
    addItemRef
      .set(item)
      .then(() => {
        console.log("Document successfully writen");
        getData();
      })
      .catch((error) => console.log("Error", error));
  };
  const getData = () => {
    idSelect = document.getElementById("select");
    idSelect.innerHTML = "<option>ID's</option>";
    db.collection("Items")
      .get()
      .then((querrySnapshot) => {
        querrySnapshot.forEach((doc) => {
          idSelect.innerHTML =
            idSelect.innerHTML + `<option>${doc.id}</option>`;
        });
      })
      .catch((error) => console.log("getData : ", error));
  };
  const delData = () => {
    const idSelectvalue = idSelect.value;
    if (idSelectvalue && idSelectvalue !== "ID's") {
      db.collection("Items")
        .doc(idSelectvalue)
        .delete()
        .then(() => {
          console.log("Selected Item deleted! \n ID: ", idSelectvalue);
          getData();
        });
    }
  };
  const listData = () => {
    const content = document.getElementById("Content");
    const slct = document.getElementById("select");
    if (slct) {
      let val = slct.value;
      db.collection("Items")
        .doc(val)
        .get()
        .then((doc) => {
          if (doc.exists) {
            content.innerHTML = ` <div>ID: ${doc.id} </div>
          <div>desc: ${doc.data().description} </div>
          <div>name: ${doc.data().name} </div>
          <div>price: ${doc.data().price}</div>
          <div>publishDate: ${doc.data().publishDate} </div>`;
          } else {
            content.innerHTML = "<div>No Such Data</div>";
          }
        })
        .catch((error) => console.log("getData : ", error));
    }
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    await setItem({
      name: name,
      description: desc,
      image: img,
      price: price,
      publishDate: pDate,
    });
    addItem();
  };
  return (
    <div className="App">
      <label>Firebase</label>
      <br />
      <button onClick={() => getData()}>get data</button>
      <br />
      <select id="select" onChange={() => listData()}>
        <option>ID's</option>
      </select>
      <button
        onClick={() => {
          delData();
        }}
      >
        delete data
      </button>
      <br />
      <br />
      <br />
      <br />
      <div id="Content"></div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <form method="post" onSubmit={(e) => handleSubmit(e)}>
        <div>
          <label htmlFor="name">Name</label>
          <br />
          <input
            id="name"
            onChange={(e) => setName(e.target.value)}
            type="text"
            value={name}
            placeholder="name"
          />
        </div>
        <div>
          <label htmlFor="description">description</label>
          <br />
          <input
            id="description"
            type="text"
            placeholder="description"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="image">image</label>
          <br />
          <input
            id="image"
            value={img}
            onChange={(e) => setImg(e.target.value)}
            type="text"
            placeholder="image"
          />
        </div>
        <div>
          <label htmlFor="price">price</label>
          <br />
          <input
            id="price"
            value={price}
            type="text"
            placeholder="price"
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="publishDate">publishDate</label>
          <br />
          <input
            id="publishDate"
            type="text"
            value={pDate}
            placeholder="publishDate"
            onChange={(e) => setPDate(e.target.value)}
          />
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
