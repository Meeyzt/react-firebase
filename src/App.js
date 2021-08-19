import "./App.css";
import { db } from "./firebase/firebase";
const itemRef = db.collection("ECommerce").doc("Items");
function App() {
  itemRef
    .get()
    .then((doc) => {
      if (doc.exists) {
        console.log("Document data:", doc.data());
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
    })
    .catch((error) => {
      console.log("Error getting document:", error);
    });
  const dellItem = () => {
    itemRef
      .delete()
      .then(() => console.log("deleted"))
      .catch((error) => console.log("Delete Error", error));
  };
  const addItem = (name, desc, image, price, publishDate) => {
    itemRef
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
  return (
    <div className="App">
      <label>Firebase</label>
      <br />
      <button
        onClick={() => {
          addItem("name111", "descd", "imgs", "price", "11000");
        }}
      >
        set data
      </button>
      <br />
      <button onClick={() => dellItem()}>Del data</button>
    </div>
  );
}

export default App;
