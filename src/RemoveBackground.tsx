import { useState } from "react";
import { FileUploader } from "react-drag-drop-files";

const fileTypes = ["JPG", "PNG", "GIF"];

export const RemoveBackground = () => {
  const [image, setImage] = useState<any>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  function removeBackgroundAPI(img: any) {
    setIsLoading(true);
    setImage(URL.createObjectURL(img));
    const formdata = new FormData();
    formdata.append("file", img);

    const requestOptions = {
      method: "POST",
      body: formdata,
    };

    fetch("http://72.230.76.236:5000", requestOptions)
      .then((response) => {
        response.blob().then((blobresp) => {
          setImage(URL.createObjectURL(blobresp));
          setIsLoading(false);
        });
      })
      .catch((error) => {
        setIsLoading(false);
        console.log("error", error);
      });
  }

  return (
    <div>
      <h1>Remove Background</h1>
      {isLoading && <h2>Loading.....</h2>}
      <FileUploader
        handleChange={removeBackgroundAPI}
        name="file"
        types={fileTypes}
      />
      <img src={image} />
    </div>
  );
};
