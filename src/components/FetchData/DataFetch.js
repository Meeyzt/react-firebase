import { db } from "../../firebase/firebase";

function DataFetch() {
  const FetchData = () => {
    let idSelect = document.getElementById("select");
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
  return FetchData();
}

export default DataFetch;
