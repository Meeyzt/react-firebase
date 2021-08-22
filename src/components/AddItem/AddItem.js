import { db } from "../../firebase/firebase";
import { v4 as uuidv4 } from "uuid";
import DataFetch from "../FetchData/DataFetch";

function AddItem(item) {
  const addItem = () => {
    const addItemRef = db.collection("Items").doc(uuidv4());
    addItemRef
      .set(item)
      .then(() => {
        console.log("Document successfully writen");
        DataFetch();
      })
      .catch((error) => console.log("Error", error));
  };
  return addItem();
}

export default AddItem;
