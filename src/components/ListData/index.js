import { db } from "../../firebase/firebase";

function Index() {
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
  return (
    <select id="select" onChange={() => listData()}>
      <option>ID's</option>
    </select>
  );
}

export default Index;
