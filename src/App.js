import "./App.css";
import { db } from "./firebase/firebase";
import { v4 as uuidv4 } from "uuid";

function App() {
  const addItem = (name, desc, image, price, publishDate) => {
    const addItemRef = db.collection("Items").doc(uuidv4());
    addItemRef
      .set({
        name: name,
        description: desc,
        image: image,
        price: price,
        publishDate: publishDate,
      })
      .then(() => console.log("Document successfully writen"))
      .catch((error) => console.log("Error", error));
  };
  const getData = () => {
    db.collection("Items")
      .get()
      .then((querrySnapshot) => {
        querrySnapshot.forEach((doc) => {
          console.log(doc.id, " =>", doc.data());
        });
      })
      .catch((error) => console.log("getData : ", error));
  };
  return (
    <div className="App">
      <label>Firebase</label>
      <br />
      <button
        onClick={() => {
          addItem("name112", "descd", "imgs", "price", "11000");
        }}
      >
        set data
      </button>
      <br />
      <button
        onClick={() => {
          getData();
        }}
      >
        get data
      </button>
    </div>
  );
}

export default App;
