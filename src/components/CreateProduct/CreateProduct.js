import React, { useState } from "react";

import { connect } from "react-redux";
import { useFirebase } from "react-redux-firebase";
import * as actions from "../../store/actions";

const CreateProduct = ({ createProduct }) => {
  const firebase = useFirebase();

  const [product, setProduct] = useState({
    name: "",
    category: "",
    quantity: 1,
    description: "",
    images: [],
  });

  const uploadFiles = (e) => {
    if (!e.target.files[0]) return;

    const file = e.target.files[0];
    let storageRef = firebase.storage().ref(`products/${file.name}`);

    const uploadTask = storageRef.put(file);

    // Listen for state changes, errors, and completion of the upload.
    uploadTask.on(
      firebase.storage.TaskEvent.STATE_CHANGED, // or 'state_changed'
      (_) => {},
      (error) => {
        // A full list of error codes is available at
        switch (error.code) {
          case "storage/unauthorized":
            // User doesn't have permission to access the object
            break;
          case "storage/canceled":
            // User canceled the upload
            break;

          // ...

          case "storage/unknown":
            // Unknown error occurred, inspect error.serverResponse
            break;
          default:
            console.log("This is the default");
        }
      },
      () => {
        // Upload completed successfully, now we can get the download URL
        uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
          console.log("File available at", downloadURL);
          const images = [...product.images, downloadURL];
          setProduct({ ...product, images });
        });
      }
    );
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setProduct({
      ...product,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(product);
    await createProduct(product);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="name"
          onChange={handleChange}
          value={product.name}
        />
        <input
          type="text"
          name="category"
          placeholder="category"
          onChange={handleChange}
          value={product.category}
        />
        <input
          type="text"
          name="quantity"
          placeholder="quantity"
          onChange={handleChange}
          value={product.quantity}
        />
        <input
          type="text"
          name="description"
          placeholder="description"
          onChange={handleChange}
          value={product.description}
        />
        <input type="file" multiple onChange={uploadFiles} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
const mapDispatchToProps = (dispatch) => {
  return {
    createProduct: (newProduct) => dispatch(actions.createProduct(newProduct)),
  };
};
export default connect(null, mapDispatchToProps)(CreateProduct);
