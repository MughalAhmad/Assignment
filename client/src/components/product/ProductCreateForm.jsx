import Input from "../common/Input";
import { useFormik } from "formik";
import * as Yup from "yup";
import Image from "../common/Image";
import { upload } from "../utils/cloudinary";
import axios from "axios";
import { useState } from "react";
import Loader from "../common/Loader";

const productSchema = Yup.object({
  name: Yup.string().min(3).required("* Name Required"),
  price: Yup.number()
    .typeError("* Must be a number")
    .required("* Price Required"),
  quantity: Yup.number()
    .typeError("* Must be a number")
    .required("* Quantity Required"),
  img1: Yup.string().required("* Image Required"),
});

const ProductCreateForm = () => {
  const [loader, setLoader] = useState(false);

  const {
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
    setFieldValue,
    resetForm,
  } = useFormik({
    initialValues: {
      name: "",
      price: "",
      quantity: "",
      img1: "",
      img2: "",
      img3: "",
      img4: "",
      img5: "",
      img6: "",
      imgUrl1: "",
      imgUrl2: "",
      imgUrl3: "",
      imgUrl4: "",
      imgUrl5: "",
      imgUrl6: "",
    },

    validationSchema: productSchema,
    enableReinitialize: true,
    onSubmit: async (values) => {
      setLoader(true);
      try {
        const data1 = await upload(values.img1);
        values.imgUrl1 = data1.url;
        const data2 = await upload(values.img2);
        values.imgUrl2 = data2.url;
        const data3 = await upload(values.img3);
        values.imgUrl3 = data3.url;
        const data4 = await upload(values.img4);
        values.imgUrl4 = data4.url;
        const data5 = await upload(values.img5);
        values.imgUrl5 = data5.url;
        const data6 = await upload(values.img6);
        values.imgUrl6 = data6.url;
      } catch (error) {
        console.log(error);
      }

      const body = {
        name: values.name,
        price: values.price,
        quantity: values.quantity,
        imgUrl1: values.imgUrl1,
        imgUrl2: values.imgUrl2,
        imgUrl3: values.imgUrl3,
        imgUrl4: values.imgUrl4,
        imgUrl5: values.imgUrl5,
        imgUrl6: values.imgUrl6,
      };

      console.log("body", body);
      try {
        const { data } = await axios.post(
          "http://localhost:3000/api/v1/product/new",
          body
        );
        console.log(data);
        if (data && !data.hasError) {
          setLoader(false);
          alert(data.msg);
          resetForm();
        } else {
          alert(data.msg);
        }
      } catch (error) {
        console.log(error);
        alert(data.msg);
      }
    },
  });

  return (
    <div className="w-full h-full  flex flex-col justify-center items-center relative ">
      <h1 className="text-2xl text-[#00A0DE] font-bold py-3">
        Create New Product
      </h1>
      <div className="w-auto border px-5 py-3 rounded">
        <div className="mb-2 flex flex-col gap-2 xl:flex-row ">
          <div className="w-full ">
            <label className="mb-1 block text-black ">Product Name</label>
            <Input
              placeholder={"Enter your product name"}
              name={"name"}
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
              feedback={[errors.name, touched.name]}
            />
          </div>
        </div>

        <div className="mb-2 flex flex-col gap-2 xl:flex-row ">
          <div className="w-full ">
            <label className="mb-1 block text-black ">Product Price</label>
            <Input
              placeholder={"Enter your product price"}
              name={"price"}
              value={values.price}
              onChange={handleChange}
              onBlur={handleBlur}
              feedback={[errors.price, touched.price]}
            />
          </div>
        </div>

        <div className="mb-2 flex flex-col gap-2 xl:flex-row ">
          <div className="w-full ">
            <label className="mb-1 block text-black ">Product Quantity</label>
            <Input
              placeholder={"Enter your product quantity"}
              name={"quantity"}
              value={values.quantity}
              onChange={handleChange}
              onBlur={handleBlur}
              feedback={[errors.quantity, touched.quantity]}
            />
          </div>
        </div>

        <div className="mb-2 flex justify-between ">
          <div className="flex flex-col">
            <Image
              file={values.img1}
              name="img1"
              setFieldValue={setFieldValue}
              onBlur={handleBlur}
              feedback={[errors.img1, touched.img1]}
            />
          </div>
          <div>
            <Image
              file={values.img2}
              name="img2"
              setFieldValue={setFieldValue}
            />
          </div>
          <div>
            <Image
              file={values.img3}
              name="img3"
              setFieldValue={setFieldValue}
            />
          </div>
        </div>

        <div className="mb-2 flex justify-between ">
          <div>
            <Image
              file={values.img4}
              name="img4"
              setFieldValue={setFieldValue}
            />
          </div>
          <div>
            <Image
              file={values.img5}
              name="img5"
              setFieldValue={setFieldValue}
            />
          </div>
          <div>
            <Image
              file={values.img6}
              name="img6"
              setFieldValue={setFieldValue}
            />
          </div>
        </div>
      </div>

      <div className="bg-red- w-auto flex gap-4 justify-end items-center mt-3">
        <button className="py-2 px-4  bg-[#00A0DE] hover:bg-blue-300 text-white w-1/2 text-center  font-semibold shadow-md   rounded-lg ">
          Clear
        </button>
        <button
          className="py-2 px-4  bg-[#00A0DE] hover:bg-blue-300 text-white w-1/2 text-center  font-semibold shadow-md   rounded-lg "
          onClick={handleSubmit}
        >
          Create
        </button>
      </div>
      {loader ? <Loader /> : <> </>}
    </div>
  );
};

export default ProductCreateForm;
