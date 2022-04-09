import MyImage from "./MyImage";

function ImageList() {
    return (<div className='grid'>
    {/* paveiksleli importuojamt kaip JS objekta todel lauztiniai skliausteliai */}
    <MyImage />
    <MyImage />
    <MyImage />
  </div>
  );
}

export default ImageList;