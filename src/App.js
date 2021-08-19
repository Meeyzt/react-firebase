import "./App.css";
import { db } from "./firebase/firebase";

function App() {
  const docRef = db.collection("ECommerce").doc("Items");
  docRef
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
  return (
    <div className="App">
      <label>Fireabase</label>
    </div>
  );
}

export default App;
