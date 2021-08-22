import { db } from "../../firebase/firebase";
import DataFetch from "../FetchData/DataFetch";

function Index() {
  const delData = () => {
    let idSelect = document.getElementById("select");
    const idSelectvalue = idSelect.value;
    if (idSelectvalue && idSelectvalue !== "ID's") {
      db.collection("Items")
        .doc(idSelectvalue)
        .delete()
        .then(() => {
          console.log("Selected Item deleted! \n ID: ", idSelectvalue);
          DataFetch();
        });
    }
  };
  return (
    <button
      onClick={() => {
        delData();
      }}
    >
      delete data
    </button>
  );
}

export default Index;
