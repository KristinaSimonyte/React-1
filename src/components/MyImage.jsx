import cameraMan from "../assets/bandmember.jpeg";

function MyImage() {
  return (
    <figure className='card'>
      <figcaption>Photo 1</figcaption>
      <img src={cameraMan} alt='of band' />
    </figure>
  );
}

export default MyImage;
